function SubMenu(title) {
    Menu.call(this);

    this.title = title;
}

SubMenu.prototype = Object.create(Menu.prototype);
SubMenu.prototype.constructor = SubMenu;

SubMenu.prototype.render = function () {
    return '<li><a>' + this.title + '</a>' + Menu.prototype.render.apply(this, arguments) + '</li>';
};