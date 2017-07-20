import {QueryBase, QueryStore} from 'collection-json-base';
import {AngularQuery} from './angular-query.model';

export class AngularQueryStore extends QueryStore {
    constructor() {
        super();
    }

    query(rel: string): QueryBase | undefined {
        return super.query(rel);
    }

    [Symbol.iterator](): IterableIterator<AngularQuery> {
        return super[Symbol.iterator]() as IterableIterator<AngularQuery>;
    }
}
