function sendMessageToTabs(message) {
  chrome.tabs.query({}, function (tabs) {
    tabs.forEach(function (tab) {
      chrome.tabs.sendMessage(tab.id, message);
    });
  });
}

/*
chrome.browserAction.onClicked.addListener(function (tab) {
  sendMessageToTabs({ action: "addButton" });
});
*/
