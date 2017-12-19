/**
 * Created by Nikita on 16.12.2017.
 */

var pathToSmall;
var pathToBig;

window.onload = function () {
    var html_menu = document.getElementById('menu');

    var menu = new Menu(null, null, [
        new MenuItem('#', 'Main'),
        new SubMenu('#', 'Categories', [
            new SubMenu('#', 'Category 1', [
                new MenuItem('#', 'Subcategory 1'),
                new MenuItem('#', 'Subcategory 2'),
                new MenuItem('#', 'Subcategory 3'),
                new MenuItem('#', 'Subcategory 4'),
                new MenuItem('#', 'Subcategory 5')
            ]),
            new MenuItem('#', 'Category 2'),
            new SubMenu('#', 'Category 3', [
                new MenuItem('#', 'Subcategory 1'),
                new SubMenu('#', 'Subcategory 2', [
                    new MenuItem('#', 'Subcategory 1'),
                    new MenuItem('#', 'Subcategory 2'),
                    new MenuItem('#', 'Subcategory 3'),
                    new MenuItem('#', 'Subcategory 4'),
                    new MenuItem('#', 'Subcategory 5')
                ]),
                new MenuItem('#', 'Subcategory 3'),
                new SubMenu('#', 'Subcategory 4', [
                    new MenuItem('#', 'Subcategory 1'),
                    new MenuItem('#', 'Subcategory 2'),
                    new MenuItem('#', 'Subcategory 3'),
                    new SubMenu('#', 'Subcategory 4', [
                        new MenuItem('#', 'Subcategory 1'),
                        new MenuItem('#', 'Subcategory 2'),
                        new MenuItem('#', 'Subcategory 3'),
                        new MenuItem('#', 'Subcategory 4'),
                        new MenuItem('#', 'Subcategory 5')
                    ]),
                    new MenuItem('#', 'Subcategory 5')
                ]),
                new MenuItem('#', 'Subcategory 5'),
                new MenuItem('#', 'Subcategory 6')
            ]),
            new MenuItem('#', 'Category 4'),
            new MenuItem('#', 'Category 5')
        ]),
        new MenuItem('#', 'Cart'),
        new MenuItem('#', 'About us'),
        new MenuItem('#', 'Contacts')
    ]);

    html_menu.appendChild(menu.render());

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'js/slider.json', true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;

        if (xhr.status !== 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            var answer = JSON.parse(xhr.responseText);
            pathToBig = answer.pathToBig;
            pathToSmall = answer.pathToSmall;
            craftImages(answer.images);
        }

    };

    var thumbnailsPanel = document.getElementById('body-slider-images');
    thumbnailsPanel.addEventListener('wheel', function (e) {
        e = e || window.event;
        var delta = e.deltaY || e.detail || e.wheelDelta;
        thumbnailsPanel.scrollLeft = thumbnailsPanel.scrollLeft + delta;
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    });
};

function craftImages(images) {
    var slider = document.getElementById('body-slider-images');

    for (var image in images) {
        var img = document.createElement('img');
        img.src = pathToSmall + images[image];
        img.dataset.path = pathToBig + images[image];
        slider.appendChild(img);
        img.addEventListener('click', setImg);
    }
}

function setImg() {
    var slider = document.getElementById('body-slider-preview');
    previewImgToggle();
    var img = this;
    setTimeout(function () {
        slider.style.backgroundImage = 'url(' + img.dataset.path + ')'
    }, 250);
    setTimeout(previewImgToggle, 500);
}

function previewImgToggle() {
    var img = document.getElementById('body-slider-preview');
    if (img.style.opacity === '0') {
        img.style.opacity = '1';
    } else {
        img.style.opacity = '0';
    }
}