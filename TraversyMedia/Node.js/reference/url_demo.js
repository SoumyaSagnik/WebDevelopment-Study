const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// ! Serialized URL
console.log(myUrl.href); // http://mywebsite.com/hello.html?id=100&status=active

// ! Host (root domain)
console.log(myUrl.host); // mywebsite.com

// ! Host name (does not get port)
console.log(myUrl.hostname); // mywebsite.com

// ! Pathname
console.log(myUrl.pathname); // hello.html

// ! Serialized query
console.log(myUrl.search); // ?id=100&status=active

// ! Params object
console.log(myUrl.searchParams);
// URLSearchParams { 'id' => '100', 'status' => 'active' }

// ! Add param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);
// URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// ! Loop through the params
myUrl.searchParams.forEach((value, key) => {
  console.log(`key: ${key}, value: ${value}`);
});
//* key: id, value: 100
//* key: status, value: active
//* key: abc, value: 123
//? Note: here value, key in param and then it comes fine instead of what you thought!
