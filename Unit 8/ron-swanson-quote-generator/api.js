var xhrBtn = $("#xhr");
var fetchBtn = $("#fetch");
var jqueryBtn = $("#jquery");
var axiosBtn = $("#axios");
var paragraph = $("p");
var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

xhrBtn.click(() => {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if(XHR.readyState == 4 && XHR.status == 200){
            paragraph.text(JSON.parse(XHR.responseText));
        }
    }

    XHR.open("GET", url);
    XHR.send();
})

fetchBtn.click(() => {
    fetch(url)
    .then((response) => {
        if(!response.ok) throw Error(response.status);
        return response;
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        paragraph.text(data);
    })
    .catch((err) => {
        console.log("Error: ", err);
    })
})

jqueryBtn.click(() => {
    $.getJSON(url)
    .done((data) => {
        paragraph.text(data);
    })
    .fail(() => {
        console.log("Error!");
    }) 
})

axiosBtn.click(() => {
    axios.get(url)
    .then((res) => {
        paragraph.text(res.data);
    })
    .catch((err) => {
        if(err.response){
            console.log("Error with response: ", err.response + err.response.status)
        } else if (err.request){
            console.log("Error with request: ", err.request)
        } else console.log(err.message);
    })
})