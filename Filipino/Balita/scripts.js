//I MADE THIS CODE AHAHHAHAHAHHAHAH
//I AM A GOD (in a non-blasphemous way yk how they say it in anime when they do something crazy)
//no ai used maam

const skibidi = performance.getEntriesByType("navigation")[0];
if (skibidi?.type === "reload") {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
}

//transition effect with the cursor thingy yea
document.querySelectorAll(".text").forEach((element) => {
    const characterCount = Array.from(element.textContent.trim()).length;
    element.style.setProperty("--steps", characterCount);
    element.style.setProperty("--text-width", `${element.scrollWidth}px`);
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    entry.target.classList.add("is-visible");
                });
            });
        }
    });
});

document.querySelectorAll(".div, .text, .hr, .cursor").forEach((element) => {
    observer.observe(element);
});
//this shows the date for the header bar thingy
const date = new Date();
const display = document.getElementById("date");
display.textContent = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

//button navigation
const siteRoot = new URL("../../", document.currentScript.src);
const navigateTo = (path) => {
    window.location.href = new URL(path, siteRoot).href;
};

const HomePage = document.getElementById("HomePage");
HomePage.addEventListener("click", () =>{
    navigateTo("index.html");
});
const ArticlePage = document.getElementById("ArticlePage");
ArticlePage.addEventListener("click", () =>{
    navigateTo("Articles.html");
});
const EnglishPage = document.getElementById("EnglishPage");
EnglishPage.addEventListener("click", () =>{
    navigateTo("English.html");
});
const FeaturePage = document.getElementById("FeaturePage");
FeaturePage.addEventListener("click", () =>{
    navigateTo("English/Feature.html");
});
const EditorialPage = document.getElementById("EditorialPage");
EditorialPage.addEventListener("click", () =>{
    navigateTo("English/Editorial.html");
});
const FilipinoPage = document.getElementById("FilipinoPage");
FilipinoPage.addEventListener("click", () =>{
    navigateTo("Filipino.html");
});
const BalitaPage = document.getElementById("BalitaPage");
BalitaPage.addEventListener("click", () =>{
    navigateTo("Filipino/Balita.html");
});
const KolumPage = document.getElementById("KolumPage");
KolumPage.addEventListener("click", () =>{
    navigateTo("Filipino/Kolum.html");
});
const AdvocacyPage = document.getElementById("AdvocacyPage");
AdvocacyPage.addEventListener("click", () =>{
    navigateTo("Advocacy.html");
});
const AboutPage = document.getElementById("AboutPage");
AboutPage.addEventListener("click", () =>{
    navigateTo("About.html");
});
const Jump = document.getElementById("jumpTo");
Jump.addEventListener("click", () =>{
    navigateTo("Articles.html");
});
//article list randomizer
const BodyID = document.body.id;
const Balita1List = [
    ["Kolum", "Kung Saan Dapat Ligtas ang mga Pangarap", "Monsalud, Dudz Dale", "Filipino/Kolum/Monsalud.html", "assets/Kolum2.jpeg"],
    ["Kolum", "School for Learning or School for Shooting?", "Dizon, Christian Kyle", "Filipino/Kolum/Dizon.html", "assets/Kolum1.jpeg"],
    ["Balita", "DICT, pansamantalang ipinagbawal ang Discord; Reddit, sumailalim sa pagsusuri", "Marquez, Justin Bennar", "Filipino/Balita/Marquez.html", "assets/Balita2.jpg"],
    ["Balita", "Banta ng Karahasan sa mga Paaralan, Nakakaapekto sa Kalusugang Pangkaisipan ng mga Mag-aaral", "Borja, Candice Ysabelle", "Filipino/Balita/Borja.html", "assets/Balita3.jpg"]
];
const Balita2List = [
    ["Kolum", "Kung Saan Dapat Ligtas ang mga Pangarap", "Monsalud, Dudz Dale", "Filipino/Kolum/Monsalud.html", "assets/Kolum2.jpeg"],
    ["Kolum", "School for Learning or School for Shooting?", "Dizon, Christian Kyle", "Filipino/Kolum/Dizon.html", "assets/Kolum1.jpeg"],
    ["Balita", "Dalawang mag-aaral, nasawi sa pamamaril sa Ateneo de Zamboanga University", "Dizon, Christian Kyle", "Filipino/Balita/Dizon.html", "assets/Balita1.jpeg"],
    ["Balita", "Banta ng Karahasan sa mga Paaralan, Nakakaapekto sa Kalusugang Pangkaisipan ng mga Mag-aaral", "Borja, Candice Ysabelle", "Filipino/Balita/Borja.html", "assets/Balita3.jpg"]
];
const Balita3List = [
    ["Kolum", "Kung Saan Dapat Ligtas ang mga Pangarap", "Monsalud, Dudz Dale", "Filipino/Kolum/Monsalud.html", "assets/Kolum2.jpeg"],
    ["Kolum", "School for Learning or School for Shooting?", "Dizon, Christian Kyle", "Filipino/Kolum/Dizon.html", "assets/Kolum1.jpeg"],
    ["Balita", "Dalawang mag-aaral, nasawi sa pamamaril sa Ateneo de Zamboanga University", "Dizon, Christian Kyle", "Filipino/Balita/Dizon.html", "assets/Balita1.jpeg"],
    ["Balita", "DICT, pansamantalang ipinagbawal ang Discord; Reddit, sumailalim sa pagsusuri", "Marquez, Justin Bennar", "Filipino/Balita/Marquez.html", "assets/Balita2.jpg"]
];
//aghhhhhh im so bored i wanna code something else
    //imma code my task app after this to compliment my timer app 
    //or a stop watch app and itll have an animation of falling mangoes
const HerCalmingAbsurdity = [
    "HTMLFilipinoBalita1", "HTMLFilipinoBalita2", "HTMLFilipinoBalita3"
]
const HisChaoticSerenity = [
     randomizeBalita1List, randomizeBalita2List, randomizeBalita3List
]
const ArticleButtonList = [
    document.getElementById("firstArticle"),
    document.getElementById("secondArticle"),
    document.getElementById("thirdArticle"),
    document.getElementById("fourthArticle")
];
function recognizePage(){
    const location = HerCalmingAbsurdity.indexOf(BodyID);
    console.log(location);
    if (location !== -1) {
        HisChaoticSerenity[location]();
    }
    return;
}
function randomizeBalita1List(){
    for(let i = 0; i < 4; i++){
        const selector = Math.floor(Math.random() * Balita1List.length);
        const selected = Balita1List.splice(selector, 1)[0];
        const ARG = ArticleButtonList[i];
        const Woah = new URL(selected[4], siteRoot);
        ARG.style.setProperty("--article-image", `url("${Woah.href}")`);
        ARG.addEventListener("click", () => {
            navigateTo(selected[3]);
        });
        for(let y = 0; y < 3; y++){
            ARG.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
function randomizeBalita2List(){
    for(let i = 0; i < 4; i++){
        const selector = Math.floor(Math.random() * Balita2List.length);
        const selected = Balita2List.splice(selector, 1)[0];
        const OneInABillionOdds = ArticleButtonList[i];
        const OrNoChance = new URL(selected[4], siteRoot);
        OneInABillionOdds.style.setProperty("--article-image", `url("${OrNoChance.href}")`);
        OneInABillionOdds.addEventListener("click", () => {
            navigateTo(selected[3]);
        });
        for(let y = 0; y < 3; y++){
            OneInABillionOdds.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
function randomizeBalita3List(){
    for(let i = 0; i < 4; i++){
        const selector = Math.floor(Math.random() * Balita3List.length);
        const selected = Balita3List.splice(selector, 1)[0];
        const OnlyTypeOfGamblingIDontLike = ArticleButtonList[i];
        const TheHeartAsAChip = new URL(selected[4], siteRoot);
        OnlyTypeOfGamblingIDontLike.style.setProperty("--article-image", `url("${TheHeartAsAChip.href}")`);
        OnlyTypeOfGamblingIDontLike.addEventListener("click", () => {
            navigateTo(selected[3]);
        });
        for(let y = 0; y < 3; y++){
            OnlyTypeOfGamblingIDontLike.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
recognizePage();