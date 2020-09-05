const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const gulpStylelint = require('gulp-stylelint');
const htmlValidator = require('gulp-w3c-html-validator');
const checkCSS = require('gulp-check-unused-css');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const catchError = require('gulp-plumber');
const sass =require('gulp-sass');
const access = require('gulp-accessibility');
const htmlPretty = require('gulp-html-beautify');

sass.compiler = require('node-sass');

const onError = function (err) {
    notify.onError({
        title:    "Gulp",
        subtitle: "Failure!",
        message:  "Error: <%= error.message %>",
        sound:    "Beep"
    })(err);

    this.emit('end');
};

gulp.task('styles', () => {
    return gulp
        .src('./public/scss/./*.scss')
        .pipe(catchError({ errorHandler: onError }))
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(concat('main.min.css'))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./public/build/css'));
});

gulp.task('js', () => {
    return gulp.src('./public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/build/js'));
});

gulp.task('images', () => {
    return gulp.src('./public/img/**/*.{jpg,png,jpeg,svg}')
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest('./public/build/img'));
});

gulp.task('copyfonts', function() {
    return gulp.src('./public/fonts/**/*.{ttf,woff,eof,svg}')
        .pipe(gulp.dest('./public/build/fonts'));
});

gulp.task('cssLint', () => {
    return gulp
        .src('./public/scss/**/*.scss')
        .pipe(catchError({ errorHandler: onError }))
        .pipe(gulpStylelint({
            fix: true,
            reporters: [{formatter: 'string', console: true}]
        }));
});

gulp.task('validateHtml', () => {
    return gulp.src('views/**/*.njk')
        .pipe(htmlValidator())
});

gulp.task('accessibility', () => {
    return gulp.src('views/**/*.njk')
        .pipe(access({ force: true })).on('error', console.log)
});

gulp.task('findNotUsedCSS', () => {
    return gulp
        .src(['./public/build/*.css', './views/**/*.njk'])
        .pipe(checkCSS());
});

gulp.task('prettify-templates', function() {
    return gulp.src('./views/**/*.njk')
        .pipe(htmlPretty({indentSize: 2}))
        .pipe(gulp.dest('./views/'))
});

gulp.task('build', (done) => {
    gulp.series(['styles', 'images', 'js', 'copyfonts'])(done);
});

gulp.task('watch', () => {
    gulp.watch(['./public/scss'], gulp.series(['styles']));
    gulp.watch(['./public/img'], gulp.series(['images']));
});
