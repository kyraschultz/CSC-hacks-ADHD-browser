chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        console.log(current_tab_info.url)
    });
});

//first arg is tab id, null is default or active tab

chrome.tabs.executeScript(null, {file: './foreground.js'}, 
() => console.log('i injected'))