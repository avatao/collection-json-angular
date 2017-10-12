Collection+JSON Angular Implementation
======================================


Disclaimer
---

This project is under heavy development (alpha state), use it with care. Changes are likely.

The library is not yet a *"true"* angular library, refer to the [Usage](#usage)
 
### Usage

The library needs to be configured with the proper HttpClient service to work
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

To request a Collection+JSON type information using the HttpClient the WrappedCollectionJSON interface
from the base library can be used. Every collection will come in a form { collection: CollectionJSON }.
The AngularCollection constructor can accept either a WrappedCollectionJSON or a CollectionJSON:

```typescript
import {WrappedCollectionJSON} from 'collection-json-base';

 this.httpClient.get<WrappedCollectionJSON>('http://example.com').map(
    (wrappedCollectionJson) => new AngularCollection(wrappedCollectionJson)
)
```

Follow a link (request the collection it points to):

```typescript
const collection = new AngularCollection(someCollection);
const optionalParameters = new HttpParams();

collection.link('link_prompt').follow(optionalParamateres).subscribe(
    (requestedCollection: AngularCollection) => {
        // You can use the received requestedCollection which is already an AngularCollection type.
    }
);
```



