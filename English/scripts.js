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
    window.location.href = "Feature.html";
});
const EditorialPage = document.getElementById("EditorialPage");
EditorialPage.addEventListener("click", () =>{
    window.location.href = "Editorial.html";
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
//article list randomizer
const BodyID = document.body.id;
const EditorialList = [
    ["Editorial", "A Victim’s Punishment", "Marquez, Justin Bennar DL.", "../English/Editorial/Marquez.html", "../assets/Editorial1.jpeg"],
    ["Editorial", "How Failing to Protect Students Ruin Their Learning", "Manalili, Mico", "../English/Editorial/Manalili.html", "../assets/Editorial2.jpg"]
];
const FeatureList = [
    ["Feature", "The Cost of Survival", "Galvez, Nevaeh", "../English/Feature/Galvez.html", "../assets/Feature3.jpeg"],
    ["Feature", "The Fear Behind the Walls", "Monsalud, Dudz Dale", "../English/Feature/Monsalud.html", "../assets/Feature2.jpg"],
    ["Feature", "The Invisible Scars", "Dizon, Christian Kyle", "../English/Feature/Dizon.html", "../assets/Feature1.jpg"]

];
//aghhhhhh im so bored i wanna code something else
    //imma code my task app after this to compliment my timer app 
    //or a stop watch app and itll have an animation of falling mangoes
const HerCalmingAbsurdity = [
    "HTMLFeature",
    "HTMLEditorial"
]
const HisChaoticSerenity = [
    randomizeFeatureList,
    randomizeEditorialList
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
function randomizeFeatureList(){
    for(let i = 0; i < 3; i++){
        const selector = Math.floor(Math.random() * FeatureList.length);
        const selected = FeatureList.splice(selector, 1)[0];
        const IthinkIhaveaCrush = ArticleButtonList[i];
        const NoChance = new URL(selected[4], document.baseURI);
        IthinkIhaveaCrush.style.setProperty("--article-image", `url("${NoChance}")`);
        IthinkIhaveaCrush.addEventListener("click", () => {
            window.location.href = selected[3];
        });
        for(let y = 0; y < 3; y++){
            IthinkIhaveaCrush.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
function randomizeEditorialList(){
    for(let i = 0; i < 2; i++){
        const selector = Math.floor(Math.random() * EditorialList.length);
        const selected = EditorialList.splice(selector, 1)[0];
        const AGirlASectionTooFar = ArticleButtonList[i];
        const MedicinalRainbows = new URL(selected[4], document.baseURI);
        AGirlASectionTooFar.style.setProperty("--article-image", `url("${MedicinalRainbows}")`);
        AGirlASectionTooFar.addEventListener("click", () => {
            window.location.href = selected[3];
        });
        for(let y = 0; y < 3; y++){
            AGirlASectionTooFar.children[0].children[1].children[y].textContent = selected[y];
        };
    };
    return;
};
recognizePage();