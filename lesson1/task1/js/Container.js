function Container() {
    this.htmlCode = '';

    // this.render = function () {
    //     return this.htmlCode;
    // };
}

Container.prototype.render = function () {
    console.log('Контейнер создан');
    return this.htmlCode;
};

Container.prototype.remove = function () {
    this.htmlCode = '';
    console.log('Контейнер удален');
};