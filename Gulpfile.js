var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths,
    minifycss = require('gulp-minify-css')
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    os = require('os');

gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
        .pipe(sass({
          includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest('css'))
        .pipe(autoprefixer({
    			browsers: ['last 2 versions'],
    			cascade: false
    		}))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./js/*.js')
    .pipe(connect.reload());
});

var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

gulp.src('./package.json').pipe(open({app: 'chrome'}));

gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open({uri: 'http://localhost:8080'}));
});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('./*.html', ['html']);
    gulp.watch('./js/*.js', ['js']);
});

gulp.task('default', ['sass', 'connect', 'open', 'watch']);
