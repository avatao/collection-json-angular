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

Follow a link (request the collection it points to), the link of a collection or item can be accessed
using its rel property:

```typescript
const collection = new AngularCollection(someCollection);
const optionalParameters = new HttpParams();

collection.link('link_rel').follow(optionalParamateres).subscribe(
    (requestedCollection: AngularCollection) => {
        // You can use the received requestedCollection which is already an AngularCollection type.
    }
);
```

Get the items of a collection:

```typescript
const collection = new AngularCollection(someCollection);
let item: AngularItem;
let itemStore: AngularItemStore;

try {
    itemStore = collection.items(); // Throws an error if there are no items on the collection
} catch (e) {
    console.error(e.message);
}

// Let's assume that the collection has items from now on

try {
    item = collection.items().one(); // Returns only one item, throws an error if there are more than one
} catch (e) {
    console.error(e.message);
}

item = collection.items().first(); // Returns the first item or undefined

// Returns all of the items on the collection in an AngularItem array.
let items: AngularItem[] = collection.items().all(); 
```

Prepare and send a template:

```typescript
const collection = new AngularCollection(someCollection);
const template = collection.template();

// Setting a property
template.set("propertyName", "propertyValue");

// Setting multiple properties using a JavaScript object
template.setWithDataObject(
    {
        "propertyName1" : "propertyValue1",
        "propertyName2" : "propertyValue2",
    }
);

// Send a POST request
template.submit().subscribe(
    (result: AngularCollection) => {
        // This might be empty, depends on the backend
    },
    (error) => {
        if (error instanceof Error) {
           // Validation error
        } else {
           // Server error
        }
    }
);

// Send a PUT request
template.update().subscribe(
    (result: AngularCollection) => {
        // This might be empty, depends on the backend
    },
    (error) => {
        if (error instanceof Error) {
           // Validation error
        } else {
           // Server error
        }
    }
);
```
