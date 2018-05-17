import {LinkJSON, WrappedCollectionJSON} from 'collection-json-base/interfaces';
import {CollectionConfigurationManager, LinkBase} from 'collection-json-base/models';
import {Observable} from 'rxjs';
import {AngularCollection} from './angular-collection.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

export class AngularLink extends LinkBase {

    constructor(link: LinkJSON) {
        super(link);
    }

    public follow(params?: HttpParams): Observable<AngularCollection> {
        return (CollectionConfigurationManager.getHttpService<HttpClient>()
            .get<WrappedCollectionJSON>(this.href, {params: params})
            .pipe(
                map((collection) => new AngularCollection(collection))) as Observable<AngularCollection>
        );
    }
}
