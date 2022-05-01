let toggleSlider = document.getElementById("isactive");

chrome.storage.sync.get(["isActive"], (result) => {
  toggleSlider.checked = result.isActive;
});

toggleSlider.addEventListener("change", function(){
  chrome.storage.sync.set({isActive: toggleSlider.checked}, function(){
    console.log(toggleSlider.checked);
  })
  chrome.storage.sync.get(["isActive"], (result) => {
    console.log(result.isActive);
  })

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content-script.js']
  });
})