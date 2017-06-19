import {
    CollectionJSON,
    ErrorJSON,
    ItemJSON,
    LinkJSON,
    QueryJSON,
    TemplateJSON,
} from 'collection-json.ts/dist/interfaces';

import {CollectionBase, LinkStore, QueryStore} from 'collection-json.ts/dist/models';

import {AngularError} from './error';
import {AngularItem} from './item';
import {AngularLink} from './link';
import {AngularQuery} from './query';
import {AngularTemplate} from './template';

export class AngularCollection extends CollectionBase {

    constructor(collection: CollectionJSON) {
        super(collection);
    }

    protected parseLinks(links: LinkJSON[]): void {

        this.links = new LinkStore();

        for (const link of links)
            this.links.add(new AngularLink(link));
    }

    protected parseItems(items: ItemJSON[]): void {

        this.items = [];

        for (const item of items)
            this.items.push(new AngularItem(item));
    }

    protected parseQueries(queries: QueryJSON[]): void {
        this.queries = new QueryStore();

        for (const query of queries)
            this.queries.add(new AngularQuery(query));
    }

    protected parseTemplate(template: TemplateJSON): void {
        this.template = new AngularTemplate(template);
    }

    protected parseError(error: ErrorJSON): void {
        this.error = new AngularError(error);
    }
}
