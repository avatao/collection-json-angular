import {LinkJSON} from 'collection-json-base/interfaces';
import {LinkBase, CollectionConfigurationManager} from 'collection-json-base/models';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {AngularCollection} from './angular-collection.model';
import {Collection} from 'collection-json-base';

export class AngularLink extends LinkBase {

    constructor(link: LinkJSON) {
        super(link);
    }

    public follow(): Observable<Collection> {
        return CollectionConfigurationManager.getHttpService<Http>()
            .get(this.href)
            .map((response) => new AngularCollection(response.json().collection));
    }
}
