//Select Button to generate random user
var btn = document.querySelector("footer");

//Select Position to change when button is clicked
var avatarPos = document.querySelector("#avatar");
var namePos = document.querySelector("#name");
var usernamePos = document.querySelector("#username");
var emailPos = document.querySelector("#email");
var cityPos = document.querySelector("#city");

//url to fetch random user data
var url = "https://randomuser.me/api"

//add eventlistener to button

btn.addEventListener("click", () => {

    fetch(url)
    .then((req) => {
        if (!req.ok) throw Error(req.status);
        return req;
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        // console.log(data.results[0].name.first + " " + data.results[0].name.last);

        var avatar = data.results[0].picture.medium;
        var name = data.results[0].name.first + " " + data.results[0].name.last;
        var username = data.results[0].login.username;
        var email = data.results[0].email;
        var city = data.results[0].location.city;

        avatarPos.src = avatar;
        namePos.innerText = name;
        usernamePos.innerText = username;
        emailPos.innerText = "Email: " + email;
        cityPos.innerText = `City: ${city}`;
    })
    .catch((req) => {
        console.log(req);
    })
})