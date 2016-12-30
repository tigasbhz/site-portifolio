'use strict'; 

var gulp = require('gulp'); 
var sass = require('gulp-sass'); 

/*-------------task default---------------*/

gulp.task('defaut', ['watch']);

/*----------------------------------------*/

// taskt compila sass
gulp.task('sass', function (){
	return gulp.src('sass/**/*.sass')
		.pipe(sass().on('error', sass.logError)) 
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('css')); 
}); 

// task watch
gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass', ['sass']); 
});