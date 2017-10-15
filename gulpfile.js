const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

gulp.task('es6',() => {
    return gulp.src('src/*.js')
        .pipe(babel(
            {
                presets:['es2015']
            }
        ))
        .pipe(gulp.dest('dist'));
});

gulp.task('default',
    ['es6','allInOne'],
    () => {
        gulp.watch('src/first.js', ['allInOne'])
    }
);

gulp.task('allInOne', () =>
    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets:['es2015']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
);