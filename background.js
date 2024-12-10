chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    let activeTabUrl = tabs[0].url;  
  })
  console.log(activeTabUrl)
}, {url: [{urlMatches:'https://*/*'}]});