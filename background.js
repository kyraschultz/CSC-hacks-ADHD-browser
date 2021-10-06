//background.js
let color = "#de34eb";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cpurple', `color: ${color}`);
});
