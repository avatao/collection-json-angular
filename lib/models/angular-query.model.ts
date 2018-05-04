import {QueryJSON} from 'collection-json-base/interfaces';
import {QueryBase} from 'collection-json-base/models';
import {CollectionConfigurationManager, DataJSON, WrappedCollectionJSON} from 'collection-json-base';
import {AngularCollection} from './angular-collection.model';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {AngularData} from './angular-data.model';
import {AngularDataStore} from './angular-datastore.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

export class AngularQuery extends QueryBase {

    constructor(query: QueryJSON) {
        super(query);
    }

    public send(params: { name: string, value: string | number | boolean }[] = []): Observable<AngularCollection> {
        let urlParams = new HttpParams();

        if (typeof this._dataStore !== 'undefined') {
            if (params.length !== 0) {
                for (const param of params) {
                    this._dataStore.setDataValue(param.name, param.value);
                }
            }
            for (const data of this._dataStore) {
                if (typeof data.value !== 'undefined') {
                    urlParams = urlParams.set(data.name, String(data.value));
                }
            }
        }

        return (CollectionConfigurationManager.getHttpService<HttpClient>()
            .get<WrappedCollectionJSON>(this.href, {params: urlParams})
            .pipe(map((collection) => new AngularCollection(collection))) as Observable<AngularCollection>);
    }

    public allData(): AngularDataStore {
        return super.allData() as AngularDataStore;
    }

    protected parseData(dataArray: DataJSON[]): void {
        this._dataStore = new AngularDataStore();

        for (const data of dataArray) {
            this._dataStore.add(new AngularData(data));
        }
    }
}
