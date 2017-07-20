import {LinkStore} from 'collection-json-base';
import {AngularLink} from './angular-link.model';

export class AngularLinkStore extends LinkStore {
    constructor() {
        super();
    }

    link(rel: string): AngularLink | undefined {
        return super.link(rel);
    }

    [Symbol.iterator](): IterableIterator<AngularLink> {
        return super[Symbol.iterator]() as IterableIterator<AngularLink>;
    }
}
