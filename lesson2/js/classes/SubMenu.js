/**
 * Created by Nikita on 16.12.2017.
 */


function SubMenu(href, title, items) {
    Menu.call(this);
    this.title = title;
    this.href = href;
    this.items = items;
}

SubMenu.prototype = Object.create(Menu.prototype);
SubMenu.prototype.constructor = SubMenu;

SubMenu.prototype.render = function () {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = this.href;
    a.innerHTML = this.title;
    var span = document.createElement('span');
    span.classList.add('fa');
    span.classList.add('fa-arrow-right');
    a.appendChild(span);
    li.appendChild(a);
    li.appendChild(Menu.prototype.render.apply(this, arguments));
    return li;
};