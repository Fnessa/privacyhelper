// Callback function to handle the event
function getActiveTabUrl(details) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabUrl = tabs[0].url;
    console.log(activeTabUrl);
  });
}

// Adding the listener to the webNavigation.onCompleted event
chrome.webNavigation.onCompleted.addListener(getActiveTabUrl, { url: [{ urlMatches: 'https://*/*' }] });
