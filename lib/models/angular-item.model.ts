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
            return link as AngularLink;
        }
    }

    public data(name: string): AngularData | undefined {
        const data = super.data(name);

        if (typeof data !== 'undefined') {
            return data as AngularData;
        }
    }

    public allData(): AngularDataStore {
        return super.allData() as AngularDataStore;
    }

    public links(): AngularLinkStore {
        return super.links() as AngularLinkStore;
    }

    protected parseLinks(links: LinkJSON[]): void {

        this._linkStore = new AngularLinkStore();

        for (const link of links) {
          this._linkStore.add(new AngularLink(link));
        }
    }

    protected parseData(dataArray: DataJSON[]): void {
        this._dataStore = new AngularDataStore();

        for (const data of dataArray) {
            this._dataStore.add(new AngularData(data));
        }
    }
}
