// Inclut Gulp et BrowserSync
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Inclut les plugins du package.json
var $ = require('gulp-load-plugins')({
    lazy: true
});

var paths = {
    views: '../Views/V3/**/*.cshtml',
    styles: 'assets/css/v3/**/*.scss',
    scripts: 'assets/js/v3/**/*.js',
    images: 'assets/images/v3/**/*'
}

// Serveur statique pour rafraichir la page on save
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'http://localhost:62254/'
    });
});

// Recharge la page à la modification du markup
gulp.task('views', function () {
    return gulp.src(paths.views)
        .pipe($.plumber(function (error) {
            console.log("Error in file :", error.message);
            this.emit('end');
        }))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Compile, prefixe et minifie le SCSS
gulp.task('styles', function() {
    return gulp.src(paths.styles) // Récupère tous les fichiers terminant par .scss dans le dossier src/scss et ses dossiers enfants
        .pipe($.plumber(function(error) { // Empêche les arrêts de gulp-watch en cas d'erreur 
            console.log("Error in file :", error.message);
            this.emit('end');
        }))
        .pipe($.sass()) // Compile le SCSS
        .pipe($.csscomb()) // Beatify
        .pipe($.autoprefixer()) // Autoprefixer
        .pipe($.cleanCss()) // Minifier
        .pipe($.rename({ suffix: '.min' })) // Renommer la version minifiée avec un suffixe ".min"
        .pipe(gulp.dest('assets/css/v3/')) // Déplacer les fichiers dans le dossier de production
        .pipe(browserSync.reload({ stream: true })); // Rafraichir le navigateur automatiquement
});

// Concatène et minifie le JS
gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe($.plumber(function(error) {
            console.log("Error in file :", error.message);
            this.emit('end');
        }))
        .pipe($.uglify()) // Minifier
        .pipe($.rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/js/v3/'))
        .pipe(browserSync.reload({ stream: true }));
});

// Compresse les images
gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe($.plumber(function(error) {
            console.log("Error in file :", error.message);
            this.emit('end');
        }))
        .pipe($.cache($.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))) // Optimiser les images
        .pipe(gulp.dest('assets/images/v3'))
        .pipe(browserSync.reload({ stream: true }));
});

// Cherche les changements dans les fichiers
gulp.task('watch', gulp.series('browser-sync', function() {
    gulp.watch(paths.views, ['views']);
    gulp.watch(paths.styles, ['styles']);
    //gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
}));

// Définit la  tâche par défaut
//gulp.task('default', ['styles', 'scripts', 'images']);
gulp.task('default', gulp.series('styles', function() {}));