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
const HerThought = document.getElementById("jumpTo");
HerThought.addEventListener("click", () =>{
    navigateTo("Articles.html");
});
const AboutPage = document.getElementById("AboutPage");
AboutPage.addEventListener("click", () =>{
    navigateTo("About.html");
});
//article list randomizer
const BodyID = document.body.id;
const Editorial1List = [
    ["Editorial", "A Victim’s Punishment", "Marquez, Justin Bennar DL.", "English/Editorial/Marquez.html", "assets/Editorial1.jpeg"],
    ["Editorial", "How Failing to Protect Students Ruin Their Learning", "Manalili, Mico", "English/Editorial/Manalili.html", "assets/Editorial2.jpg"],
    ["Feature", "The Cost of Survival", "Galvez, Nevaeh", "English/Feature/Galvez.html", "assets/Feature2.jpg"],
    ["Feature", "The Fear Behind the Walls", "Monsalud, Dudz Dale", "English/Feature/Monsalud.html", "assets/Feature3.jpeg"]
];
const Editorial2List = [
    ["Editorial", "A Victim’s Punishment", "Marquez, Justin Bennar DL.", "English/Editorial/Marquez.html", "assets/Editorial1.jpeg"],
    ["Editorial", "How Failing to Protect Students Ruin Their Learning", "Manalili, Mico", "English/Editorial/Manalili.html", "assets/Editorial2.jpg"],
    ["Feature", "The Fear Behind the Walls", "Monsalud, Dudz Dale", "English/Feature/Monsalud.html", "assets/Feature3.jpeg"],
    ["Feature", "The Invisible Scars", "Dizon, Christian Kyle", "English/Feature/Dizon.html", "assets/Feature1.jpg"]
];
const Editorial3List = [
    ["Editorial", "A Victim’s Punishment", "Marquez, Justin Bennar DL.", "English/Editorial/Marquez.html", "assets/Editorial1.jpeg"],
    ["Editorial", "How Failing to Protect Students Ruin Their Learning", "Manalili, Mico", "English/Editorial/Manalili.html", "assets/Editorial2.jpg"],
    ["Feature", "The Cost of Survival", "Galvez, Nevaeh", "English/Feature/Galvez.html", "assets/Feature2.jpg"],
    ["Feature", "The Invisible Scars", "Dizon, Christian Kyle", "English/Feature/Dizon.html", "assets/Feature1.jpg"]
];
//aghhhhhh im so bored i wanna code something else
    //imma code my task app after this to compliment my timer app 
    //or a stop watch app and itll have an animation of falling mangoes
const HerCalmingAbsurdity = [
    "HTMLEditorial1", "HTMLEditorial2", "HTMLEditorial3"
]
const HisChaoticSerenity = [
    randomizeEditorial1List, randomizeEditorial2List, randomizeEditorial3List
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
function randomizeEditorial1List(){
    for(let i = 0; i < 4; i++){
        const selector = Math.floor(Math.random() * Editorial1List.length);
        const selected = Editorial1List.splice(selector, 1)[0];
        const button = ArticleButtonList[i];
        const Beauty = new URL(selected[4], siteRoot);
        button.style.setProperty("--article-image", `url("${Beauty.href}")`);
        button.addEventListener("click", () => {
            navigateTo(selected[3]);
        });
        for(let y = 0; y < 3; y++){
            button.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
function randomizeEditorial2List(){
    for(let i = 0; i < 4; i++){
        const selector = Math.floor(Math.random() * Editorial2List.length);
        const selected = Editorial2List.splice(selector, 1)[0];
        const AGirlASectionTooFar = ArticleButtonList[i];
        const YetAWorldTooFar = new URL(selected[4], siteRoot);
        AGirlASectionTooFar.style.setProperty("--article-image", `url("${YetAWorldTooFar.href}")`);
        AGirlASectionTooFar.addEventListener("click", () => {
            navigateTo(selected[3]);
        });
        for(let y = 0; y < 3; y++){
            AGirlASectionTooFar.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
function randomizeEditorial3List(){
    for(let i = 0; i < 4; i++){
        const selector = Math.floor(Math.random() * Editorial3List.length);
        const selected = Editorial3List.splice(selector, 1)[0];
        const button = ArticleButtonList[i];
        const Beauty = new URL(selected[4], siteRoot);
        button.style.setProperty("--article-image", `url("${Beauty.href}")`);
        button.addEventListener("click", () => {
            navigateTo(selected[3]);
        });
        for(let y = 0; y < 3; y++){
            button.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
recognizePage();