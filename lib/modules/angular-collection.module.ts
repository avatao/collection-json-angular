import {ModuleWithProviders, NgModule} from '@angular/core';
import {AngularCollectionFactory} from '../services/angular-collection-factory.service';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [HttpModule],
    declarations: [],
    exports: [],
})
export class AngularCollectionModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AngularCollectionModule,
            providers: [AngularCollectionFactory]
        };
    }
}
