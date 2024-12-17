let data
document.addEventListener('DOMContentLoaded', onDOMContentLoaded()); //adds event listener that connects onDOMContentLoaded() to the event DOMContentLoaded

function onDOMContentLoaded(){ 
    //Fetching json from files
    data = fetch(chrome.runtime.getURL('data/facebook.com.json'))
        .then
    //parsing json
    data = JSON.parse(data)
    
    //Getting currently active tabs.
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let activeTabUrl = tabs[0].url;  //Setting activeTabUrl to the url of the current tab
        document.getElementById("url").innerHTML = activeTabUrl //setting the innerHTML of the element with url id to the activeTabUrl
        if (activeTabUrl.contains("google.com") == true){
            getElementById("googlecheck").innerHTML = ":( er google"
        }
        if (activeTabUrl.contains("facebook.com") == true){
            getElementById("facebookcheck").innerHTML = ":( er facebook"
        }
    })
}
