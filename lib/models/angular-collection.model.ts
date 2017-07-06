import {
    CollectionJSON,
    ErrorJSON,
    ItemJSON,
    LinkJSON,
    QueryJSON,
    TemplateJSON,
} from 'collection-json-base/interfaces';

import {CollectionBase, LinkStore, QueryStore, ItemStore} from 'collection-json-base/models';
import {AngularError} from './angular-error.model';
import {AngularItem} from './angular-item.model';
import {AngularLink} from './angular-link.model';
import {AngularQuery} from './angular-query.model';
import {AngularTemplate} from './angular-template.model';

export class AngularCollection extends CollectionBase {

    constructor(collection: CollectionJSON) {
        super(collection);
    }

    public link(rel: string): AngularLink | undefined {
        const link = super.link(rel);

        if (typeof link !== 'undefined') {
            return super.link(rel) as AngularLink;
        }
    }

    public query(rel: string): AngularQuery | undefined {
        const query = super.query(rel);

        if (typeof query !== 'undefined') {
            return super.query(rel) as AngularQuery;
        }
    }

    protected parseLinks(links: LinkJSON[]): void {

        this.linkStore = new LinkStore();

        for (const link of links) {
          this.linkStore.add(new AngularLink(link));
        }
    }

    protected parseItems(items: ItemJSON[]): void {

        this.itemStore = new ItemStore();

        for (const item of items) {
          this.itemStore.add(new AngularItem(item));
        }
    }

    protected parseQueries(queries: QueryJSON[]): void {
        this.queryStore = new QueryStore();

        for (const query of queries) {
          this.queryStore.add(new AngularQuery(query));
        }
    }

    protected parseTemplate(template: TemplateJSON): void {
        this.template = new AngularTemplate(template, this.href);
    }

    protected parseError(error: ErrorJSON): void {
        this.error = new AngularError(error);
    }
}
