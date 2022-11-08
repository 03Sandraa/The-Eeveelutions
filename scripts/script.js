// JavaScript Document
const body = document.querySelector("body");
const ShortHandStones = "section:first-of-type>ul:nth-of-type(1)>";
const Stones = document.querySelectorAll(ShortHandStones + "li img");
const ThunderStone = document.querySelector(ShortHandStones + "li:nth-of-type(1)");
const FireStone = document.querySelector(ShortHandStones + "li:nth-of-type(2)");
const WaterStone = document.querySelector(ShortHandStones + "li:nth-of-type(3)");
const LeafStone = document.querySelector(ShortHandStones + "li:nth-of-type(4)");
const IceStone = document.querySelector(ShortHandStones + "li:nth-of-type(5)");
const PsychicEvolveWay = document.querySelector(ShortHandStones + "li:nth-of-type(6)");
const DarkEvolveWay = document.querySelector(ShortHandStones + "li:nth-of-type(7)");
const FairyEvolveWay = document.querySelector(ShortHandStones + "li:nth-of-type(8)");

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

PsychicEvolveWay.addEventListener("dragstart", (event) => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("text", event.target.id);
    dragged = event.target;
});

DarkEvolveWay.addEventListener("dragstart", (event) => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("text", event.target.id);
    dragged = event.target;
});

FairyEvolveWay.addEventListener("dragstart", (event) => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("text", event.target.id);
    dragged = event.target;
});


Dragzone.addEventListener("dragover", (event) => {
    event.preventDefault();
});

Dragzone.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text")
    const Page = document.querySelector("section:first-of-type");
    console.log(event.dataTransfer.getData("text"));

    if (data == "ThunderStone") {
        Page.classList.add("Evolve", "Jolteon");
    }
    else if (data == "FireStone") {
        Page.classList.add("Evolve", "Flareon");
    }
    else if (data == "WaterStone") {
        Page.classList.add("Evolve", "Vaporeon");
    }
    else if (data == "LeafStone") {
        Page.classList.add("Evolve", "Leafeon");
    }
    else if (data == "IceStone") {
        Page.classList.add("Evolve", "Glaceon");
    }
    else if (data == "PsychicEvolveWay") {
        Page.classList.add("Evolve", "Espeon");
    }
    else if (data == "DarkEvolveWay") {
        Page.classList.add("Evolve", "Umbreon");
    }
    else if (data == "FairyEvolveWay") {
        Page.classList.add("Evolve", "Sylveon");
    }
    
});

// Location

const ButtonSunLocation = document.querySelector("header ul li:first-of-type button");
const ButtonMoonLocation = document.querySelector("header ul li:nth-of-type(2) button");
const ButtonGrassLocation = document.querySelector("header ul li:nth-of-type(3) button");
const ButtonIceLocation = document.querySelector("header ul li:nth-of-type(4) button");

ButtonSunLocation.addEventListener("click", () => {
    body.classList.add("Sunny");
    body.classList.remove("Dark", "Grass", "Ice");
});

ButtonMoonLocation.addEventListener("click", () => {
    body.classList.add("Dark");
    body.classList.remove("Sunny", "Grass", "Ice");
});

ButtonGrassLocation.addEventListener("click", () => {
    body.classList.add("Grass");
    body.classList.remove("Sunny", "Dark", "Ice");
});

ButtonIceLocation.addEventListener("click", () => {
    body.classList.add("Ice");
    body.classList.remove("Sunny", "Dark", "Grass");
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