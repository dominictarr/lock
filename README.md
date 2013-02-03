# lock

lock asynchronous resources.

## Simple Example

``` js
var Lock = require('lock')
var lock = Lock()

lock('key', function (release) { //called when resource is available.

  //do an async operation, and wrap the callback with release.
  someAsyncOperation(args,..., release(function (err) {
    //'key' is not unlocked!
  })
})
```

## Multiple Locks at Once.

``` js
var Lock = require('lock')
var lock = Lock()

lock(['A', 'B', 'C'], function (release) { //called, when ALL
                                           //resources are available.

  //do an async operation, and wrap the callback with release(cb)
  someAsyncOperation(args,..., release(function (err) {
    //A, B & C are now unlocked!
  })
})
```

used in [level-update](https://github.com/dominictarr/level-update)

## License

MIT

