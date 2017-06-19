import {Collection, TemplateJSON} from 'collection-json.ts/dist/interfaces';
import {TemplateBase} from 'collection-json.ts/dist/models';
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
