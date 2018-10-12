# Review Questions

## What is Node.js?
Node is a javascript run-time environment and platform used to execute js apps outside of the browser, commonly used to make servers.

## What is Express?
Express is a framework that works with http. It extends functionality of node js allowing users to make route handlers, middleware etc

## Mention two parts of Express that you learned about this week.
Express uses JSON to make restful API's. It's lightweight and unopinionated.

## What is Middleware?
Middleware are extensions of route handler functions that features such as logging and security. There are many ways you can use middleware to make changes to your request and response object.

## What is a Resource?
Resources are objects with information that match resource objects. Represented by JSON, XML, and Text.

## What can the API return to help clients know if a request was successful?
The API can return a any status message in the 200 range and a success message.

## How can we partition our application into sub-applications?
importing them by 'require' and activate them through use()

## What is express.json() and why do we need it?
express.json() allows body parsing when using .json() in route handlers