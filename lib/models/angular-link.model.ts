import {ReflectiveInjector} from '@angular/core';
import {
    BaseRequestOptions,
    BaseResponseOptions,
    BrowserXhr,
    ConnectionBackend,
    CookieXSRFStrategy,
    Http,
    RequestOptions,
    ResponseOptions,
    XHRBackend,
    XSRFStrategy,
} from '@angular/http';
import {Collection, LinkJSON} from 'collection-json-base/interfaces';
import {LinkBase} from 'collection-json-base/models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {AngularCollection} from './angular-collection.model';

export class AngularLink extends LinkBase {

    private http: Http;

    constructor(link: LinkJSON) {
        super(link);
        const injector = ReflectiveInjector.resolveAndCreate([
          Http,
          BrowserXhr,
          {provide: RequestOptions, useClass: BaseRequestOptions},
          {provide: ResponseOptions, useClass: BaseResponseOptions},
          {provide: ConnectionBackend, useClass: XHRBackend},
          {provide: XSRFStrategy, useFactory: () => new CookieXSRFStrategy()},
        ]);

        this.http = injector.get(Http);
    }

    public follow(): Observable<Collection> {
        return this.http.get(this.href).map((response) => new AngularCollection(response.json().collection));
    }
}
