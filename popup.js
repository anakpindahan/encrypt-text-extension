// // Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

let toggleSlider = document.getElementById("isactive");


toggleSlider.addEventListener("change", function(){
  chrome.storage.sync.set({isActive: true}, function(){
    console.log('Value changed');
  })
  chrome.storage.sync.get(["key"], (result) => {
    console.log("a");
    console.log(result);
  })
})

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
//   // chrome.scripting.executeScript({
//   //   target: { tabId: tab.id },
//   //   files: ['content-script.js']
//   // });
// });
