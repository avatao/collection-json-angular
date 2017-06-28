import {LinkJSON} from 'collection-json-base/interfaces';
import {LinkBase, CollectionConfigurationManager} from 'collection-json-base/models';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {AngularCollection} from './angular-collection.model';

export class AngularLink extends LinkBase {

    constructor(link: LinkJSON) {
        super(link);
    }

    public follow(): Observable<AngularCollection> {
        return CollectionConfigurationManager.getHttpService<Http>()
            .get(this.href)
            .map((response) => new AngularCollection(response.json().collection));
    }
}
