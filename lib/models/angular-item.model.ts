import {ItemJSON, LinkJSON} from 'collection-json-base/interfaces';
import {ItemBase, LinkStore} from 'collection-json-base/models';
import {AngularLink} from './angular-link.model';

export class AngularItem extends ItemBase {

    constructor(item: ItemJSON) {
        super(item);
    }

    protected parseLinks(links: LinkJSON[]): void {

        this.links = new LinkStore();

        for (const link of links) {
          this.links.add(new AngularLink(link));
        }
    }

}
