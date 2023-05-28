const pieCanvas = document.getElementById("pieCanvas");
const lineCanvas = document.getElementById("lineCanvas");
const barCanvas = document.getElementById("barCanvas");
const doughnutCanvas = document.getElementById("doughnutCanvas");

const pieChart = new Chart(pieCanvas, 
{
    type: "pie",
    data: {
        labels: ['Livre', 'Figurine', 'Jeux vidéo'],
        datasets: [
            {
                data: [516535680, 162393456, 73348698],
                borderColor: ['black'],
                borderWidth: [1,],
                backgroundColor: ["rgba(231, 105, 73, 0.753)", "rgba(255,0,80,0.33)", "rgba(223,166,240,0.67)"],
                hoverOffset: 30,
            }
        ],
    },
    options: 
    {
        plugins: 
        {

            title: {
                display: true,
                text: "Nombre d'articles One Piece vendus",
                position: 'top',
                color: "black"
            },

            legend: {
                position: 'bottom',
                labels: 
                {
                    color: 'black',
                    font: 
                    {
                        size: 14
                    },
                },
            },
        }
    },
})

// -------------------------------------------------------

const mangaAnime = [
    { année: '1997', nbPerson:  { manga:10049 , anime:15102 , lesDeux:18036 } },
    { année: '1998', nbPerson:  { manga:15120 , anime:18034 , lesDeux:15029 } },
    { année: '1999', nbPerson:  { manga:18031 , anime:15024 , lesDeux:10143 } },
    { année: '2000', nbPerson:  { manga:15074 , anime:10054 , lesDeux:14563 } },
    { année: '2001', nbPerson:  { manga:10060 , anime:14073 , lesDeux:17842 } }, 
    { année: '2003', nbPerson:  { manga:15230 , anime:17026 , lesDeux:15236 } },
    { année: '2004', nbPerson:  { manga:18023 , anime:15039 , lesDeux:11236 } },
    { année: '2005', nbPerson:  { manga:15740 , anime:10250 , lesDeux:15468 } },
    { année: '2006', nbPerson:  { manga:10050 , anime:15173 , lesDeux:18016 } },
    { année: '2007', nbPerson:  { manga:15029 , anime:18340 , lesDeux:15304 } },
    { année: '2008', nbPerson:  { manga:18030 , anime:15062 , lesDeux:11024 } },
    { année: '2009', nbPerson:  { manga:15032 , anime:10050 , lesDeux:15462 } },
    { année: '2010', nbPerson:  { manga:10096 , anime:15060 , lesDeux:18752 } },
    { année: '2011', nbPerson:  { manga:15028 , anime:18153 , lesDeux:15213 } },
    { année: '2012', nbPerson:  { manga:18078 , anime:15063 , lesDeux:10521 } },  
]

const lineChart = new Chart(lineCanvas, 
    {
        type: "line",
        data: {
            datasets: [
                {
                    label: 'Manga',
                    backgroundColor: "rgba(0,82,216,1)",
                    data: mangaAnime,
                    borderColor: 'darkblue',
                    fill: true,
                    tension: 0.5,
                    parsing: {
                        xAxisKey: 'année',
                        yAxisKey: 'nbPerson.manga',
                    }
                },
                {
                    label: 'Anime',
                    backgroundColor: "rgba(0,149,216,1)",
                    data: mangaAnime,
                    borderColor: 'blue',
                    fill: true,
                    tension: 0.5,
                    parsing: {
                        xAxisKey: 'année',
                        yAxisKey: 'nbPerson.anime',
                    }
                },
                {
                    label: 'égalité',
                    backgroundColor: "rgba(0,215,216,1)",
                    data: mangaAnime,
                    borderColor: 'white',
                    fill: true,
                    tension: 0.5,
                    parsing: {
                        xAxisKey: 'année',
                        yAxisKey: 'nbPerson.lesDeux',
                    }
                }
            ],
        },
        options: 
        {
            plugins: 
            {
                title: {
                    display: true,
                    text: "Nombre de personne qui préfère le Manga ou l'Anime par année",
                    position: 'top',
                    color: "black",
                },

                legend: {
                    position: 'bottom',
                    labels: 
                    {
                        color: 'black',
                        font: 
                        {
                            size: 14
                        },
                    },
                },
            }
        },
})


// ------------------------------------------

const barChart = new Chart(barCanvas, 
    {
        type: "bar",
        data: {
            labels: ['Luffy', 'Zoro', 'Sanji', "Nami", "Robin", "Usopp", "Jimbe", "Chopper", "Brook", "Franky"],
            datasets: [
                {
                    data: [112, 53, 105,102, 73, 125,85, 93, 104, 117 ],
                    borderColor: ['rgba(44,75,0,0.91)'],
                    borderWidth: [1,],
                    backgroundColor: ["rgba(35,110,41,0.84)", "rgba(35,155,41,0.7)", "rgba(25,100,41,0.88)", "rgba(97,212,41,0.6)","rgba(35,110,41,0.84)", "rgba(35,155,41,0.7)", "rgba(25,100,41,0.88)", "rgba(97,212,41,0.6)","rgba(35,110,41,0.84)", "rgba(35,155,41,0.7)"],
                    hoverOffset: 30,
                }
            ],
        },
        options: 
        {
            plugins: 
            {

                title: {
                    display: true,
                    text: "Le nombre de vote par personnage",
                    position: 'top',
                    color: "black"
                },

                legend: {
                    
                    display: false
                },
                tooltips: {
                    enabled: false
                },
            }
        },
})

// ---------------------------------------

const doughnutChart = new Chart(doughnutCanvas, 
    {
        type: "doughnut",
        data: {
            labels: ["nombre d'année passées","nombre d'année restantes"],
            datasets: [
                {
                    data: [21, 4],
                    borderColor: ['rgba(44,75,0,0.91)'],
                    borderWidth: [1,],
                    backgroundColor: [ "rgba(55,112,229,0.81)","rgba(255,255,255,0.80)"],
                    hoverOffset: 10,
                    cutout: '80%',
                }
            ],
        },
        options: 
        {
            plugins: 
            {

                title: {
                    display: true,
                    text: "Durée de One Piece",
                    position: 'top',
                    color: "black"
                },

                legend: {
                    
                    display: false
                },
                tooltips: {
                    enabled: false
                },
            }
        },
})


// -----------------------
        

const GE = document.querySelector(".GE");
const FRGES = document.querySelector("#FR-GES");

const NA = document.querySelector(".NA");
const FRNAQ = document.querySelector("#FR-NAQ");

const AR = document.querySelector(".AR");
const FRARA = document.querySelector("#FR-ARA");

const BF = document.querySelector(".BF");
const FRBFC = document.querySelector("#FR-BFC");

const BR = document.querySelector(".BR");
const FRBRE = document.querySelector("#FR-BRE");

const CV = document.querySelector(".CV");
const FRCVL = document.querySelector("#FR-CVL");

const CO = document.querySelector(".CO");
const FRCOR = document.querySelector("#FR-COR");

const ID = document.querySelector(".ID");
const FRIDF = document.querySelector("#FR-IDF");

const OC = document.querySelector(".OC");
const FROCC = document.querySelector("#FR-OCC");

const HD = document.querySelector(".HD");
const FRHDF = document.querySelector("#FR-HDF");

const NO = document.querySelector(".NO");
const FRNOR = document.querySelector("#FR-NOR");

const PD = document.querySelector(".PD");
const FRPDL = document.querySelector("#FR-PDL");

const PA = document.querySelector(".PA");
const FRPAC = document.querySelector("#FR-PAC");


function startGE() {
    GE.style.opacity="1";
    GE.style.transition="0.5s"
    FRGES.style.fill="rgba(169, 7, 156, 1)"
};
function endGE() {
    GE.style.opacity="0";
    GE.style.transition="0.5s"
    FRGES.style.fill="rgba(169, 7, 156, 0.75)"
};

function startNA() {
    NA.style.opacity="1";
    NA.style.transition="0.5s"
    FRNAQ.style.fill="rgba(86, 5, 110, 1)"
};
function endNA() {
    NA.style.opacity="0";
    NA.style.transition="0.5s"
    FRNAQ.style.fill="rgba(86, 5, 110, 0.75)"
};

function startAR() {
    AR.style.opacity="1";
    AR.style.transition="0.5s"
    FRARA.style.fill="rgba(134, 8, 119, 1)"
};
function endAR() {
    AR.style.opacity="0";
    AR.style.transition="0.5s"
    FRARA.style.fill="rgba(134, 8, 119, 0.75)"
};

function startBF() {
    BF.style.opacity="1";
    BF.style.transition="0.5s"
    FRBFC.style.fill="rgba(223, 14, 108, 1)"
};
function endBF() {
    BF.style.opacity="0";
    BF.style.transition="0.5s"
    FRBFC.style.fill="rgba(223, 14, 108, 0.75)"
};

function startBR() {
    BR.style.opacity="1";
    BR.style.transition="0.5s"
    FRBRE.style.fill="rgba(122, 9, 156, 1)"
};
function endBR() {
    BR.style.opacity="0";
    BR.style.transition="0.5s"
    FRBRE.style.fill="rgba(122, 9, 156, 0.75)"
};

function startCV() {
    CV.style.opacity="1";
    CV.style.transition="0.5s"
    FRCVL.style.fill="rgba(171, 9, 106, 1)"
};
function endCV() {
    CV.style.opacity="0";
    CV.style.transition="0.5s"
    FRCVL.style.fill="rgba(171, 9, 106, 0.75)"
}

function startCO() {
    CO.style.opacity="1";
    CO.style.transition="0.5s"
    FRCOR.style.fill="rgba(125, 17, 157, 1)"
};
function endCO() {
    CO.style.opacity="0";
    CO.style.transition="0.5s"
    FRCOR.style.fill="rgba(125, 17, 157, 0.75)"
}

function startID() {
    ID.style.opacity="1";
    ID.style.transition="0.5s"
    FRIDF.style.fill="rgba(117, 3, 117, 1)"
};
function endID() {
    ID.style.opacity="0";
    ID.style.transition="0.5s"
    FRIDF.style.fill="rgba(117, 3, 117, 0.75)"
}

function startOC() {
    OC.style.opacity="1";
    OC.style.transition="0.5s"
    FROCC.style.fill="rgba(162, 10, 145, 1)"
};
function endOC() {
    OC.style.opacity="0";
    OC.style.transition="0.5s"
    FROCC.style.fill="rgba(162, 10, 145, 0.75)"
}

function startHD() {
    HD.style.opacity="1";
    HD.style.transition="0.5s"
    FRHDF.style.fill="rgba(111, 7, 143, 1)"
};
function endHD() {
    HD.style.opacity="0";
    HD.style.transition="0.5s"
    FRHDF.style.fill="rgba(111, 7, 143, 0.75)"
}

function startNO() {
    NO.style.opacity="1";
    NO.style.transition="0.5s"
    FRNOR.style.fill="rgba(198, 8, 157, 1)"
};
function endNO() {
    NO.style.opacity="0";
    NO.style.transition="0.5s"
    FRNOR.style.fill="rgba(198, 8, 157, 0.75)"
}

function startPD() {
    PD.style.opacity="1";
    PD.style.transition="0.5s"
    FRPDL.style.fill="rgba(146, 19, 99, 1)"
};
function endPD() {
    PD.style.opacity="0";
    PD.style.transition="0.5s"
    FRPDL.style.fill="rgba(146, 19, 99, 0.75)"
}

function startPA() {
    PA.style.opacity="1";
    PA.style.transition="0.5s"
    FRPAC.style.fill="rgba(139, 13, 146, 1)"
};
function endPA() {
    PA.style.opacity="0";
    PA.style.transition="0.5s"
    FRPAC.style.fill="rgba(139, 13, 146, 0.75)"
}

const accueil = document.querySelector(".accueil")
const dashboard = document.querySelector(".dashboard")
const celebrite = document.querySelector(".celebrite")

function btnAcc(){
    dashboard.style.visibility="hidden"
    accueil.style.visibility="visible"
    celebrite.style.visibility="hidden"
}

function btnDas(){
    dashboard.style.visibility="visible"
    accueil.style.visibility="hidden"
    celebrite.style.visibility="hidden"
}

function btnCel(){
    celebrite.style.visibility="visible"
    accueil.style.visibility="hidden"
    dashboard.style.visibility="hidden"
}