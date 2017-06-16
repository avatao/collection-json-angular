import {ItemJSON, LinkJSON} from 'collection-json.ts/lib/interfaces';
import {ItemBase} from 'collection-json.ts/lib/models';

export class AngularItem extends ItemBase {

    constructor(item: ItemJSON) {
        super(item);
    }

    protected parseLinks(links: LinkJSON[]): void {
        throw new Error('Method not implemented.');
    }

}
