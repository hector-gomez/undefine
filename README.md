undefine
========

NodeJS module to remove AMD support from your JavaScript files.

Its goal will be to remove `define` and `require` calls from JavaScript files.

Common scenario:

* Your view has an AMD loader
* You load a module that would normally expose a global object
* This module detects the presence of an AMD loader and registers the module but doesn't create the global object
* You are forced to do a lot of tinkering with your loader's config to get it to work

Run this utility on your file and it will no longer detect AMD!

## WARNING

This module is still in its early stages, and is **not** ready to be used.