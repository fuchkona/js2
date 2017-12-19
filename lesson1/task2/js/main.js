/**
 * Created by fuchkona on 14.12.2017.
 */
window.onload = init;

function init() {
    var hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
    console.log(hamburger);
    hamburger.addTopping(Hamburger.TOPPING_MAYO);
    console.log(hamburger.getToppings());
    hamburger.addTopping(Hamburger.TOPPING_SPICE);
    hamburger.addTopping(Hamburger.TOPPING_SPICE);
    console.log(hamburger.getToppings());
    hamburger.removeTopping(Hamburger.TOPPING_SPICE);
    console.log(hamburger.getToppings());
    console.log(hamburger.getSize());
    console.log(hamburger.getStuffing());
    console.log(hamburger.calculatePrice());
    console.log(hamburger.calculateCalories());

    //hamburger.addTopping('some error');
    //hamburger.removeTopping('some error');

    var hamburger2 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_POTATO);
    console.log(hamburger2);
    hamburger2.addTopping(Hamburger.TOPPING_MAYO);
    hamburger2.addTopping(Hamburger.TOPPING_MAYO);
    console.log(hamburger2.getToppings());
    hamburger2.addTopping(Hamburger.TOPPING_SPICE);
    hamburger2.addTopping(Hamburger.TOPPING_SPICE);
    console.log(hamburger2.getToppings());
    hamburger2.removeTopping(Hamburger.TOPPING_SPICE);
    console.log(hamburger2.getToppings());
    console.log(hamburger2.getSize());
    console.log(hamburger2.getStuffing());
    console.log(hamburger2.calculatePrice());
    console.log(hamburger2.calculateCalories());
}