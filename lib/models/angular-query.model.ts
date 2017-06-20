import {Collection, QueryJSON} from 'collection-json-base/interfaces';
import {QueryBase} from 'collection-json-base/models';
import {AngularCollection} from './angular-collection.model';
import {Observable} from 'rxjs/Observable';

export class AngularQuery extends QueryBase {

    constructor(query: QueryJSON) {
        super(query);
    }

    public send(): Observable<Collection> {
        return new Observable<AngularCollection>();
    }
}
