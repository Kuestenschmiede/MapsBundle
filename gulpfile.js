const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const cleanCSS = require('gulp-clean-css');

const customPath = 'Resources/public/';

const paths = {
    src: {
        styles: customPath + 'scss/*.scss',
    },
    dist: {
        styles: customPath + 'css/dist',
    },
    watch: {
        styles: customPath + 'scss/**/*.scss',
    },
};

// reading your sass files, add autoprefixer options, create sourcemaps, generate css file, inject css via browser-sync
const styles = function () {
    return gulp.src(paths.src.styles)
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest(paths.dist.styles));
};
exports.styles = styles;

// nearly the same that ['styles'] does, but minify css via cleanCSS
const minifyCss = function () {
    return gulp.src(paths.src.styles)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        // .pipe(cleanCSS({format: "beautify"}))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.dist.styles));
};
exports.minify_css = minifyCss;

const watch = function (done) {
    gulp.watch(paths.watch.styles, gulp.series([styles]));
    done();
};

exports.default = gulp.parallel([watch]);
exports.deploy = gulp.series([minifyCss]);
