var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

// var concat = require('gulp-concat');

var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

// var jshint = require('gulp-jshint');

var clean = require('gulp-clean');
// var rename = require('gulp-rename');
// var livereload = require('gulp-livereload');

var webpack = require('gulp-webpack');
//var rev=require('gulp-rev');
//var revCollector=require('gulp-rev-collector');

const DEBUG = !gutil.env.type === 'production';

var config = {
    name: 'izirong',
    refer: 'build/refer',
    dest: 'build/dest',
    rev: 'build/rev',
    tmp: 'build/tmp',
    src: 'src'
};

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

const webpackConfig = {
  watch: true,
  entry: {
    main: '../src/index.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      /*{ test: /\.coffee$/, loader: 'coffee-loader' },
       { test: /\.js$/, loader: 'babel-loader' }*/
    ]
  },

  // Choose a developer tool to enhance debugging
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
};

/**
 * common module
 */
gulp.task('task-webpack', function () {
    return gulp.src('')
        .pipe(plumber({
            errorHandler: function (err) {
                gutil.log('Gulp Error!', err.message);
                this.emit('end');
            }
        }))
        // .pipe(gutil.env.type === 'production' ? gutil.noop() : sourcemaps.init())
        .pipe(sourcemaps.init())
        .pipe(webpack(webpackConfig))
        //.pipe(rev())
        .pipe(uglify({mangle: false}))
        // .pipe(gutil.env.type === 'production' ? gutil.noop() : sourcemaps.write())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest));
    //.pipe(rev.manifest())
    //.pipe(gulp.dest(config.rev + '/js'));
});

gulp.task('minify-html-common', function () {
    return gulp.src(config.src + '/components/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyCSS: true,
            // minifyJS: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('phone-minify-css', function () {
    return gulp.src(config.src + '/phone/*.css')
        .pipe(plumber({
            errorHandler: function (err) {
                gutil.log('Gulp Error!', err.message);
                this.emit('end');
            }
        }))
        .pipe(gutil.env.type === 'production' ? gutil.noop() : sourcemaps.init())
        // .pipe(concat(config.name + '-app.css'))
        .pipe(autoprefixer({
            // browsers: AUTOPREFIXER_BROWSERS,
            browsers: ['not ie < 8', '> 5%', 'last 2 versions'],
            cascade: false
        }))
        // .pipe(gutil.env.type === 'production' ? cleanCSS({ compatibility: 'ie8' }) : gutil.noop())
        // .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(cleanCSS())
        .pipe(gutil.env.type === 'production' ? gutil.noop() : sourcemaps.write())
        .pipe(gulp.dest('./phone'));
});

// 清理
gulp.task('clean_refer', function () {
    return gulp.src([config.refer], {read: false})
        .pipe(clean());
});

// 改变引用路径
//gulp.task('rev', function () {
//    return gulp.src([config.rev + '/{css,js,js/*}/*.json', './{,*/,*/*/}*.html'])
//        .pipe(revCollector({
//            replaceReved: true
//        }))
//        .pipe(gulp.dest('./'));
//});

gulp.task('default', ['clean_dest'], function () {
    gulp.start('task-webpack', 'task-phone', 'task-home', 'task-login', 'task-app');
    //gulp.start('rev');
});


// 监控
gulp.task('watch', function () {

    gulp.start('default');

    // gulp.start('dev');

    // 看守所有Html文档
    gulp.watch('./src/components/*.html', ['minify-html-common']);
    gulp.watch('./src/components/directive/*.html', ['minify-html-components']);
    gulp.watch('./src/phone/*.html', ['phone-minify-html']);
    gulp.watch('./src/home/*.html', ['minify-html-home']);
    gulp.watch('./src/login/*.html', ['minify-html-login']);
    gulp.watch('./src/manage/*.html', ['minify-html-manage']);

    // 看守所有.css文档
    gulp.watch(['./src/{,manage/}*.css'], ['contact-css-app']);
    gulp.watch('./src/phone/*.css', ['phone-minify-css']);
    gulp.watch('./src/home/general.css', ['contact-css-home']);
    gulp.watch(['./src/home/lg.css', './src/home/md.css'], ['minify-css-home']);

    // 看守所有.js文档
    gulp.watch(['./src/components/common/*.js'], ['contact-js-app-modules']);
    gulp.watch(['./src/manage/*.js'], ['contact-js-manage']);
    // gulp.watch(['./src/home/index.js', './src/login/index.js', './src/manage/bkMgeIndex.js'], ['task-webpack']);

    // 建立即时重整伺服器
    //var server = livereload();

    // 看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整
    //gulp.watch(['build/**']).on('change', function(file) {
    //    server.changed(file.path);
    //});

});
