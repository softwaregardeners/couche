Couche
======

Couche checks required variables against your env, eventually throwing an `Error`.
if `VARIABLE_NAME` is not available in the env, Couche will check against the file pointed by `VARIABLE_NAME_FILE`.

Installation
------------

```
npm install @softwaregardeners/couche
```

Usage
-----

```
const couche = require('@softwaregardeners/couche');

# will throw an error if `SOMETHING_REQUIRED` is not defined in the env,
# or we could not find a file at `SOMETHING_REQUIRED_FILE`
couche(['SOMETHING', 'SOMETHING_REQUIRED!]);
```
