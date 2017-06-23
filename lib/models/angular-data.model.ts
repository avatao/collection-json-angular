import {DataBase} from 'collection-json-base/models/data';
import {DataJSON} from 'collection-json-base';

export class AngularData extends DataBase {

    constructor(data: DataJSON) {
        super(data);
    }
}
