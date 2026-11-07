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
const HomePage = document.getElementById("HomePage");
HomePage.addEventListener("click", () =>{
    window.location.href = "../../index.html";
});
const ArticlePage = document.getElementById("ArticlePage");
ArticlePage.addEventListener("click", () =>{
    window.location.href = "../../Articles.html";
});
const EnglishPage = document.getElementById("EnglishPage");
EnglishPage.addEventListener("click", () =>{
    window.location.href = "../../English.html";
});
const FeaturePage = document.getElementById("FeaturePage");
FeaturePage.addEventListener("click", () =>{
    window.location.href = "../English/Feature.html";
});
const EditorialPage = document.getElementById("EditorialPage");
EditorialPage.addEventListener("click", () =>{
    window.location.href = "../English/Editorial.html";
});
const FilipinoPage = document.getElementById("FilipinoPage");
FilipinoPage.addEventListener("click", () =>{
    window.location.href = "../../Filipino.html";
});
const BalitaPage = document.getElementById("BalitaPage");
BalitaPage.addEventListener("click", () =>{
    window.location.href = "../Filipino/Balita.html";
});
const KolumPage = document.getElementById("KolumPage");
KolumPage.addEventListener("click", () =>{
    window.location.href = "../Filipino/Kolum.html";
});
const AdvocacyPage = document.getElementById("AdvocacyPage");
AdvocacyPage.addEventListener("click", () =>{
    window.location.href = "../../Advocacy.html";
});
const filipinoMain = document.getElementById("mainArticleFil");
if (filipinoMain){
filipinoMain.addEventListener("click", () =>{
    window.location.href = "Filipino/Kolum/Dizon.html";
});
}
const englishMain = document.getElementById("mainArticleEng");
if (englishMain){
englishMain.addEventListener("click", () =>{
    window.location.href = "English/Feature/Dizon.html";
});
}
const HerThought = document.getElementById("jumpTo");
if (HerThought){
HerThought.addEventListener("click", () =>{
    window.location.href = "Articles.html";
});
}
const ConstantlyInMind = document.getElementById("HerImage");
if (ConstantlyInMind){
ConstantlyInMind.addEventListener("click", () =>{
    window.location.href = "Articles.html";
});
}
//article list randomizer
const BodyID = document.body.id;
const ArticleList = [
    ["Balita", "Dalawang mag-aaral, nasawi sa pamamaril sa Ateneo de Zamboanga University", "Dizon, Christian Kyle", "Filipino/Balita/Dizon.html", "assets/Balita1.jpeg"],
    ["Balita", "DICT, pansamantalang ipinagbawal ang Discord; Reddit, sumailalim sa pagsusuri", "Marquez, Justin Bennar", "Filipino/Balita/Marquez.html", "assets/Balita2.jpg"],
    ["Kolum", "School for Learning or School for Shooting?", "Dizon, Christian Kyle", "Filipino/Kolum/Dizon.html", "assets/Kolum1.jpeg"],
    ["Kolum", "Kung Saan Dapat Ligtas ang mga Pangarap", "Monsalud, Dudz Dale", "Filipino/Kolum/Monsalud.html", "assets/Kolum2.jpeg"],
    ["Editorial", "A Victim’s Punishment", "Marquez, Justin Bennar DL.", "English/Editorial/Marquez.html", "assets/Editorial1.jpeg"],
    ["Editorial", "How Failing to Protect Students Ruin Their Learning", "Manalili, Mico", "English/Editorial/Manalili.html", "assets/Editorial2.jpg"],
    ["Feature", "The Cost of Survival", "Galvez, Nevaeh", "English/Feature/Galvez.html", "assets/Feature2.jpg"],
    ["Feature", "The Fear Behind the Walls", "Monsalud, Dudz Dale", "English/Feature/Monsalud.html", "assets/Feature3.jpeg"],
    ["Balita", "Banta ng Karahasan sa mga Paaralan, Nakakaapekto sa Kalusugang Pangkaisipan ng mga Mag-aaral", "Borja, Candice Ysabelle", "Filipino/Balita/Borja.html", "assets/Balita3.jpg"]
]; //use in home and article
const EnglishList = [
    ["Editorial", "A Victim’s Punishment", "Marquez, Justin Bennar DL.", "English/Editorial/Marquez.html", "assets/Editorial1.jpeg"],
    ["Editorial", "How Failing to Protect Students Ruin Their Learning", "Manalili, Mico", "English/Editorial/Manalili.html", "assets/Editorial2.jpg"],
    ["Feature", "The Cost of Survival", "Galvez, Nevaeh", "English/Feature/Galvez.html", "assets/Feature2.jpg"],
    ["Feature", "The Fear Behind the Walls", "Monsalud, Dudz Dale", "English/Feature/Monsalud.html", "assets/Feature3.jpeg"]
];
const FilipinoList = [
    ["Kolum", "Kung Saan Dapat Ligtas ang mga Pangarap", "Monsalud, Dudz Dale", "Filipino/Kolum/Monsalud.html", "assets/Kolum2.jpeg"],
    ["Balita", "Dalawang mag-aaral, nasawi sa pamamaril sa Ateneo de Zamboanga University", "Dizon, Christian Kyle", "Filipino/Balita/Dizon.html", "assets/Balita1.jpeg"],
    ["Balita", "DICT, pansamantalang ipinagbawal ang Discord; Reddit, sumailalim sa pagsusuri", "Marquez, Justin Bennar", "Filipino/Balita/Marquez.html", "assets/Balita2.jpg"],
    ["Balita", "Banta ng Karahasan sa mga Paaralan, Nakakaapekto sa Kalusugang Pangkaisipan ng mga Mag-aaral", "Borja, Candice Ysabelle", "Filipino/Balita/Borja.html", "assets/Balita3.jpg"]
];
//aghhhhhh im so bored i wanna code something else
    //imma code my task app after this to compliment my timer app 
    //or a stop watch app and itll have an animation of falling mangoes
const HerCalmingAbsurdity = [
    "HTMLHome", "HTMLArticle",
    "HTMLEnglish", "HTMLFilipino"
]
const HisChaoticSerenity = [
    randomizeHomeList, randomizeArticleList,
    randomizeEnglishList, randomizeFilipinoList
]
const ArticleButtonList = [
    document.getElementById("firstArticle"),
    document.getElementById("secondArticle"),
    document.getElementById("thirdArticle"),
    document.getElementById("fourthArticle"),
    document.getElementById("fifthArticle"),
    document.getElementById("sixthArticle"),
    document.getElementById("seventhArticle"),
    document.getElementById("eigththArticle"),
    document.getElementById("ninthArticle")
];
function setArticleBackground(button, article){
}
function recognizePage(){
    const location = HerCalmingAbsurdity.indexOf(BodyID);
    console.log(location);
    if (location !== -1) {
        HisChaoticSerenity[location]();
    }
    return;
}

function randomizeHomeList(){
    for(let i = 0; i <= 5; i++){
        const selector = Math.floor(Math.random() * ArticleList.length);
        const selected = ArticleList.splice(selector, 1)[0];
        const her = ArticleButtonList[i];
        const Beauty = new URL(selected[4], document.baseURI);
        her.style.setProperty("--article-image", `url("${Beauty.href}")`);
        her.addEventListener("click", () => {
            window.location.href = selected[3];
        });
        for(let y = 0; y < 3; y++){
            if(i < 3){
                her.children[0].children[1].children[y].textContent = selected[y];
            } else {
                her.children[1].children[0].children[y].textContent = selected[y];
            };
        };
    };
    return;
};
function randomizeArticleList(){
    for(let i = 0; i <= 8; i++){
        const selector = Math.floor(Math.random() * ArticleList.length);
        const selected = ArticleList.splice(selector, 1)[0];
        const SoulMindHeartDecided = ArticleButtonList[i];
        const Beauty = new URL(selected[4], document.baseURI);
        SoulMindHeartDecided.style.setProperty("--article-image", `url("${Beauty.href}")`);
        SoulMindHeartDecided.addEventListener("click", () => {
            window.location.href = selected[3];
        });
        for(let y = 0; y < 3; y++){
            SoulMindHeartDecided.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
function randomizeEnglishList(){
    for(let i = 0; i < 4; i++){
        const selector = Math.floor(Math.random() * EnglishList.length);
        const selected = EnglishList.splice(selector, 1)[0];
        const NoChance = ArticleButtonList[i];
        const YetImStillAGambler = new URL(selected[4], document.baseURI);
        NoChance.style.setProperty("--article-image", `url("${YetImStillAGambler.href}")`);
        NoChance.addEventListener("click", () => {
            window.location.href = selected[3];
        });
        for(let y = 0; y < 3; y++){
            NoChance.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
function randomizeFilipinoList(){
    for(let i = 0; i < 4; i++){
        const selector = Math.floor(Math.random() * FilipinoList.length);
        const selected = FilipinoList.splice(selector, 1)[0];
        const HisHeart = ArticleButtonList[i];
        const HisFantasy = new URL(selected[4], document.baseURI);
        HisHeart.style.setProperty("--article-image", `url("${HisFantasy.href}")`);
        HisHeart.addEventListener("click", () => {
            window.location.href = selected[3];
        });
        for(let y = 0; y < 3; y++){
            HisHeart.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
recognizePage();