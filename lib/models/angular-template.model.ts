import {DataJSON, TemplateJSON} from 'collection-json-base/interfaces';
import {CollectionConfigurationManager, TemplateBase} from 'collection-json-base/models';
import {AngularCollection} from './angular-collection.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {AngularData} from './angular-data.model';
import {AngularDataStore} from './angular-datastore.model';

export class AngularTemplate extends TemplateBase {

    private href?: string;

    constructor(template: TemplateJSON, href?: string) {
        super(template);
        this.href = href;
    }

    public data(name: string): AngularData | undefined {
        const data = super.data(name);

        if (typeof data !== 'undefined') {
            return data as AngularData;
        }
    }

    allData(): AngularDataStore {
        return super.allData() as AngularDataStore;
    }

    public submit(): Observable<AngularCollection> {

        if (typeof this.href === 'undefined') {
            return Observable.throw(new Error('Href must be specified to send a POST request using the template'));
        }

        try {
            this.validate();
        } catch (e) {
            return Observable.throw(e);
        }

        const body = { template: this.json() };

        return CollectionConfigurationManager.getHttpService<Http>().post(this.href, body).map(
            (response) => {
                if (response.json() && response.json().collection) {
                    return new AngularCollection(response.json().collection);
                }

                return response.json();
            });
    }
    public update(): Observable<AngularCollection> {

        if (typeof this.href === 'undefined') {
            return Observable.throw(new Error('Href must be specified to send a PUT request using the template'));
        }

        try {
            this.validate();
        } catch (e) {
            return Observable.throw(e);
        }

        const body = { template: this.json() };

        return CollectionConfigurationManager.getHttpService<Http>().put(this.href, body).map(
            (response) => {
                if (response.json() && response.json().collection) {
                    return new AngularCollection(response.json().collection);
                }

                return response.json();
            });
    }

    protected parseData(dataArray: DataJSON[]): void {
        this._dataStore = new AngularDataStore();

        for (const data of dataArray) {
            this._dataStore.add(new AngularData(data));
        }
    }
}
