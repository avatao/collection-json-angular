import {
    CollectionJSON,
    ErrorJSON,
    ItemJSON,
    LinkJSON,
    QueryJSON,
    TemplateJSON,
    WrappedCollectionJSON
} from 'collection-json-base/interfaces';

import {CollectionBase} from 'collection-json-base/models';
import {AngularError} from './angular-error.model';
import {AngularItem} from './angular-item.model';
import {AngularLink} from './angular-link.model';
import {AngularQuery} from './angular-query.model';
import {AngularTemplate} from './angular-template.model';
import {AngularItemStore} from './angular-itemstore.model';
import {AngularQueryStore} from './angular-querystore.model';
import {AngularLinkStore} from './angular-linkstore.model';

export class AngularCollection extends CollectionBase {

    constructor(collection: CollectionJSON | WrappedCollectionJSON) {
        super(collection);
    }

    public link(rel: string): AngularLink | undefined {
        const link = super.link(rel);

        if (typeof link !== 'undefined') {
            return link as AngularLink;
        }
    }

    public query(rel: string): AngularQuery | undefined {
        const query = super.query(rel);

        if (typeof query !== 'undefined') {
            return query as AngularQuery;
        }
    }

    public template(): AngularTemplate | undefined {
        const template = super.template();
        if (typeof template !== 'undefined') {
            return template as AngularTemplate;
        }
    }

    public error(): AngularError | undefined {
        const error = super.error();
        if (typeof error !== 'undefined') {
            return error as AngularError;
        }
    }

    public items(): AngularItemStore {
        return super.items() as AngularItemStore;
    }


    public queries(): AngularQueryStore {
        return super.queries() as AngularQueryStore;
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

    protected parseItems(items: ItemJSON[]): void {

        this._itemStore = new AngularItemStore();

        for (const item of items) {
          this._itemStore.add(new AngularItem(item));
        }
    }

    protected parseQueries(queries: QueryJSON[]): void {
        this._queryStore = new AngularQueryStore();

        for (const query of queries) {
          this._queryStore.add(new AngularQuery(query));
        }
    }

    protected parseTemplate(template: TemplateJSON): void {
        this._template = new AngularTemplate(template, this.href);
    }

    protected parseError(error: ErrorJSON): void {
        this._error = new AngularError(error);
    }
}
