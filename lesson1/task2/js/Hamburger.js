/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
    console.log('Гамбургер создан');
}
/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_POTATO = 'STUFFING_POTATO';
Hamburger.TOPPING_MAYO = 'TOPPING_MAYO';
Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (topping) {
    switch (topping) {
        case Hamburger.TOPPING_MAYO:
        case  Hamburger.TOPPING_SPICE:
            this.toppings.push(topping);
            break;
        default:
            throw new HamburgerException("Не верно выбран вариант топинга");
    }
};
/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping) {
    if (topping === Hamburger.TOPPING_SPICE || topping === Hamburger.TOPPING_MAYO) {
        this.toppings.splice(this.toppings.indexOf(topping), 1);
    } else {
        throw new HamburgerException("Не верно выбран вариант топинга");
    }
};
/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () {
    return this.toppings;
};
/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {
    return this.size;
};
/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
};
/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {
    var price = 0;
    switch (this.size) {
        case Hamburger.SIZE_SMALL:
            price += 50;
            break;
        case Hamburger.SIZE_LARGE:
            price += 100;
            break;
    }
    switch (this.stuffing) {
        case Hamburger.STUFFING_CHEESE:
            price += 10;
            break;
        case Hamburger.STUFFING_POTATO:
            price += 15;
            break;
        case Hamburger.STUFFING_SALAD:
            price += 20;
            break;
    }
    for(var top in this.toppings) {
        switch (this.toppings[top]) {
            case Hamburger.TOPPING_MAYO:
                price += 20;
                break;
            case  Hamburger.TOPPING_SPICE:
                price += 15;
                break;
        }
    }
    return price;
};
/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () {
    var calories = 0;
    switch (this.size) {
        case Hamburger.SIZE_SMALL:
            calories += 20;
            break;
        case Hamburger.SIZE_LARGE:
            calories += 40;
            break;
    }
    switch (this.stuffing) {
        case Hamburger.STUFFING_CHEESE:
            calories += 20;
            break;
        case Hamburger.STUFFING_POTATO:
            calories += 10;
            break;
        case Hamburger.STUFFING_SALAD:
            calories += 5;
            break;
    }
    for(var top in this.toppings) {
        switch (this.toppings[top]) {
            case Hamburger.TOPPING_MAYO:
                calories += 5;
                break;
        }
    }
    return calories;
};
/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException(message) {
    this.message = message;
    this.name = "Ошибка Гамбургера";
}