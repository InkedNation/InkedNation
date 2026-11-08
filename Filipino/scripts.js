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
    window.location.href = "Balita.html";
});
const KolumPage = document.getElementById("KolumPage");
KolumPage.addEventListener("click", () =>{
    window.location.href = "Kolum.html";
});
const AdvocacyPage = document.getElementById("AdvocacyPage");
AdvocacyPage.addEventListener("click", () =>{
    window.location.href = "../../Advocacy.html";
});
const AboutPage = document.getElementById("AboutPage");
AboutPage.addEventListener("click", () =>{
    window.location.href = "../../About.html";
});
const filipinoMain = document.getElementById("mainArticleFil");
if (filipinoMain){
filipinoMain.addEventListener("click", () =>{
    window.location.href = "Kolum/Dizon.html";
});
}
//article list randomizer
const BodyID = document.body.id;
const KolumList = [
    ["Kolum", "School for Learning or School for Shooting?", "Dizon, Christian Kyle", "../Filipino/Kolum/Dizon.html", "../assets/Kolum1.jpeg"],
    ["Kolum", "Kung Saan Dapat Ligtas ang mga Pangarap", "Monsalud, Dudz Dale", "../Filipino/Kolum/Monsalud.html", "../assets/Kolum2.jpeg"]
];
const BalitaList = [
    ["Balita", "Dalawang mag-aaral, nasawi sa pamamaril sa Ateneo de Zamboanga University", "Dizon, Christian Kyle", "../Filipino/Balita/Dizon.html", "../assets/Balita1.jpeg"],
    ["Balita", "DICT, pansamantalang ipinagbawal ang Discord; Reddit, sumailalim sa pagsusuri", "Marquez, Justin Bennar", "../Filipino/Balita/Marquez.html", "../assets/Balita2.jpg"],
    ["Balita", "Banta ng Karahasan sa mga Paaralan, Nakakaapekto sa Kalusugang Pangkaisipan ng mga Mag-aaral", "Borja, Candice Ysabelle", "../Filipino/Balita/Borja.html", "../assets/Balita3.jpg"]
];
//aghhhhhh im so bored i wanna code something else
    //imma code my task app after this to compliment my timer app 
    //or a stop watch app and itll have an animation of falling mangoes
const HerCalmingAbsurdity = [
    "HTMLBalita", "HTMLKolum"
]
const HisChaoticSerenity = [
    randomizeBalitaList, randomizeKolumList
]
const ArticleButtonList = [
    document.getElementById("firstArticle"),
    document.getElementById("secondArticle"),
    document.getElementById("thirdArticle")
];
function recognizePage(){
    const location = HerCalmingAbsurdity.indexOf(BodyID);
    console.log(location);
    if (location !== -1) {
        HisChaoticSerenity[location]();
    }
    return;
}
function randomizeBalitaList(){
    for(let i = 0; i < 3; i++){
        const selector = Math.floor(Math.random() * BalitaList.length);
        const selected = BalitaList.splice(selector, 1)[0];
        const HerParadoxicalUncertainty = ArticleButtonList[i];
        const HisBlasphemousInstability = new URL(selected[4], document.baseURI);
        HerParadoxicalUncertainty.style.setProperty("--article-image", `url("${HisBlasphemousInstability.href}")`);
        HerParadoxicalUncertainty.addEventListener("click", () => {
            window.location.href = selected[3];
        });
        for(let y = 0; y < 3; y++){
            HerParadoxicalUncertainty.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
function randomizeKolumList(){
    for(let i = 0; i < 2; i++){
        const selector = Math.floor(Math.random() * KolumList.length);
        const selected = KolumList.splice(selector, 1)[0];
        const SomeoneIcantHave = ArticleButtonList[i];
        const MaybeThereMightBeAPossibility = new URL(selected[4], document.baseURI);
        SomeoneIcantHave.style.setProperty("--article-image", `url("${MaybeThereMightBeAPossibility.href}")`);
        SomeoneIcantHave.addEventListener("click", () => {
            window.location.href = selected[3];
        });
        for(let y = 0; y < 3; y++){
            SomeoneIcantHave.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
recognizePage();