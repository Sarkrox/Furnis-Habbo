const API_URL ="https://www.habbo.es/gamedata/furnidata_json/1";

const Header = {
method : 'GET',
    Headers:{
        
        'Sec-Fetch-Dest' : 'document',
        'Sec-Fetch-Mode' : 'no cors',
        'Sec-Fetch-Site' : 'cross-site',
        'Upgrade-Insecure-Requests' : '1',
        'User-Agent' : 	'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0'
    }
};
    


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