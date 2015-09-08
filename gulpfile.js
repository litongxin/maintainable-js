var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    KarmaServer = require('karma').Server;

gulp.task('test', function(done){
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('js', function() {
    return gulp.src(['src/*.js', 'spec/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});

// gulp.task('browserify', function () {
//   return browserify('src/js/server.js')
//     .bundle()
//     .pipe(source('bundle.js'))
//     .pipe(gulp.dest('build/js'));
// });

gulp.task('browserify', function() {
    return browserify('src/js/componentize.js')
        .bundle()
        .on('error', function(err){
          console.log(err.message);
          this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*', ['browserify']);
});


gulp.task('default', ['js', 'test']);
