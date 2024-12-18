let data
document.addEventListener('DOMContentLoaded', onDOMContentLoaded); //adds event listener that connects onDOMContentLoaded() to the event DOMContentLoaded

function onDOMContentLoaded(){ 
    //Fetching json from files
    data = fetch(chrome.runtime.getURL('data/google.com.json'))
    .then(changeContent)
    .catch(error => {
        console.error('Error fetching or parsing JSON:', error);
    });
}

function changeContent(){
    //parsing json
    data = JSON.parse(data)
    console.log("AAA");
    //Getting currently active tabs.
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let activeTabUrl = tabs[0].url;  //Setting activeTabUrl to the url of the current tab
        document.getElementById("url").innerHTML = activeTabUrl //setting the innerHTML of the element with url id to the activeTabUrl
        if (activeTabUrl.includes("google.com") == true){
            document.getElementById("googlecheck").innerHTML = "☹️ er google"
        }
        else{
            document.getElementById("googlecheck").innerHTML = "☺️ er ikke google"
        }
        if (activeTabUrl.includes("facebook.com") == true){
            document.getElementById("facebookcheck").innerHTML = "☹️ er facebook"
        }
        else{
            document.getElementById("facebookcheck").innerHTML = "☺️ er ikke facebook"
        }
    })
}