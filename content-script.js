function stripNonLetterCharacter(anyText){
    let pattern = /[^a-zA-Z]/g;
    return anyText.replace(pattern, '');
  }
  
function letterToRank(letter){
    return letter.charCodeAt(0) - 97;
}
  
function rankToLetter(rank){
    return String.fromCharCode(97 + rank);
}
  
function autoKeyVigenereCipher(plaintext, key){
    plaintext = stripNonLetterCharacter(plaintext.toLowerCase());
    let fittedKey = key.concat(plaintext.substring(0, plaintext.length - key.length - 1));
    let vigenereEncrypted = '';
    for(let i = 0; i < plaintext.length; i++){
        vigenereEncrypted = vigenereEncrypted.concat(rankToLetter((letterToRank(plaintext.charAt(i)) + letterToRank(fittedKey.charAt(i))) % 26));
        if(i % 5 == 4){
            vigenereEncrypted = vigenereEncrypted.concat(" ");
        }
    }
    return vigenereEncrypted.toLowerCase();
}

function changeText() {
    console.log("Masuk gan");

    const proh_words = ["perkosa", "pemerkosaan"];
    let allPText = document.body.getElementsByTagName("p");
    let allSpanText = document.body.getElementsByTagName("span");
    let allH1Text = document.body.getElementsByTagName("h1");
    let allH2Text = document.body.getElementsByTagName("h2");
    let allH3Text = document.body.getElementsByTagName("h3");
    let allAText = document.body.getElementsByTagName("a");

    Array.prototype.forEach.call(allPText, element => {
        if(proh_words.some(word => element.innerHTML.toLowerCase().includes(word))){
            let key = "mkx";
            element.innerHTML = autoKeyVigenereCipher(element.innerHTML, key);
        }
    });

    Array.prototype.forEach.call(allSpanText, element => {
        if(proh_words.some(word => element.innerHTML.toLowerCase().includes(word))){
            let key = "mkx";
            element.innerHTML = autoKeyVigenereCipher(element.innerHTML, key);
        }
    });

    Array.prototype.forEach.call(allH1Text, element => {
        if(proh_words.some(word => element.innerHTML.toLowerCase().includes(word))){
            let key = "mkx";
            element.innerHTML = autoKeyVigenereCipher(element.innerHTML, key);
        }
    });

    Array.prototype.forEach.call(allH2Text, element => {
        if(proh_words.some(word => element.innerHTML.toLowerCase().includes(word))){
            let key = "mkx";
            element.innerHTML = autoKeyVigenereCipher(element.innerHTML, key);
        }
    });

    Array.prototype.forEach.call(allH3Text, element => {
        if(proh_words.some(word => element.innerHTML.toLowerCase().includes(word))){
            let key = "mkx";
            element.innerHTML = autoKeyVigenereCipher(element.innerHTML, key);
        }
    });

    Array.prototype.forEach.call(allAText, element => {
        if(proh_words.some(word => element.innerHTML.toLowerCase().includes(word))){
            let key = "mkx";
            element.innerHTML = autoKeyVigenereCipher(element.innerHTML, key);
        }
    });
}

changeText(); 

// chrome.storage.sync.get(["isActive"], function(result){
//     if(result.key){
       
//     } 
// })
