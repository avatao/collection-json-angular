import {DataStore} from 'collection-json-base';
import {AngularData} from './angular-data.model';

export class AngularDataStore extends DataStore {
    constructor() {
        super();
    }

    [Symbol.iterator](): IterableIterator<AngularData> {
        return super[Symbol.iterator]() as IterableIterator<AngularData>;
    }
}
