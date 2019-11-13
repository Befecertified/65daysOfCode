var btn = document.querySelector("button");
var span = document.querySelector("span");

btn.addEventListener("click", () => {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if(XHR.readyState == 4 && XHR.status == 200){
            var rate = JSON.parse(XHR.responseText).bpi.USD.rate;
            span.textContent = rate + 'USD';
        }
    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
})
