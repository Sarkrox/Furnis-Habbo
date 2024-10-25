const API_URL ="https://corsproxy.io/?https://www.habbo.es/gamedata/furnidata_json/6dd5e18f824f5ddaf095472c9f98dd018a13f56c";

async function getfurni(){
    try {
        const res = await fetch (API_URL);
        const data = await res.json();
        console.log(data);
                
    } catch (error) {
        console.error("Error: ", error);
    }
}
getfurni();
//async function getdatos(){
    //const furnis = await getfurni();
    //const element = document.getElementById("list-furnis");

    //furnis.forEach(classname => {
        //const li = document.createElement("li");
        //li.textContent = classname.name;
        //element.appendChild(li);
    //});
//}

//getdatos();
