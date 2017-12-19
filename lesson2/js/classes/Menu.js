/**
 * Created by Nikita on 16.12.2017.
 */

/**
 * A class for constructing menu
 * @param id
 * @param css_class
 * @param items
 * @constructor
 */
function Menu(id, css_class, items) {
    this.id = id;
    this.css_class = css_class;
    this.items = items;
}

Menu.prototype.render = function () {
    var ul = document.createElement('ul');
    ul.id = this.id;
    ul.classList.add(this.css_class);

    for (var i = 0; i < this.items.length; i++) {
        ul.appendChild(this.items[i].render());
    }

    return ul;
};