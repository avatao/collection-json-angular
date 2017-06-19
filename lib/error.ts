import {ErrorJSON} from 'collection-json.ts/dist/interfaces';
import {ErrorBase} from 'collection-json.ts/dist/models';

export class AngularError extends ErrorBase {

    constructor(error: ErrorJSON) {
        super(error);
    }
}
