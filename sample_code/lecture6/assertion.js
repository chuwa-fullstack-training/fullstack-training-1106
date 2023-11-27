var a = 1;
// assertion
var message = 'hello world';
var messageLength = message.length;
// let messageLength: number = (<string>message).length;
var something = { name: 'something' };
if (true) {
    something.name = 'another thing';
}
// function handleRequest(url: string, method: 'GET' | 'POST'): void {
//   // ...
// }
// const req = {
//   url: 'https://example.com',
//   method: 'GET'
// };
// handleRequest(req.url, req.method);
var Methods;
(function (Methods) {
    Methods["GET"] = "GET";
    Methods["POST"] = "POST";
})(Methods || (Methods = {}));
function handleRequest(url, method) {
    // ...
}
var req = {
    url: 'https://example.com',
    method: Methods.GET
};
handleRequest(req.url, req.method);
