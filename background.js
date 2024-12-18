let url
// Callback function to handle the event
function getActiveTabUrl(details) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabUrl = tabs[0].url;
    url = new URL(activeTabUrl) 
    if (url.hostname.includes("google.com")){
      chrome.action.setIcon({ path: "icons/noprivacy-48.png" });
    }
    else if (url.hostname.includes("duckduckgo.com")){
      chrome.action.setIcon({ path: "icons/privacy-48.png" });
    }
    else{
      chrome.action.setIcon({ path: "icons/neutral-48.png" });
    }
  });
}

// Adding the listener to the webNavigation.onCompleted event
chrome.tabs.onActivated.addListener(getActiveTabUrl);

