import {ItemJSON, LinkJSON} from 'collection-json-base/interfaces';
import {ItemBase} from 'collection-json-base/models';
import {AngularLink} from './angular-link.model';
import {DataJSON} from 'collection-json-base';
import {AngularData} from './angular-data.model';
import {AngularDataStore} from './angular-datastore.model';
import {AngularLinkStore} from './angular-linkstore.model';

export class AngularItem extends ItemBase {

    constructor(item: ItemJSON) {
        super(item);
    }

    public link(rel: string): AngularLink | undefined {
        const link = super.link(rel);

        if (typeof link !== 'undefined') {
            return super.link(rel) as AngularLink;
        }
    }

    public data(name: string): AngularData | undefined {
        const data = super.data(name);

        if (typeof data !== 'undefined') {
            return super.data(name) as AngularData;
        }
    }

    protected parseLinks(links: LinkJSON[]): void {

        this.linkStore = new AngularLinkStore();

        for (const link of links) {
          this.linkStore.add(new AngularLink(link));
        }
    }

    protected parseData(dataArray: DataJSON[]): void {
        this.dataStore = new AngularDataStore();

        for (const data of dataArray) {
            this.dataStore.add(new AngularData(data));
        }
    }

}
