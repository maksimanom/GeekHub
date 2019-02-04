var gulp = require('gulp');
var sass = require('gulp-sass');
var rewriteCSS = require('gulp-rewrite-css');
var minifyCss = require('gulp-minify-css');

gulp.task('sass', function(){ // Создаем таск Sass
  return gulp.src('dist/scss/**/*.scss') // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('dist/css'))
    //, ['my-rewrite'] // Выгружаем результата в папку app/css
    // .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('my-rewrite', function() {
  var dest = './dist/scss';
  return gulp.src('./src/scss/**/*.scss')
    .pipe(rewriteCSS({destination:dest}))
    .pipe(gulp.dest(dest));
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['my-rewrite']);
  gulp.watch('dist/scss/**/*.scss', ['sass'])// Наблюдение за sass файлами
  // Наблюдение за другими типами файлов
});
