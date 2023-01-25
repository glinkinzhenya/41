// В інформації товару - кнопка "купити".
// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця
// Місто(вибір зі списку)
// Склад Нової пошти для надсилання
// Післяплати або оплати банківської картки
// Кількість продукції, що купується
// Коментар до замовлення
// 2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення
//     - обов'язкові поля заповнені. Інакше - виводити помилку на сторінку
// 3. Виводити інформацію про замовлення на сторінку(інформація про товар та про доставку)

const categoriesIphone = document.querySelector(".categories-iphone");
const categoriesMac = document.querySelector(".categories-mac");
const categoriesWatch = document.querySelector(".categories-watch");

const productIphone = document.querySelector(".product-iphone");
const productMac = document.querySelector(".product-mac");
const productWatch = document.querySelector(".product-watch");

const productIphone2 = document.querySelector(".product-iphone__2");
const productIphone2info = document.querySelector(".product-iphone__2-info");

const productIphone3 = document.querySelector(".product-iphone__3");
const productIphone3info = document.querySelector(".product-iphone__3-info");

const productIphone4 = document.querySelector(".product-iphone__4");
const productIphone4info = document.querySelector(".product-iphone__4-info");

const buttonIphone2 = document.getElementById("button1");
const buttonIphone3 = document.getElementById("button2");
const buttonIphone4 = document.getElementById("button3");

const black = document.getElementById("black");

const formWidth = document.querySelector("form");
const button = document.getElementById("button");
const info = document.getElementById("info");
const town = document.getElementById("town");
const name1 = document.getElementById("name");
const number = document.getElementById("number");
const card = document.getElementById("card");
const adress = document.getElementById("adress");
const product = document.getElementById("product")
const form = document.getElementById("container");


categoriesIphone.addEventListener("click", () => {
    categories("iphone");
});

categoriesMac.addEventListener("click", () => {
    categories("mac");
});

categoriesWatch.addEventListener("click", () => {
    categories("watch");
});


function categories(params) {
    if (params === "iphone") {
        categoriesIphone.classList.add("active");
        productIphone.setAttribute("style", "");
    } else {
        categoriesIphone.classList.remove("active");
        productIphone.setAttribute("style", "display: none");
    };

    if (params === "mac") {
        categoriesMac.classList.add("active");
        productMac.setAttribute("style", "");
    } else {
        categoriesMac.classList.remove("active");
        productMac.setAttribute("style", "display: none");
    };

    if (params === "watch") {
        categoriesWatch.classList.add("active");
        productWatch.setAttribute("style", "");
    } else {
        categoriesWatch.classList.remove("active");
        productWatch.setAttribute("style", "display: none");
    };
}

productIphone2.addEventListener("click", () => {
    // productIphone2info.classList.remove("none");
    // productIphone3info.classList.add("none");
    // productIphone4info.classList.add("none");
    // productIphone2.classList.add("iphone");
    // productIphone3.classList.remove("iphone");
    // productIphone4.classList.remove("iphone");

    iphone("2");
})

productIphone3.addEventListener("click", () => {
    // productIphone3info.classList.remove("none");
    // productIphone2info.classList.add("none");
    // productIphone3.classList.add("iphone");
    // productIphone2.classList.remove("iphone");
    // productIphone4.classList.remove("iphone");
    // productIphone4info.classList.add("none");

    iphone("3");
})

productIphone4.addEventListener("click", () => {
    // productIphone4info.classList.remove("none");
    // productIphone2info.classList.add("none");
    // productIphone4.classList.add("iphone");
    // productIphone2.classList.remove("iphone");
    // productIphone3info.classList.add("none");
    // productIphone3.classList.remove("iphone");

    iphone("4");
})

function iphone(params) {

    if (params === "2") {
        productIphone2info.classList.remove("none");
        productIphone2.classList.add("iphone");
    } else {
        productIphone2info.classList.add("none");
        productIphone2.classList.remove("iphone");
    };

    if (params === "3") {
        productIphone3info.classList.remove("none");
        productIphone3.classList.add("iphone");
    } else {
        productIphone3info.classList.add("none");
        productIphone3.classList.remove("iphone");
    };

    if (params === "4") {
        productIphone4info.classList.remove("none");
        productIphone4.classList.add("iphone");
    } else {
        productIphone4info.classList.add("none");
        productIphone4.classList.remove("iphone");
    };
};



buttonIphone2.addEventListener("click", () => {
    formEnter("iPhone 2G")
})

buttonIphone3.addEventListener("click", () => {
    formEnter("iPhone 3G")
})

buttonIphone4.addEventListener("click", () => {
    formEnter("iPhone 4")
})

button.addEventListener("click", (e) => {
    e.preventDefault();
    checkInfoOff();
    checkInfo(name1.value, town.value, number.value, card.value, adress.value, product.value);

    document.getElementById("person").innerText = `${name1.value}`;
    document.getElementById("city").innerText = `${town.value}`;
    document.getElementById("mail").innerText = `${number.value}`;
    document.getElementById("bank").innerText = `${card.value}`;
    document.getElementById("street").innerText = `${adress.value}`;
    document.getElementById("numbers").innerText = `${product.value}`;
});

document.getElementById("button4").addEventListener("click", () => {
    location.reload();
});


function checkInfo(h, city, mail, bank, street, numbers) {
    let n = true;
    if (h.length === 0) {
        name1.setAttribute("style", "background-color: rgba(237, 129, 129, 0.27);");
        n = false;
    } if (city === "Ваше місто") {
        town.setAttribute("style", "background-color: rgba(237, 129, 129, 0.27);");
        n = false;
    } if (mail === "") {
        number.setAttribute("style", "background-color: rgba(237, 129, 129, 0.27);");
        n = false;
    } if (bank === "") {
        card.setAttribute("style", "background-color: rgba(237, 129, 129, 0.27);");
        n = false;
    } if (street.length === 0) {
        adress.setAttribute("style", "background-color: rgba(237, 129, 129, 0.27);");
        n = false;
    } if (numbers === "") {
        product.setAttribute("style", "background-color: rgba(237, 129, 129, 0.27);");
        n = false;
    } if (n === true) {
        info.classList.remove("block");
        let y = -410;
        info.style.top = `${y}px`;
        setInterval(() => {
            y += 5
            info.style.top = `${y}px`;
            if (y === 270) {
                clearInterval(2);
            }
        }, 5);
        formWidth.classList.add("none");
    };
};

function checkInfoOff() {
    name1.setAttribute("style", "");
    town.setAttribute("style", "");
    number.setAttribute("style", "");
    card.setAttribute("style", "");
    adress.setAttribute("style", "");
    product.setAttribute("style", "");
};

function formEnter(unit) {
    black.classList.remove("block");
    let i = -410;
    document.getElementById("position").innerText = `Ви замовили ${unit}`;
    formWidth.classList.remove("none");
    formWidth.style.top = `${i}px`;
    setInterval(() => {
        i += 5
        formWidth.style.top = `${i}px`;
        if (i === 10) {
            clearInterval(1);
        }
    }, 5);
};