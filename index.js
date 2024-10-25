const API_URL ="https://www.habbo.es/gamedata/furnidata_json/1";

async function getfurni(){
    try {
        const res = await fetch ("https://www.habbo.es/gamedata/furnidata_json/1", Header);
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