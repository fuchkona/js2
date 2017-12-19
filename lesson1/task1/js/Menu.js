function Menu(myId, myClass, myItems) {
    Container.call(this);

    this.id = myId;
    this.cssClass = myClass;
    this.items = myItems;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.render = function () {
    var result = '<ul id="' + this.id + '" class="' + this.cssClass + '">';
    for (var i = 0; i < this.items.length; i++) {
        // Оставляю здесь проверку типов, хотя можно было обойтись и без нее так как у классов MenuItem и SubMenu есть методы render
        if (this.items[i] instanceof SubMenu) {
            result += this.items[i].render(); //render принадлежит Подменю
        }
        if (this.items[i] instanceof MenuItem) {
            result += this.items[i].render(); //render принадлежит пункту меню
        }

    }
    result += '</ul>';

    this.htmlCode = result; //Сохраняем HTML-код меню
    return result;
};

Menu.prototype.remove = function () {
    var menu = document.getElementById(this.id);
    menu.parentNode.removeChild(menu);
    this.htmlCode = '';
};