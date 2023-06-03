// gulpfile.js
const { watch, series, src, dest, task } = require("gulp");
var browserSync = require("browser-sync").create();
var postcss = require("gulp-postcss");
const fileinclude = require('gulp-file-include');
// const imagemin = require("gulp-imagemin");

// Task for compiling our CSS files using PostCSS
function cssTask(cb) {
    return src("./src/css/*.css") // read .css files from ./src/ folder
        .pipe(postcss()) // compile using postcss
        .pipe(dest("./public/css/")) // paste them in ./public/css folder
        .pipe(browserSync.stream());
    cb();
}

// Task for compiling Html Include Files 
function htmlTask(cb) {
  return src(['./src/*.html'])
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(dest('./public/'));
  cb();
}

// Serve from browserSync server
function browsersyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: "./public/",
        },
        notify: false,
        open: false
    });
    cb();
}

function browsersyncReload(cb) {
    browserSync.reload();
    cb();
}

function copyCSS(cb) {
    // return src('./public/css/styles.css')
            // .pipe(dest('/Users/sandeep/Local Sites/bsilwebapp/app/public/wp-content/themes/auto-iq/assets/css'))
            // .pipe(dest('/Users/sandeep/Local Sites/autollp/app/public/wp-content/themes/auto-iq/assets/css'));;
    cb();
}

function copyJS(cb) {
    return src('./src/js/index.js')
            .pipe(dest('./public/js/'));;
    cb();
}

// Watch Files & Reload browser after tasks
function watchTask() {
    watch("./src/**/*.html",series(htmlTask, cssTask, browsersyncReload, copyCSS));
    watch(["./src/css/**/*.css"], series(cssTask, browsersyncReload, copyCSS));
}

// Default Gulp Task
exports.default = series(htmlTask, cssTask, copyCSS, copyJS, browsersyncServe, watchTask);
// exports.css = cssTask;
// exports.images = imageminTask;