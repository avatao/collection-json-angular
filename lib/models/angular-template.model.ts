import {Collection, TemplateJSON} from 'collection-json-base/interfaces';
import {CollectionConfigurationManager, TemplateBase} from 'collection-json-base/models';
import {AngularCollection} from './angular-collection.model';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {DataJSON, DataStore} from 'collection-json-base';
import {AngularData} from './angular-data.model';

export class AngularTemplate extends TemplateBase {

    private href?: string;

    constructor(template: TemplateJSON, href?: string) {
        super(template);
        this.href = href;
    }

    public set(name: string, value: string | number | boolean ) {
        this.dataStore.data(name).value = value;
    }

    public setAll(body: {name: string, value: string}[]) {
        for (const item of body) {
            this.set(item.name, item.value);
        }
    }

    public submit(): Observable<Collection> {

        if (typeof this.href === 'undefined') {
            throw new Error('Href must be specified to send a POST request using the template');
        }

        this.validationsExtensionCheck();

        const body = { template: this.json() };

        return CollectionConfigurationManager.getHttpService<Http>().post(this.href, body)
            .map((response) => new AngularCollection(response.json().collection));
    }
    public update(): Observable<Collection> {

        if (typeof this.href === 'undefined') {
            throw new Error('Href must be specified to send a request using the template');
        }

        this.validationsExtensionCheck();

        const body = { template: this.json() };

        return CollectionConfigurationManager.getHttpService<Http>().put(this.href, body)
            .map((response) => new AngularCollection(response.json().collection));
    }

    protected parseData(dataArray: DataJSON[]): void {
        this.dataStore = new DataStore();

        for (const data of dataArray) {
            this.dataStore.add(new AngularData(data));
        }
    }

    private validationsExtensionCheck(): void {

        let wasError = false;

        for (const data of this.dataStore) {
            if (typeof data.validations !== 'undefined') {
                for (const validation of data.validations) {

                    if (typeof validation.arguments === 'undefined') {
                        continue;
                    }

                    switch (validation.name) {
                        case 'inclusion':
                            // Filter the arguments array where the value equals the current value, if empty error is thrown
                            if (typeof data.value !== 'undefined') {
                                wasError = validation.arguments.filter(argument => argument.value === data.value).length === 0;
                            }
                            break;
                        case 'exclusion':
                            // Filter the arguments array where the value equals the current value, if not empty error is thrown
                            if (typeof data.value !== 'undefined') {
                                wasError = validation.arguments.filter(argument => argument.value === data.value).length > 0;
                            }
                            break;
                        case 'format':
                            if (typeof data.value !== 'undefined') {
                                const regexp_argument = validation.arguments.find(argument => argument.name === 'regex');

                                if (typeof regexp_argument === 'undefined') {
                                    break;
                                }

                                wasError = !RegExp(String(regexp_argument.value)).test(String(data.value));
                            }
                            break;
                        case 'length':
                            if (typeof data.value !== 'undefined') {
                                const lower_bound_argument = validation.arguments.find(argument => argument.name === 'lower_bound');
                                const upper_bound_argument = validation.arguments.find(argument => argument.name === 'upper_bound');

                                if (typeof lower_bound_argument === 'undefined' || typeof upper_bound_argument === 'undefined' ) {
                                    break;
                                }

                                const lower_bound = Number(lower_bound_argument.value);
                                const upper_bound = Number(upper_bound_argument.value);
                                const valueLength = String(data.value).length;

                                if (!(valueLength >= lower_bound && valueLength <= upper_bound)) {
                                    wasError = true;
                                }
                            }
                            break;
                        case 'file_type':
                            // Expecting value to be Data URI with mime types
                            if (typeof data.value !== 'undefined') {
                                const fileType = (<string>data.value).split(';')[0].split(':')[1];
                                wasError = validation.arguments.filter(
                                    argument => (<string>argument.value).includes(fileType)).length === 0;
                            }
                            break;
                        case 'file_size':
                            // Expecting value to be Data URI with mime types
                            if (typeof data.value !== 'undefined') {
                                // Base64 encoding turns 6 bytes into 8, so we multiply by 3/4
                                const fileSize = (<string>data.value).length * (3 / 4);
                                const lower_bound_argument = validation.arguments.find(argument => argument.name === 'lower_bound');
                                const upper_bound_argument = validation.arguments.find(argument => argument.name === 'upper_bound');

                                if (typeof lower_bound_argument === 'undefined' || typeof upper_bound_argument === 'undefined' ) {
                                    break;
                                }

                                const lower_bound = Number(lower_bound_argument.value);
                                const upper_bound = Number(upper_bound_argument.value);

                                if (!(fileSize >= lower_bound && fileSize <= upper_bound)) {
                                    wasError = true;
                                }
                            }
                            break;
                        case 'presence':
                            if (typeof data.validations === 'undefined') {
                                wasError = true;
                            }
                            break;
                    }

                    if (wasError) {
                        throw new Error(validation.message || 'Validation failed');
                    }
                }
            }
        }
    }
}
