
const API_URL ="https://www.habbo.com/gamedata/furnidata_json/1";

/*
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
*/
const API_URL_DOG ="https://api.thedogapi.com/v1/breeds";

// const HTMLResponse = document.querySelector("app");
// const tpl = document.createElement("li");

// let url = 'https://www.habbo.com/gamedata/furnidata_json/1';
// let response = await fetch(url);

// let commits = await response.json(); // leer respuesta del cuerpo y devolver como JSON


async function getfurni(){
    try {
        const res = await fetch ("https://api.thedogapi.com/v1/breeds");
        const data = await res.json();
        // data.forEach(raza => console.log(raza.name));
        return data;
    } catch (error) {
        console.error("Error: ", error);
    }
}

async function getdatos(){
    const razas = await getfurni();
    const element = document.getElementById("list-razas");

    razas.forEach(raza => {
        const li = document.createElement("li");
        li.textContent = raza.name;
        element.appendChild(li);
    });
}   

getdatos();










/*
const respuesta = async() =>{
    const res = await fetch(API_URL)
    const data = await res.json()
    console.(data)
}
    alert(respuesta);
*/





