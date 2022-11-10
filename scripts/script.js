// JavaScript Document
const body = document.querySelector("body");
const ShortHandStones = "section:first-of-type>ul:nth-of-type(1)>";
const Stones = document.querySelectorAll(ShortHandStones + "li img");
const ThunderStone = document.querySelector(ShortHandStones + "li:nth-of-type(1)");
const FireStone = document.querySelector(ShortHandStones + "li:nth-of-type(2)");
const WaterStone = document.querySelector(ShortHandStones + "li:nth-of-type(3)");
const LeafStone = document.querySelector(ShortHandStones + "li:nth-of-type(4)");
const IceStone = document.querySelector(ShortHandStones + "li:nth-of-type(5)");
const FairyAttack = document.querySelector(ShortHandStones + "li:nth-of-type(6)");
const GiveLove = document.querySelector(ShortHandStones + "li:nth-of-type(7)");
const LevelUp = document.querySelector(ShortHandStones + "li:nth-of-type(8)");

const Dragzone = document.querySelector("section:first-of-type");

ThunderStone.addEventListener("dragstart", (event) => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("text", event.target.id);
    dragged = event.target;
});

FireStone.addEventListener("dragstart", (event) => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("text", event.target.id);
    dragged = event.target;
});

WaterStone.addEventListener("dragstart", (event) => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("text", event.target.id);
    dragged = event.target;
});

LeafStone.addEventListener("dragstart", (event) => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("text", event.target.id);
    dragged = event.target;
});

IceStone.addEventListener("dragstart", (event) => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("text", event.target.id);
    dragged = event.target;
});

FairyAttack.addEventListener("dragstart", (event) => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("text", event.target.id);
    dragged = event.target;
});

GiveLove.addEventListener("dragstart", (event) => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("text", event.target.id);
    dragged = event.target;
});

LevelUp.addEventListener("dragstart", (event) => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("text", event.target.id);
    dragged = event.target;
});


Dragzone.addEventListener("dragover", (event) => {
    event.preventDefault();
});

let LoveStatus = 0;
let FairyAttackStatus = 0;
const PokemonName = document.querySelector("h1");

Dragzone.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text")
    const Page = document.querySelector("section:first-of-type");
    const EvolveAnimation = document.querySelector("section:first-of-type figure:nth-of-type(2) div");


    if (data == "ThunderStone") {
        EvolveAnimation.classList.add("Evolve");
        Page.classList.add("Evolve");
        EvolveAnimation.addEventListener('animationend', () => {
            Page.classList.add("Jolteon");
            PokemonName.innerText = "Jolteon";
          });
    }
    else if (data == "FireStone") {
        EvolveAnimation.classList.add("Evolve");
        Page.classList.add("Evolve");
        EvolveAnimation.addEventListener('animationend', () => {
            Page.classList.add("Flareon");
            PokemonName.innerText = "Flareon";
          });
    }
    else if (data == "WaterStone") {
        EvolveAnimation.classList.add("Evolve");
        Page.classList.add("Evolve");
        EvolveAnimation.addEventListener('animationend', () => {
            Page.classList.add("Vaporeon");
            PokemonName.innerText = "Vaporeon";
          });
    }
    else if (data == "LeafStone") {
        EvolveAnimation.classList.add("Evolve");
        Page.classList.add("Evolve");
        EvolveAnimation.addEventListener('animationend', () => {
            Page.classList.add("Leafeon");
            PokemonName.innerText = "Leafeon";
          });
    }
    else if (data == "LevelUp" && Location == "Forest") {
        EvolveAnimation.classList.add("Evolve");
        Page.classList.add("Evolve");
        EvolveAnimation.addEventListener('animationend', () => {
            Page.classList.add("Leafeon");
            PokemonName.innerText = "Leafeon";
          });
    }
    else if (data == "IceStone") {
        EvolveAnimation.classList.add("Evolve");
        Page.classList.add("Evolve");
        EvolveAnimation.addEventListener('animationend', () => {
            Page.classList.add("Glaceon");
            PokemonName.innerText = "Glaceon";
          });
    }
    else if (data == "LevelUp" && Location == "Snow") {
        EvolveAnimation.classList.add("Evolve");
        Page.classList.add("Evolve");
        EvolveAnimation.addEventListener('animationend', () => {
            Page.classList.add("Glaceon");
            PokemonName.innerText = "Glaceon";
          });
    }
    else if (data == "LevelUp" && LoveStatus == 1 && Location == "Day") {
        EvolveAnimation.classList.add("Evolve");
        Page.classList.add("Evolve");
        EvolveAnimation.addEventListener('animationend', () => {
            Page.classList.add("Espeon");
            PokemonName.innerText = "Espeon";
          });
    }
    else if (data == "LevelUp" && LoveStatus == 1 && Location == "Night") {
        EvolveAnimation.classList.add("Evolve");
        Page.classList.add("Evolve");
        EvolveAnimation.addEventListener('animationend', () => {
            Page.classList.add("Umbreon");
            PokemonName.innerText = "Umbreon";
          });
    }
    else if (data == "FairyAttack") {
        FairyAttackStatus = 1;
    }
    else if (data == "Love") {
        LoveStatus = 1;
    }
    else if (data == "LevelUp" && LoveStatus == 1 && FairyAttackStatus == 1) {
        EvolveAnimation.classList.add("Evolve");
        Page.classList.add("Evolve");
        EvolveAnimation.addEventListener('animationend', () => {
            Page.classList.add("Sylveon");
            PokemonName.innerText = "Sylveon";
          });
    }
});

// Location

const ButtonSunLocation = document.querySelector("header ul li:first-of-type button");
const ButtonMoonLocation = document.querySelector("header ul li:nth-of-type(2) button");
const ButtonGrassLocation = document.querySelector("header ul li:nth-of-type(3) button");
const ButtonIceLocation = document.querySelector("header ul li:nth-of-type(4) button");

let Location = "Base";

ButtonSunLocation.addEventListener("click", () => {
    body.classList.add("Sunny");
    body.classList.remove("Dark", "Grass", "Ice");
    Location = "Day";
});

ButtonMoonLocation.addEventListener("click", () => {
    body.classList.add("Dark");
    body.classList.remove("Sunny", "Grass", "Ice");
    Location = "Night";
});

ButtonGrassLocation.addEventListener("click", () => {
    body.classList.add("Grass");
    body.classList.remove("Sunny", "Dark", "Ice");
    Location = "Forest";
});

ButtonIceLocation.addEventListener("click", () => {
    body.classList.add("Ice");
    body.classList.remove("Sunny", "Dark", "Grass");
    Location = "Snow";
});

// Shiny

const ButtonShiny = document.querySelector("header ul li:nth-of-type(5) button");

ButtonShiny.addEventListener("click", () => {
    const ContainerPokemon = document.querySelector("section:first-of-type>figure:nth-of-type(2)");
    ContainerPokemon.classList.toggle("Shiny");
});

const ButtonReset = document.querySelector("header ul li:nth-of-type(6) button");

ButtonReset.addEventListener("click", () => {
    window.location.reload();
});

const HiddenCheatSheet = document.querySelector("section:nth-of-type(2)");
let TimeClicksCheatsheet = 0;
const CheatSheetBackdrop = document.querySelector("body > div");

CheatSheetBackdrop.addEventListener("click", () => {
        HiddenCheatSheet.classList.remove("Open");
        CheatSheetBackdrop.classList.remove("Open");
        body.classList.remove("Overlay");
        TimeClicksCheatsheet = 0;
});

HiddenCheatSheet.addEventListener("click", () => {
    if (TimeClicksCheatsheet == 0){
        HiddenCheatSheet.classList.add("Stage1");
        TimeClicksCheatsheet = 1;
    } else if (TimeClicksCheatsheet == 1){
        HiddenCheatSheet.classList.add("Stage2");
        HiddenCheatSheet.classList.remove("Stage1");
        TimeClicksCheatsheet = 2;
    } else if (TimeClicksCheatsheet == 2){
        HiddenCheatSheet.classList.add("Open");
        CheatSheetBackdrop.classList.add("Open");
        body.classList.add("Overlay");
        HiddenCheatSheet.classList.remove("Stage2");
        TimeClicksCheatsheet = 3;
    } else if (TimeClicksCheatsheet == 3){
        HiddenCheatSheet.classList.remove("Open");
        CheatSheetBackdrop.classList.remove("Open");
        body.classList.remove("Overlay");
        TimeClicksCheatsheet = 0;
    }
});
