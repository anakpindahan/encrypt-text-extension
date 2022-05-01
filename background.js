chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({isActive});
    chrome.storage.sync.set({proh_words});
})