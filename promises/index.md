### What are promises?

Promises are objects that represent the completion or failure of an asynchronous request.
They are returned from WebAPIs used by `fetch` and `XHR`, for instance.

Their main goal is to improve the way asynchronicity is handled in JavaScript and prevent the so hated
callback hell.

Its API is quite simple, providing two main methods to treat its response: 

`then` to indicate what to do after the request is resolved 
`catch` to indicate what to do if the request has failed