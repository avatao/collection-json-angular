import {ItemStore} from 'collection-json-base';
import {AngularItem} from './angular-item.model';

export class AngularItemStore extends ItemStore {

    constructor() {
        super();
    }

    all(): AngularItem[] {
        return super.all() as AngularItem[];
    }

    first(): AngularItem | undefined {
        const first = super.first();
        if (typeof first !== 'undefined') {
            return first as AngularItem;
        }
    }

    one(): AngularItem {
        return super.one() as AngularItem;
    }

    [Symbol.iterator](): IterableIterator<AngularItem> {
        return super[Symbol.iterator]() as IterableIterator<AngularItem>;
    }

}
