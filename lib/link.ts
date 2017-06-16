import {Collection, LinkJSON} from 'collection-json.ts/lib/interfaces';
import {LinkBase} from 'collection-json.ts/lib/models';
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
