const pictureIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const partIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const pictureElements = pictureIds.map(id => document.getElementById(id));
const titleElements = pictureIds.map(id => document.getElementById(`${id}T`));

const BaseCosts = {1:10, 2:20, 3:30, 4:40, 5:50, 6:60, 7:70, 8:80, 9:90, 10:100, 11:110, 12:120, 13:130, 14:140, 15:150, 16:160};
// Each of the keys in the BaseCosts object above corresponds to a product. The key below will state which ones the number corresponds to
// These prices are placeholers so please change them
// 1 : Micro 1 Thin Client   2 : Micro 5 Pro Thin Client   3 : Micro 5 Thin Client   4 : Neo R Thin Client   5 : Neo S Thin Client   6 : Micro 6 Mini PC   7 : Micro 8 Mini PC   8 : Neo 4 Mini PC
// 9 : Neo 5 Mini PC   10 : Neo 6 Mini PC   11 : Neo H Mini PC   12 : Byte 1 Mini pc   13 : IPC 3   14 : IPC 5   15 : All In One PC T215   16 : All In One PC T238

//These component prices work the same as the base costs

const ramPrices = {1:636, 2:1020, 3:1492, 4:3410};
// 1 : 4GB RAM   2 : 8GB RAM   3 : 16GB RAM  4 : 32GB RAM  
 
const storagePrices = {5:289, 6:745, 7:1115, 8:1870, 9:3971};
// 5 : 16GB USB   6 : 128GB M.2 SSD   7 : 256GB M.2 SSD   8 : 512GB M.2 SSD   9 : 1TB M.2 SSD

const licencePrices = {10:2796, 11:1500, 12:5555};
// 10 : Win 11 IoT Ent   11 : Windows 10/11 Pro OEM   12 : Windows 10 IoT Ent 2021 LTSC value edition

const processorPrices = {13:9398, 14:12180, 15:28140, 16:36514};
// 13 : core i3   14 : core i5   15 : core i7   16 : core i9

const addOnPrices = {17:120, 18:975, 19:390};
// 17 : VESA Mount   18 : Internal Wifi+bluetooth   19 : 65 watt power adapter

let baseCost = 160;
let ramPrice = 0;
let storagePrice = 0;
let licencePrice = 0;
let processorPrice = 0;
let additionalItemsPrice = 0;

const tax = 0.17

document.getElementById("Reset").addEventListener('click', () => reset())

function reset(){
  let taxandbase = baseCost + baseCost * tax
  document.getElementById("total").innerHTML = "Total cost: " + baseCost + "/-<br> including tax (17%): " + taxandbase + "/-";
  document.getElementById("RAM").innerHTML = "RAM cost: 0/-";
  document.getElementById("Storage").innerHTML = "Storage cost: 0/-";
  document.getElementById("licence").innerHTML = "Licence cost: 0/-";
  document.getElementById("Processor").innerHTML = "Processor cost: 0/-";
  document.getElementById("Additional-items").innerHTML = "Additional-items cost: 0/-";
  setPricetoZero();
}

document.getElementById("base").innerHTML = "Base cost: " + BaseCosts[16] + "/-";
document.getElementById("RAM").innerHTML = "RAM cost: 0/-";
document.getElementById("Storage").innerHTML = "Storage cost: 0/-";
document.getElementById("licence").innerHTML = "Licence cost: 0/-";
document.getElementById("Processor").innerHTML = "Processor cost: 0/-";
document.getElementById("Additional-items").innerHTML = "Additional-items cost: 0/-";
document.getElementById("total").innerHTML = "Total cost: " + BaseCosts[16] + "/-<br> including tax (17%): 187.2/-";

pictureIds.forEach(id => {
  const item = document.getElementById(`${id}L`);
  item.addEventListener('click', () => showImage(id));
});

function setPricetoZero() {
  ramPrice = 0;
  storagePrice = 0;
  licencePrice = 0;
  processorPrice = 0;
  additionalItemsPrice = 0;
}

partIds.forEach(Id => {
  const cost = document.getElementById(`${Id}O`);
  cost.addEventListener('click', () => updateCost(Id));
});

function showImage(id) {
  baseCost = BaseCosts[id];
  let baseCostTax = baseCost + baseCost * tax;
  document.getElementById("total").innerHTML = "Total cost: " + BaseCosts[id] + "/-<br> including tax (17%): " + baseCostTax + "/-";
  document.getElementById("base").innerHTML = "Base cost: " + BaseCosts[id] + "/-";
  pictureElements.forEach(image => image.style.zIndex = -1);
  titleElements.forEach(title => title.style.zIndex = -1);
  const image = document.getElementById(id);
  const title = document.getElementById(`${id}T`);
  title.style.zIndex = 1;
  image.style.zIndex = 1;
  document.getElementById("RAM").innerHTML = "RAM cost: 0/-";
  document.getElementById("Storage").innerHTML = "Storage cost: 0/-";
  document.getElementById("licence").innerHTML = "Licence cost: 0/-";
  document.getElementById("Processor").innerHTML = "Processor cost: 0/-";
  document.getElementById("Additional-items").innerHTML = "Additional-items cost: 0/-";
  setPricetoZero();
}

function updateCost(Id) {
  if(Id <= 4) {
    ramPrice = ramPrices[Id];
    document.getElementById("RAM").innerHTML = "RAM cost: " + ramPrice + "/-";
  } else if(Id >= 5 && Id <= 9) {
    storagePrice = storagePrices[Id];
    document.getElementById("Storage").innerHTML = "Storage cost: " + storagePrice + "/-";
  } else if(Id >= 10 && Id <= 12) {
    licencePrice = licencePrices[Id];
    document.getElementById("licence").innerHTML = "Licence cost: " + licencePrice + "/-";
  } else if(Id >= 13 && Id <= 16) {
    processorPrice = processorPrices[Id];
    document.getElementById("Processor").innerHTML = "Processor cost: " + processorPrice + "/-";
  } else if(Id >= 17 && Id <= 19) {
    additionalItemsPrice = addOnPrices[Id];
    document.getElementById("Additional-items").innerHTML = "Additional-items cost: " + additionalItemsPrice + "/-";
  }

  const combinedCosts = baseCost + ramPrice + storagePrice + licencePrice + processorPrice + additionalItemsPrice;
  const withTax = combinedCosts + combinedCosts * tax
  document.getElementById("total").innerHTML = "Total cost: " + combinedCosts + "/-<br> including tax (17%): " + withTax + "/-";
}


