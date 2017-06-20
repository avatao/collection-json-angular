import {Collection, LinkJSON} from 'collection-json-base/interfaces';
import {LinkBase} from 'collection-json-base/models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {AngularCollection} from './angular-collection.model';

export class AngularLink extends LinkBase {

    constructor(link: LinkJSON) {
        super(link);
    }

    public follow(): Observable<Collection> {
        return AngularCollection.httpService.get(this.href).map((response) => new AngularCollection(response.json().collection));
    }
}
