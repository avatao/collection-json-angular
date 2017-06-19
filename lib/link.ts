import {Collection, LinkJSON} from 'collection-json.ts/dist/interfaces';
import {LinkBase} from 'collection-json.ts/dist/models';
import {AngularCollection} from './collection';

export class AngularLink extends LinkBase{

    constructor(link: LinkJSON) {
        super(link);
    }

    public follow(): Promise<Collection> {
        return new Promise<AngularCollection>(
            (resolve, reject) => {
                resolve();
            },
        );
    }
}
