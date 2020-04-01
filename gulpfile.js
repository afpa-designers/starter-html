// Chargement des plugins
var gulp = require('gulp');
var sass = require('gulp-sass'); // => Pour pouvoir charger 'gulp-sass' il faut l'installer via la console
// installer gulp-sass via la console : npm install --save-dev gulp-sass

var minify = require('gulp-minify'); // Minify JS files
var cleanCSS = require('gulp-clean-css'); // Crée un fichier minifié CSS


// Warning ! Cette installation est à réaliser pour chaque plugin supplémentaire (voir doc du plugin en question) !!! 





// Notre script : la liste et la définition des tâches que l'on veut effectuer

// Tache 1 : 'scss' => compiler le SCSS en CSS :
gulp.task('scss', (done) => {
    gulp.src('./dev/scss/main.scss') // Source du fichier que nous voulons traduire en css
      .pipe(sass()) // passer en CSS
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./app/css/'))   // Chemin de destination du fichier une fois compilé en css
      // .pipe(livereload())
      done();
});

/* 
gulp.task('minifyJS', (done) => { // gérer les fichiers JS
    gulp.src('./assets/js/*.js')
      .pipe(minify())
      .pipe(gulp.dest('./dist/js/'))
      done();
  }); */




// Fonctions de lancement qui execute nos tâches dans un précis
gulp.task('default', gulp.series('scss'));



