// let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({isActive});
})

// chrome.addEventListener('load', (event) => {
    // chrome.scripting.executeScript({
    //     target: { tabId: tab.id },
    //     files: ['content-script.js']
    // });
// })

// chrome.tabs.executeScript({
//     target: { tabId: tab.id },
//     files: ['content-script.js'],
//     run_at: "document_start"
// });


// chrome.tabs.onUpdated.addListener((changeInfo, tab) => {
//     if(changeInfo.status == 'complete' && tab.active){
//         chrome.scripting.executeScript({
//             target: { tabId: tab.id },
//             files: ['content-script.js']
//         });
//     }
// });

// chrome.scripting.registerContent({
//     matches: ["https://*/*"],
//     run_at: "document_start",
//     js: ["content-script.js"]
// });