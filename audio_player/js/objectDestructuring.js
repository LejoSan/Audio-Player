const westeros = {
    houses: {
        crownlands: {
            royal: [
                "Baratheon"
            ],
            noble: [
                "Blount","Buckwell","Byrch","Bywater","Chelsted","Chyttering","Cressey","Darke","Edgerton","Farring","Follard","Gaunt","Harte","Hayford","Langward","Mallery","Manning","Massey","Pyle","Rambton","Rollingford","Rosby","Rykker","Staunton","Stokeworth","Thorne","Wendwater"
            ],
            narrowSea: [
                "Baratheon of Dragonstone","Bar Emmon", "Celtigar", "Sunglass", "Velaryon"
            ],
            crackclawPoint:[
                "Boggs", "Brune of Brownhollow", "Brune of the Dyre Den", "Cave", "Crabb", "Hardy", "Pyne"
            ],
            other:[
                "Dargood", "Darkwood", "Hollard", "Longwaters"
            ],
            exhiled:[
                "Targaryen"
            ],
            extinct:[
                "Blackfyre", "Cargyll", "Darklyn"
            ]
        },
        north:{
            great:[
                "startk"
            ],
            noble:[
                "Ashwood","Bole","Bolton","Branch","Cassel","Cerwyn","Condon","Dustin","Flint of Flint's Finger","Flint of Widow's Watch","Forrester","Glenmore","Holt","Hornwood","Ironsmith","Karstark","Lake","Lightfoot","Locke","Long","Manderly","Marsh","Mollen","Mormont","Moss","Overton","Poole","Reed","Ryswell","Slate","Stout","Umber","Waterman","Wells","Whitehill","Woods","Woolfield"
            ]
            }
        }
}

// Old fashion
// let northerners = westeros.houses.north;

// Destructuración de objetos con renombramiento
let { north: northerners, crownlands: southerners } = westeros.houses;

console.log(northerners);
