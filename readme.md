# Demonstrate problem using react-datagrid2 with nextjs

in running sample there a lot of errors in console (after mouse move) like 
```
Uncaught TypeError: Cannot read property 'props' of undefined
    at handleWheel (index.js:279)
    at HTMLUnknownElement.callCallback (commons.js:548)
    at Object.invokeGuardedCallbackDev (commons.js:587)
    at Object.invokeGuardedCallback (commons.js:444)
    at Object.invokeGuardedCallbackAndCatchFirstError (commons.js:458)
    at executeDispatch (commons.js:842)
    at executeDispatchesInOrder (commons.js:864)
    at executeDispatchesAndRelease (commons.js:962)
    at executeDispatchesAndReleaseTopLevel (commons.js:973)
    at Array.forEach (<anonymous>)
```

but same code works in codesandbox like a charm
https://codesandbox.io/s/n069yloop

## Some more info
If code is run using `npm run dev` - error occured, 
but if it is run using `npm run build && npm run start` it works correctly