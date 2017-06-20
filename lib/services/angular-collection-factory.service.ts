import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CollectionJSON} from 'collection-json-base/interfaces';
import {AngularCollection} from '../models/angular-collection.model';

@Injectable()
export class AngularCollectionFactory {

    constructor(http: Http) {
        if (typeof AngularCollection.httpService === 'undefined') {
            AngularCollection.httpService = http;
        }
    }

    create(collection: CollectionJSON) {
        return new AngularCollection(collection);
    }
}
