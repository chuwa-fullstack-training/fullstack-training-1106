let a = 1;
// assertion
let message: unknown = 'hello world';
let messageLength: number = (message as string).length;
// let messageLength: number = (<string>message).length;

const something = { name: 'something' };
if (true) {
  something.name = 'another thing';
}

function handleRequest(url: string, method: 'GET' | 'POST'): void {
  // ...
}

const req = {
  url: 'https://example.com',
  method: 'GET'
};
handleRequest(req.url, req.method);
