/**
 * Created by Nikita on 16.12.2017.
 */

/**
 * A class for constructing menu item
 * @param href
 * @param title
 * @constructor
 */
function MenuItem(href, title) {
    this.href = href;
    this.title = title;
}

MenuItem.prototype.render = function () {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = this.href;
    a.innerHTML = this.title;
    li.appendChild(a);
    return li;
};

