//Declare global container constant to represent <div> container
var pdiv = document.getElementById("colu");
//Define Fruit Object type with required properties
type Fruit = {
    name: string;
    image: string;
    price: string;
    unit: string;
}

//Fetch data from server using getFruits() method
function getFruits() {
    fetch("http://localhost:3000/fruits").then(response => response.json()).then(res => {
        transform(res);
    })
}

//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 
function transform(fruits: any) {
    fruits.forEach((element: any) => {
        let transformedFruit = {
            id: element.id,
            name: element.name,
            price: element.price,
            image: element.image,
            unit: element.unit
        }
        showFruit(transformedFruit);
    });
}

//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container
function showFruit(element: any) {
    //console.log("test");

    let divs = document.createElement("div");

    divs.classList.add('col-lg-2');
    divs.classList.add('card');
    divs.classList.add('m-2');
    pdiv?.appendChild(divs);
    let imgs = document.createElement("img");

    imgs.setAttribute("src", element.image);

    imgs.setAttribute("width", "120px");
    imgs.setAttribute("height", "100px");
    imgs.style.paddingLeft = "55px";
    divs.appendChild(imgs);

    let h3 = document.createElement("h3");
    let text = document.createTextNode(element.name)
    h3.appendChild(text)
    h3.style.textAlign = "center";
    divs.appendChild(h3)

    let span = document.createElement("span");
    span.style.textAlign = "center";
    let spanT = document.createTextNode("Price:$" + element.price + "per" + element.unit)
    span.appendChild(spanT)
    divs.appendChild(span)


}

//Call getFruits() method globally
getFruits();