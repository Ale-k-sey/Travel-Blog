const gulp = require('gulp');
// const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));

function sassToCSS(done) {
	gulp.src('src/scss/style.scss')
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on('error', console.error.bind(console))
		.pipe(rename({suffix: '.min'}))
		.pipe( gulp.dest('src/scss') );
	done();
}

gulp.task(sassToCSS);