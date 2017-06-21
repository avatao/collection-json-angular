import {Collection, QueryJSON} from 'collection-json-base/interfaces';
import {QueryBase} from 'collection-json-base/models';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import {CollectionConfigurationManager} from 'collection-json-base';
import {AngularCollection} from './angular-collection.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

export class AngularQuery extends QueryBase {

    constructor(query: QueryJSON) {
        super(query);
    }

    public send(): Observable<Collection> {
        const requestOptions = new RequestOptions();
        const params = new URLSearchParams();

        if (typeof this.dataStore !== 'undefined') {
            for (const data of this.dataStore) {
                if (typeof data.value !== 'undefined') {
                    params.set(data.name, String(data.value));
                }
            }
        }

        requestOptions.params = params;

        return CollectionConfigurationManager.getHttpService<Http>().get(this.href, requestOptions)
            .map((result) => new AngularCollection(result.json().collection));
    }
}
