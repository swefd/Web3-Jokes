var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:3000/jokes', true);
xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8"');
xhr.onload = function() {
    // do something to response
    console.log(this.responseText);
};

xmlhttp.send(JSON.stringify({ "email": "hello@user.com", "response": { "name": "Tester" } }));