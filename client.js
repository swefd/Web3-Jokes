var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:3000/jokes', true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
    // do something to response
    console.log(this.responseText);
};

asd = {
    "content": "asd haha smeshno",
    "likes": 0,
    "dislikes": 0
}

xhr.send(asd);