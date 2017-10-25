import {LinkJSON, WrappedCollectionJSON} from 'collection-json-base/interfaces';
import {LinkBase, CollectionConfigurationManager} from 'collection-json-base/models';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {AngularCollection} from './angular-collection.model';
import {HttpClient, HttpParams} from '@angular/common/http';

export class AngularLink extends LinkBase {

    constructor(link: LinkJSON) {
        super(link);
    }

    public follow(params?: HttpParams): Observable<AngularCollection> {
        return (CollectionConfigurationManager.getHttpService<HttpClient>()
            .get<WrappedCollectionJSON>(this.href, {params: params})
            .map((collection) => new AngularCollection(collection)) as Observable<AngularCollection>);
    }
}
