var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglifyJs = require('gulp-uglifyjs'),
    autoPrefixer = require('gulp-autoprefixer'),
    imageMin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    concatCss  = require('gulp-concat-css');
    concat  = require('gulp-concat');


/**
 * 1. gulp.task() - объявляет новую задачу
 * 2. gulp.src() - отвечает за выборку файлов
 * 3. gulp.dest() - выходная дирректория для файлов
 * 4. gulp.watch() - метод для контроля изменений в файлах
 */

var config = {
    app: './app',
    dist: './dist'
};

gulp.task('test', function () {
    console.log('Gulp works!');
});

//SASS
gulp.task('sass', function () {
    gulp.src(config.app + '/sass/**/*.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoPrefixer())
        .pipe(rename({suffix: ".min"}))
        .pipe(concatCss('main.css'))
        .pipe(gulp.dest(config.dist + '/css'))
        .pipe(browserSync.reload({stream: true}));
});

//HTML
gulp.task('html', function () {
    gulp.src([config.app + '/index.html'])
        .pipe(gulp.dest(config.dist))
        .pipe(browserSync.reload({stream: true}));
});

//FONTS
gulp.task('fonts', function () {
    gulp.src(config.app + '/fonts/**/*')
        .pipe(gulp.dest(config.dist + '/fonts'));
});

//JS
gulp.task('js', function () {
    gulp.src(config.app + '/js/**/*.js')
        .pipe(uglifyJs())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(config.dist + '/js'))
        .pipe(browserSync.reload({stream: true}));
});

//JSON
gulp.task('json', function () {
    gulp.src(config.app + '/js/**/*.json')
        .pipe(gulp.dest(config.dist + '/js'));
});

//Watch
gulp.task('watch', function () {
   gulp.watch(config.app + '/js/**/*.js', ['js']);
   gulp.watch([config.app + '/index.html'], ['html']);
   gulp.watch(config.app + '/sass/**/*.sass', ['sass']);
});

//Image
gulp.task('image', function () {
    gulp.src(config.app + '/images/**/*')
        .pipe(imageMin())
        .pipe(gulp.dest(config.dist + '/images'));
});

//Server
gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: config.dist
        }
    });
});

gulp.task('default', ['test', 'sass', 'html', 'fonts', 'js', 'json', 'image','watch', 'server'], function () {
    console.log('Default task works!');
});