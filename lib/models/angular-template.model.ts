import {Collection, TemplateJSON} from 'collection-json-base/interfaces';
import {TemplateBase} from 'collection-json-base/models';
import {AngularCollection} from './angular-collection.model';
import {Observable} from 'rxjs/Observable';

export class AngularTemplate extends TemplateBase {

    constructor(template: TemplateJSON) {
        super(template);
    }

    public submit(): Observable<Collection> {
      return new Observable<AngularCollection>();
    }
    public update(): Observable<Collection> {
      return new Observable<AngularCollection>();
    }
}
