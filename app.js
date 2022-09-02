var btn = document.querySelector("#button-translate");
var Input = document.querySelector("#txt-input");
var Output = document.querySelector("#out-put");

var serverName = "https://api.funtranslations.com/translate/ferb-latin.json";

btn.addEventListener("click", clickhandler);

function errorHandler(error) {
    alert("something went wrong please try again some time");
}

function clickhandler() {
    var Newinput = Input.value; //taking input

    //calling server for processing
    fetch(getTranslateurl(Newinput))
        .then((response) => response.json())

        .then((json) => {
            var translateText = json.contents.translated;
            Output.innerText = translateText; //output
        })
        .catch(errorHandler);
}
function getTranslateurl(text) {
    return serverName + "?" + "text=" + text;
}
