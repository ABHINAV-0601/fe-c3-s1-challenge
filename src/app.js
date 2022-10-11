//Declare global container constant to represent <div> container
var pdiv = document.getElementById("colu");
//Fetch data from server using getFruits() method
function getFruits() {
    fetch("http://localhost:3000/fruits").then(function (response) { return response.json(); }).then(function (res) {
        transform(res);
    });
}
//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 
function transform(fruits) {
    fruits.forEach(function (element) {
        var transformedFruit = {
            id: element.id,
            name: element.name,
            price: element.price,
            image: element.image,
            unit: element.unit
        };
        showFruit(transformedFruit);
    });
}
//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container
function showFruit(element) {
    console.log("test");
    var divs = document.createElement("div");
    divs.classList.add('col-lg-2');
    divs.classList.add('card');
    divs.classList.add('m-2');
    pdiv === null || pdiv === void 0 ? void 0 : pdiv.appendChild(divs);
    var imgs = document.createElement("img");
    imgs.setAttribute("src", element.image);
    imgs.setAttribute("width", "120px");
    imgs.setAttribute("height", "100px");
    imgs.style.paddingLeft = "55px";
    divs.appendChild(imgs);
    var h3 = document.createElement("h3");
    var text = document.createTextNode(element.name);
    h3.appendChild(text);
    h3.style.textAlign = "center";
    divs.appendChild(h3);
    var span = document.createElement("span");
    span.style.textAlign = "center";
    var spanT = document.createTextNode("Price:$" + element.price + "per" + element.unit);
    span.appendChild(spanT);
    divs.appendChild(span);
}
//Call getFruits() method globally
getFruits();
