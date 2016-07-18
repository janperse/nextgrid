// Globals
var browserSync = require('browser-sync'),
    gulp = require('gulp'),
    autoPrefixer = require('gulp-autoprefixer'),
    cssNano = require('gulp-cssnano'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    runSequence = require('run-sequence');

// Paths
var paths = {
    dist: './dist/',
    src: './assets/'
};

// Clean
gulp.task('clean', require('del').bind(null, [paths.dist]));

// Styles
gulp.task('styles', function() {
    return gulp.src(paths.src + 'styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoPrefixer({
            browsers: [
                'last 2 version',
                'android 2.3',
                'android 4',
                'opera 12'
            ]
        }))
        .pipe(cssNano())
        .pipe(gulp.dest(paths.dist + 'styles'))
        .pipe(browserSync.stream());
});

/* Gulp watch - watch changes of files in 'src' folder (run it by 'gulp watch') */
gulp.task('watch', function() {
    browserSync.init({
        proxy: 'localhost/flexgrid',
        port: 8080,
        ui: {
            port: 8081
        },
        files: [
            './assets/**/*.{scss}'
        ]
    });
    gulp.watch('./assets/styles/**/*.scss', ['styles']);
});
