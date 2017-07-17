import {DataJSON, TemplateJSON} from 'collection-json-base/interfaces';
import {CollectionConfigurationManager, DataStore, TemplateBase} from 'collection-json-base/models';
import {AngularCollection} from './angular-collection.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {Http} from '@angular/http';
import {AngularData} from './angular-data.model';

export class AngularTemplate extends TemplateBase {

    private href?: string;

    constructor(template: TemplateJSON, href?: string) {
        super(template);
        this.href = href;
    }

    public data(name: string): AngularData | undefined {
        const data = super.data(name);

        if (typeof data !== 'undefined') {
            return super.data(name) as AngularData;
        }
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

        return CollectionConfigurationManager.getHttpService<Http>().post(this.href, body)
            .map((response) => new AngularCollection(response.json().collection));
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

        return CollectionConfigurationManager.getHttpService<Http>().put(this.href, body)
            .map((response) => new AngularCollection(response.json().collection));
    }

    protected parseData(dataArray: DataJSON[]): void {
        this.dataStore = new DataStore();

        for (const data of dataArray) {
            this.dataStore.add(new AngularData(data));
        }
    }
}
