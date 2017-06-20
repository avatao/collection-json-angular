import {ErrorJSON} from 'collection-json-base/interfaces';
import {ErrorBase} from 'collection-json-base/models';

export class AngularError extends ErrorBase {

    constructor(error: ErrorJSON) {
        super(error);
    }
}
