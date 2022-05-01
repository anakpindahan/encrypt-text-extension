let textArea = document.getElementById("proh-words");
let saveButton = document.getElementById("save-button");

chrome.storage.sync.get("proh_words", ({proh_words}) => {
  textArea.value = proh_words.toString();
})

saveButton.addEventListener("click", readInput);

function readInput(){
  let words = textArea.value.split(",");
  chrome.storage.sync.set({proh_words: words}, function(){
    console.log("Berhasil dimasukkan");
  })
}