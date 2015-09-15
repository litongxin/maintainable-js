var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    KarmaServer = require('karma').Server,
    rev = require('gulp-rev'),
    fs = require('fs'),
    handlebars = require('gulp-compile-handlebars');
    rename = require('gulp-rename'),
    handlebarOpts = {
      helpers: {
          assetPath: function (path, context) {
              return ['build/assets', context.data.root[path]].join('/');
          }
      }
    },
    clean = require('gulp-clean');

gulp.task('test', function(done){
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('js', ['cleanup'], function() {
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

gulp.task('browserify', ['js'] ,function() {
    return browserify('src/js/componentize.js')
        .bundle()
        .on('error', function(err){
          console.log(err.message);
          this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('src/js'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*', ['browserify']);
});

gulp.task('rev', ['browserify'] ,function () {
  return gulp.src(['src/css/*.css', 'src/js/bundle.js'], { base: 'src'})
     .pipe(gulp.dest('build/assets'))
     .pipe(rev())
     .pipe(gulp.dest('build/assets'))
     .pipe(rev.manifest())
     .pipe(gulp.dest('build/assets'));
});

gulp.task('compileHtml', ['rev'], function () {
    var manifest = JSON.parse(fs.readFileSync('build/assets/rev-manifest.json', 'utf8'));

    return gulp.src('six.hbs')
        .pipe(handlebars(manifest, handlebarOpts))
        .pipe(rename('six.html'))
        .pipe(gulp.dest(''));
});

gulp.task('cleanup', function(){
  return gulp.src(['build', 'public'], {read: false})
        .pipe(clean());
});

gulp.task('default', ['compileHtml']);
