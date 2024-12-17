document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let activeTabUrl = tabs[0].url;  
        document.getElementById("url").innerHTML = activeTabUrl
        
        if (activeTabUrl.contains("google.com") == true){
            getElementById("googlecheck").innerHTML = ":( er google"
        }
        if (activeTabUrl.contains("facebook.com") == true){
            getElementById("facebookcheck").innerHTML = ":( er facebook"
        }
    })
});
