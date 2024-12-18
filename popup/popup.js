let data
document.addEventListener('DOMContentLoaded', onDOMContentLoaded); //adds event listener that connects onDOMContentLoaded() to the event DOMContentLoaded

function onDOMContentLoaded(){ 
   changeContent();
}

function changeContent(){
    console.log("AAA");
    //Getting currently active tabs.
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let activeTabUrl = tabs[0].url;  //Setting activeTabUrl to the url of the current tab
        let cleanURL = new URL(activeTabUrl)
        document.getElementById("url").innerHTML = cleanURL.hostname //setting the innerHTML of the element with url id to the activeTabUrl
        
        if (cleanURL.hostname.includes("google.com")){
            document.getElementById("data").innerHTML = "❌ Blandt andet gemmer Google søgehistorik, IP-adresse, enhedsegenskaber, købshistorik, aktivitet på trejdspartswebsites der andvender google tjenester, og muligvis enhedens sensordata."
            document.getElementById("time").innerHTML = "❌ Data opbevares i ubegrænset eller uspecificeret længde."
            document.getElementById("icon").src = "img/RØD LOGO.png"
        }
        else if (cleanURL.hostname.includes("duckduckgo.com")){
            document.getElementById("data").innerHTML = "❕ Ip adresse, browser type, sprog, skærmstørrelse, operativsystem og browser præferencer bruges kortvarig."
            document.getElementById("time").innerHTML = "✅ Ingen IP eller unikke identifikatorer opbevares af DuckDuckGo"
            document.getElementById("icon").src = "img/GRØN LOGO.png"
        }
        else{
            document.getElementById("data").innerHTML = "Denne hjemmeside er ikke blevet evalueret."
            document.getElementById("time").innerHTML = ""
            document.getElementById("icon").src = "img/GRÅ LOGO.png"
        }
    })
}