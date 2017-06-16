import {Collection, TemplateJSON} from 'collection-json.ts/lib/interfaces';
import {TemplateBase} from 'collection-json.ts/lib/models';
import {AngularCollection} from './collection';

export class AngularTemplate extends TemplateBase {

    constructor(template: TemplateJSON) {
        super(template);
    }

    public submit(): Promise<Collection> {
        return new Promise<AngularCollection>(
            (resolve, reject) => {
                resolve();
            },
        );
    }
    public update(): Promise<Collection> {
        return new Promise<AngularCollection>(
            (resolve, reject) => {
                resolve();
            },
        );
    }
}
