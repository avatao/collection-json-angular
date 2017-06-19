import {Collection, QueryJSON} from 'collection-json.ts/dist/interfaces';
import {QueryBase} from 'collection-json.ts/dist/models';
import {AngularCollection} from './collection';

export class AngularQuery extends QueryBase{

    constructor(query: QueryJSON) {
        super(query);
    }

    public send(): Promise<Collection> {
        return new Promise<AngularCollection>(
            (resolve, reject) => {
                resolve();
            },
        );
    }
}
