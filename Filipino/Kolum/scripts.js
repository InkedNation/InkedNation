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
const Jump = document.getElementById("jumpTo");
Jump.addEventListener("click", () =>{
    navigateTo("Articles.html");
});
const AboutPage = document.getElementById("AboutPage");
AboutPage.addEventListener("click", () =>{
    navigateTo("About.html");
});
//article list randomizer
const BodyID = document.body.id;
const Kolum1List = [
    ["Kolum", "Kung Saan Dapat Ligtas ang mga Pangarap", "Monsalud, Dudz Dale", "Filipino/Kolum/Monsalud.html", "assets/Kolum2.jpeg"],
    ["Balita", "Dalawang mag-aaral, nasawi sa pamamaril sa Ateneo de Zamboanga University", "Dizon, Christian Kyle", "Filipino/Balita/Dizon.html", "assets/Balita1.jpeg"],
    ["Balita", "DICT, pansamantalang ipinagbawal ang Discord; Reddit, sumailalim sa pagsusuri", "Marquez, Justin Bennar", "Filipino/Balita/Marquez.html", "assets/Balita2.jpg"],
    ["Balita", "Banta ng Karahasan sa mga Paaralan, Nakakaapekto sa Kalusugang Pangkaisipan ng mga Mag-aaral", "Borja, Candice Ysabelle", "Filipino/Balita/Borja.html", "assets/Balita3.jpg"]
];
const Kolum2List = [
    ["Kolum", "School for Learning or School for Shooting?", "Dizon, Christian Kyle", "Filipino/Kolum/Dizon.html", "assets/Kolum1.jpeg"],
    ["Balita", "Dalawang mag-aaral, nasawi sa pamamaril sa Ateneo de Zamboanga University", "Dizon, Christian Kyle", "Filipino/Balita/Dizon.html", "assets/Balita1.jpeg"],
    ["Balita", "DICT, pansamantalang ipinagbawal ang Discord; Reddit, sumailalim sa pagsusuri", "Marquez, Justin Bennar", "Filipino/Balita/Marquez.html", "assets/Balita2.jpg"],
    ["Balita", "Banta ng Karahasan sa mga Paaralan, Nakakaapekto sa Kalusugang Pangkaisipan ng mga Mag-aaral", "Borja, Candice Ysabelle", "Filipino/Balita/Borja.html", "assets/Balita3.jpg"]
];
//aghhhhhh im so bored i wanna code something else
    //imma code my task app after this to compliment my timer app 
    //or a stop watch app and itll have an animation of falling mangoes
const HerCalmingAbsurdity = [
    "HTMLFilipinoKolum1", "HTMLFilipinoKolum2"
]
const HisChaoticSerenity = [
     randomizeKolum1List, randomizeKolum2List
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
function randomizeKolum1List(){
    for(let i = 0; i < 4; i++){
        const selector = Math.floor(Math.random() * Kolum1List.length);
        const selected = Kolum1List.splice(selector, 1)[0];
        const DefinitelyOneSided = ArticleButtonList[i];
        const IDefinitelyHaveACrush = new URL(selected[4], siteRoot);
        DefinitelyOneSided.style.setProperty("--article-image", `url("${IDefinitelyHaveACrush.href}")`);
        DefinitelyOneSided.addEventListener("click", () => {
            navigateTo(selected[3]);
        });
        for(let y = 0; y < 3; y++){
            DefinitelyOneSided.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
function randomizeKolum2List(){
    for(let i = 0; i < 4; i++){
        const selector = Math.floor(Math.random() * Kolum2List.length);
        const selected = Kolum2List.splice(selector, 1)[0];
        const ADreamIllAlwaysHave = ArticleButtonList[i];
        const ADreamIHadBefore = new URL(selected[4], siteRoot);
        ADreamIllAlwaysHave.style.setProperty("--article-image", `url("${ADreamIHadBefore.href}")`);
        ADreamIllAlwaysHave.addEventListener("click", () => {
            navigateTo(selected[3]);
        });
        for(let y = 0; y < 3; y++){
            ADreamIllAlwaysHave.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
recognizePage();