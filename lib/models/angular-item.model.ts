import {ItemJSON, LinkJSON} from 'collection-json-base/interfaces';
import {ItemBase, LinkStore} from 'collection-json-base/models';
import {AngularLink} from './angular-link.model';
import {DataJSON, DataStore} from 'collection-json-base';
import {AngularData} from './angular-data.model';

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

    protected parseData(dataArray: DataJSON[]): void {
        this.dataStore = new DataStore();

        for (const data of dataArray) {
            this.dataStore.add(new AngularData(data));
        }
    }

}
