var btn = document.querySelector("button");
var img = document.querySelector("img");

btn.addEventListener("click", () => {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if(XHR.readyState == 4 && XHR.status == 200){
            var url = JSON.parse(XHR.responseText).message;

            img.src = url;
        }
    }

    XHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
    XHR.send();
})