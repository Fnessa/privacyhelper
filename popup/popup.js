document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let activeTabUrl = tabs[0].url;
        document.getElementById("url").innerHTML = activeTabUrl
        
    })
});
