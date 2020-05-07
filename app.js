const firstWord = document.querySelector("#word");
const langSelect = document.querySelector("#language");
const translateButton = document.querySelector(".btn");
const translateForm = document.querySelector("#translate-form");
const apiKey = "trnsl.1.1.20200503T132805Z.4c791f6c5bcabe43.b61648642843fc03aa52fa93e932fd352724eda6";
const outputImage = document.getElementById("outputImage");
const outputLanguage = document.getElementById("outputLanguage");
const outputWord = document.getElementById("outputWord");

function getData(e){
    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${firstWord.value}&lang=${langSelect.options[langSelect.options.selectedIndex].value}`)
    .then(response =>  response.json())
    .then(result => result.text[0])
    .then(word => {
        outputImage.src =`images/${langSelect.options[langSelect.options.selectedIndex].value}.png`;
        outputLanguage.textContent = langSelect.options[langSelect.options.selectedIndex].textContent;
        outputWord.textContent = word;
    })
  
    .catch(err => console.log(new Error(err)))

    e.preventDefault();
}

// getData();

// function eventListener(){
//     translateForm.addEventListener("submit",getData);
// }

// eventListener();


(function(){
    translateForm.addEventListener("submit",getData);

})();