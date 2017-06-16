import {ErrorJSON} from 'collection-json.ts/lib/interfaces';
import {ErrorBase} from 'collection-json.ts/lib/models';

export class AngularError extends ErrorBase {

    constructor(error: ErrorJSON) {
        super(error);
    }
}
