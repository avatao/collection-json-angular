import {Collection, QueryJSON} from 'collection-json-base/interfaces';
import {QueryBase} from 'collection-json-base/models';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import {CollectionConfigurationManager, DataJSON, DataStore} from 'collection-json-base';
import {AngularCollection} from './angular-collection.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {AngularData} from './angular-data.model';

export class AngularQuery extends QueryBase {

    constructor(query: QueryJSON) {
        super(query);
    }

    public send(params: { name: string, value: string | number | boolean }[] = []): Observable<Collection> {
        const requestOptions = new RequestOptions();
        const urlParams = new URLSearchParams();

        if (typeof this.dataStore !== 'undefined') {

            if (params.length !== 0) {
                for (const param of params) {
                    this.dataStore.data(param.name).value = param.value;
                }
            }

            for (const data of this.dataStore) {
                if (typeof data.value !== 'undefined') {
                    urlParams.set(data.name, String(data.value));
                }
            }
        }

        requestOptions.params = urlParams;

        return CollectionConfigurationManager.getHttpService<Http>().get(this.href, requestOptions)
            .map((result) => new AngularCollection(result.json().collection));
    }

    protected parseData(dataArray: DataJSON[]): void {
        this.dataStore = new DataStore();

        for (const data of dataArray) {
            this.dataStore.add(new AngularData(data));
        }
    }
}
