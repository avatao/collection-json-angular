Collection+JSON Angular Implementation
======================================


Disclaimer
---

This project is under heavy development (alpha state), use it with care.
Many methods are not implemented. Changes are likely.

The library is not yet a *true* angular library, refer to the [Usage](#usage)
 
### Usage

The library needs to be configured with the proper Http service to work
For this create a module like this and import it in your root module:

```typescript
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CollectionConfigurationManager} from 'collection-json-base/models'

@NgModule({
  declarations: [],
  exports: [],
  imports: [HttpClientModule],
  providers: [],
})
export class AngularCollectionModule {
  // Set up collection-json-base library with the proper http service
  constructor(private httpClient: HttpClient) {
    try {
      CollectionConfigurationManager.getHttpService<HttpClient>();
    } catch (e) {
      CollectionConfigurationManager.setHttpService<HttpClient>(this.httpClient);
    }
  }
}

```

Receiving collection+json data:
```typescript

this.http.get('http://example.com').map(
    (result) => new AngularCollection(result.json().collection)
)
```



