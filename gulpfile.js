const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require("sass"));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();


const cssFilesArray = [
    "app/venders/swiper/css/swiper.css",
    // 'app/venders/locomotive-scroll/locomotive-scroll.css',
    "app/scss/main.scss",
];

// sass task for style css
function scssTask(){
    return src(cssFilesArray, {sourcemaps:true})
    .pipe(sass())
    .pipe(concat(".bundle.css"))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest ('dist', {sourcemaps:'.'}));
}

// sass task minified style css
function scssTaskMinified(){
    return src(cssFilesArray, {sourcemaps:true})
    .pipe(sass())
    .pipe(concat(".bundle.css"))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename('bundle.min.css'))
    .pipe(dest('dist', {sourcemaps:'.'}))
}

// Array of javaScript files
const jsFilesArray = [
    "app/venders/jquery/jquery-3.7.0.min.js",
    "app/venders/gsap/gsap.min.js",
    // "app/venders/gsap/ScrollTrigger.min.js",
    "app/venders/gsap/ScrollTrigger-3.6.1.min.js",
    'app/venders/locomotive-scroll/locomotive-scroll.min.js',
    "app/venders/swiper/js/swiper-bundle.min.js",
    "app/js/main.js",
];

// Javascript task
function jsTask(){
    return src(jsFilesArray, { sourcemaps:true })
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(rename('bundle.min.js'))
    .pipe(dest('dist', { sourcemaps:"."}))
}

// browserSync launch server
function browserSyncServe(cb){
    browserSync.init({
        server:{
            baseDir:'.'
        }
    });
    cb();
}

// browser sync reload the server when make changes in code
function browserSyncReload(cb){
    browserSync.reload();
    cb();
}

// watchTask
function watchTask(){
    watch("*.html", browserSyncReload);
    watch(["app/scss/**/*.scss", "app/js/main.js"], 
        series(scssTask, scssTaskMinified, jsTask, browserSyncReload)
    );
}

exports.default = series(
    scssTask, scssTaskMinified, 
    jsTask,browserSyncServe,
    watchTask
);