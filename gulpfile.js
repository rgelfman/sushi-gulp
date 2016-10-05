var gulp = require('gulp');

var sass = require('gulp-sass');

var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

var sassOptions =

{
	errLogToConsole: true, 
	outputstyle: 'expanded'
}
var sassSources = './scss/**/*.scss';
var sassOutput = './app/css';
var htmlSource = 'app/**/*.html';


gulp.task('sass', 

function()
{
//console.log('testing 1 2 3')
return gulp.src(sassSources)
.pipe(sourcemaps.init())
.pipe(sass(sassOptions).on('error', sass.logErrror))
.pipe(sourcemaps.write('.'))
.pipe(gulp.dest(sassOutput))
.pipe(browserSync.stream())
});



gulp.task('serve', ['sass'], function()

{

browserSync.init({
        server: "./app"
    });

    // gulp.watch(sassSources, ['sass']);
    // gulp.watch(htmlSource).on('change', browserSync.reload);


	gulp.watch(sassSources)
	gulp.watch('app/**/*.html').on('change', browserSync.reload);



});




