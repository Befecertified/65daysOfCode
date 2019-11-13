$("button").click(function(){
    $.getJSON("https://aws.random.cat/meow")
    .done((data) => {
        $("img").attr("src",data.file);
        console.log(data.file);
    })
    .fail(() => {
        alert("ERROR!");
    })
})