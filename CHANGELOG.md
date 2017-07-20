1.0.0-alpha.32 / 2017-07-20
==================

* items method on AngularCollection class returns AngularItemStore object instead
of ItemStore

1.0.0-alpha.31 / 2017-07-20
==================

* Created Angular version of the base library store object (DataStore ItemStore etc..)
* Updated base library

1.0.0-alpha.30 / 2017-07-17
==================

* Template submit and send method does not explicitly throw an error
it returns an Observable.throw() instead -> this will eliminate some boilerplate
on the client side

1.0.0-alpha.29 / 2017-07-06
==================

* Some methods no longer throw an error see [base library](https://github.com/avatao/collection-json-base/blob/master/CHANGELOG.md#100-beta12--2017-07-06)

1.0.0-alpha.28 / 2017-07-04
==================

* AngularLink's follow method now accepts optional query parameters.

1.0.0-alpha.27 / 2017-07-03
==================

* Override methods to return proper types, this will
eliminate the need for casting on the client side

1.0.0-alpha.26 / 2017-07-03
==================

* Updated base library
* Using correct return value types for this implementation

1.0.0-alpha.25 / 2017-07-03
==================

* Updated base library

1.0.0-alpha.24 / 2017-07-03
==================

* Updated base library

1.0.0-alpha.23 / 2017-06-29
==================

* Updated base library

1.0.0-alpha.22 / 2017-06-29
==================

* Updated base library

1.0.0-alpha.21 / 2017-06-28
==================

* Updated base library

1.0.0-alpha.20 / 2017-06-28
==================

* Observable return values are using the library interface

1.0.0-alpha.19 / 2017-06-28
==================

* Refactored variable names
* Updated base library

1.0.0-alpha.18 / 2017-06-27
==================

* The base library is now in beta

1.0.0-alpha.17 / 2017-06-26
==================

* Using new validate method in template class, which runs
Template Validation and Validations Array extension checks

1.0.0-alpha.16 / 2017-06-23
==================

* Validation check moved to the base library

1.0.0-alpha.15 / 2017-06-23
==================

* Fixed presence check logic on validations

1.0.0-alpha.14 / 2017-06-23
==================

* Removed Template set and setAll methods (moved to base library)

1.0.0-alpha.13 / 2017-06-23
==================

* Length validation checks against the string length

1.0.0-alpha.12 / 2017-06-23
==================

* Fixed validation length bounds

1.0.0-alpha.11 / 2017-06-23
==================

* Updated collection-json-base library
* Implemented Validation Array extension checks

1.0.0-alpha.10 / 2017-06-22
==================

* Updated collection-json-base library
* Created AngularData class
* Implemented AngularTemplate submit and update methods

1.0.0-alpha.9 / 2017-06-21
==================

* Updated collection-json-base library

1.0.0-alpha.8 / 2017-06-21
==================

* AngularQuery send method takes an array of query parameters

1.0.0-alpha.7 / 2017-06-21
==================

* Implemented AngularQuery's send method

1.0.0-alpha.6 / 2017-06-21
==================

* Using CollectionConfigurationManager to get the Http service

1.0.0-alpha.5 / 2017-06-20
==================

* README changes, republished on npm

1.0.0-alpha.3 / 2017-06-20
==================

* First published version
* Library is INCOMPLETE and will not work properly with angular yet

1.0.0-alpha.2 / 2017-06-20
==================

* Changed file names and project structure to make it similar to [collection-json-base](https://github.com/avatao/collection-json-base)

1.0.0-alpha.1 / 2017-06-16
==================

* Created initial version of the library (methods are not implemented properly yet)