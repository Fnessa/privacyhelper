let url
// function that changes the icon of the extension based on the current URL
function getActiveTabUrl(details) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabUrl = tabs[0].url; //sets activeTabUrl to the url of the current tab
    url = new URL(activeTabUrl) // saves the activeTabUrl as a URL object
    
    if (url.hostname.includes("google.com")){ // runs when the url hostname includes google.com. For example translate.google.com.
      chrome.action.setIcon({ path: "icons/noprivacy-48.png" }); //sets the icon of the extension to the one .
    }
    else if (url.hostname.includes("duckduckgo.com")){
      chrome.action.setIcon({ path: "icons/privacy-48.png" });
    }
    else if (url.hostname.includes("bing.com")){
      chrome.action.setIcon({ path: "icons/neutral-48.png" });
    }
    else{
      chrome.action.setIcon({ path: "icons/nothing-48.png" });
    }
  });
}

// Running the getActiveTabUrl every time the tabs.onActivated event triggers, which is every time the tab is switched.
chrome.tabs.onActivated.addListener(getActiveTabUrl);
// Running the getActiveTabUrl every time the webNavigation.onCompleted event triggers, which is every time a website is loaded. This prevents the icon not updating when a new tab is opened.
chrome.webNavigation.onCompleted.addListener(getActiveTabUrl);