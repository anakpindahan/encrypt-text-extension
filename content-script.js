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
    var prohib_words = [];
    chrome.storage.sync.get("proh_words", ({proh_words}) => {
        prohib_words = proh_words;
    })

    chrome.storage.sync.get("isActive", ({isActive}) => {
        if(isActive){

            let allPText = document.body.getElementsByTagName("p");
            let allSpanText = document.body.getElementsByTagName("span");
            let allH1Text = document.body.getElementsByTagName("h1");
            let allH2Text = document.body.getElementsByTagName("h2");
            let allH3Text = document.body.getElementsByTagName("h3");
            // let allAText = document.body.getElementsByTagName("a");
        
            Array.prototype.forEach.call(allPText, element => {
                if(prohib_words.some(word => element.innerText.toLowerCase().includes(word))){
                    let key = "mkx";
                    element.innerText = autoKeyVigenereCipher(element.innerText, key);
                }
            });
        
            Array.prototype.forEach.call(allSpanText, element => {
                if(prohib_words.some(word => element.innerText.toLowerCase().includes(word))){
                    let key = "mkx";
                    element.innerText = autoKeyVigenereCipher(element.innerText, key);
                }
            });
        
            Array.prototype.forEach.call(allH1Text, element => {
                if(prohib_words.some(word => element.innerText.toLowerCase().includes(word))){
                    let key = "mkx";
                    element.innerText = autoKeyVigenereCipher(element.innerText, key);
                }
            });
        
            Array.prototype.forEach.call(allH2Text, element => {
                if(prohib_words.some(word => element.innerText.toLowerCase().includes(word))){
                    let key = "mkx";
                    element.innerText = autoKeyVigenereCipher(element.innerText, key);
                }
            });
        
            Array.prototype.forEach.call(allH3Text, element => {
                if(prohib_words.some(word => element.innerText.toLowerCase().includes(word))){
                    let key = "mkx";
                    element.innerText = autoKeyVigenereCipher(element.innerText, key);
                }
            });
        
            // Array.prototype.forEach.call(allAText, element => {
            //     if(prohib_words.some(word => element.innerText.toLowerCase().includes(word))){
            //         let key = "mkx";
            //         element.innerText = autoKeyVigenereCipher(element.innerText, key);
            //     }
            // });
        }
    })
}

changeText(); 
