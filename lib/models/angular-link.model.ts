import {LinkJSON} from 'collection-json-base/interfaces';
import {LinkBase, CollectionConfigurationManager} from 'collection-json-base/models';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {AngularCollection} from './angular-collection.model';

export class AngularLink extends LinkBase {

    constructor(link: LinkJSON) {
        super(link);
    }

    public follow(params?: Map<string, string>): Observable<AngularCollection> {

        const requestOptions = new RequestOptions();

        if (typeof params !== 'undefined') {
            const urlParams = new URLSearchParams();
            for (const [key, value] of params.entries()) {
                urlParams.set(key, value);
            }
            requestOptions.params = urlParams;
        }

        return CollectionConfigurationManager.getHttpService<Http>()
            .get(this.href, requestOptions)
            .map((response) => new AngularCollection(response.json().collection));
    }
}
