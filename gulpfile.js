const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

const uglify = require('gulp-uglify');

const obfuscate = require('gulp-obfuscate');

const imagemin = require('gulp-imagemin');

function compileSass()
{
    return gulp.src('./source/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(sourcemaps.write('./maps/'))
    .pipe(gulp.dest('./build/styles/'))
}

function minifyJS()
{
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts/'))
}

function compressImages()
{
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images/'))
}



exports.compileSass = compileSass;

exports.minifyJS = minifyJS;

exports.compressImages = compressImages;

gulp.task('fullWorkflow', gulp.parallel(compileSass, minifyJS, compressImages));
