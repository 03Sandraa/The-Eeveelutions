// JavaScript Document
const ShortHandStones = "section:first-of-type>div:nth-of-type(2)>";
const Stones = document.querySelectorAll(ShortHandStones + "div img");
const ThunderStone = document.querySelector(ShortHandStones + "div:nth-of-type(1)");
const FireStone = document.querySelector(ShortHandStones + "div:nth-of-type(2)");
const WaterStone = document.querySelector(ShortHandStones + "div:nth-of-type(3)");
const LeafStone = document.querySelector(ShortHandStones + "div:nth-of-type(4)");
const IceStone = document.querySelector(ShortHandStones + "div:nth-of-type(5)");
const PsychicEvolveWay = document.querySelector(ShortHandStones + "div:nth-of-type(6)");
const DarkEvolveWay = document.querySelector(ShortHandStones + "div:nth-of-type(7)");
const FairyEvolveWay = document.querySelector(ShortHandStones + "div:nth-of-type(8)");

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
        Page.classList.add("Evolve");
    }
    else if (data == "FireStone") {
        Page.classList.add("Evolve");
    }
    else if (data == "WaterStone") {
        Page.classList.add("Evolve");
    }
    else if (data == "LeafStone") {
        Page.classList.add("Evolve");
    }
    else if (data == "IceStone") {
        Page.classList.add("Evolve");
    }
    else if (data == "PsychicEvolveWay") {
        Page.classList.add("Evolve");
    }
    else if (data == "DarkEvolveWay") {
        Page.classList.add("Evolve");
    }
    else if (data == "FairyEvolveWay") {
        Page.classList.add("Evolve");
    }
    
});
