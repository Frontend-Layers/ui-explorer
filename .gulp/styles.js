import gulp from 'gulp';
const { src, dest } = gulp;
import cleanCSS from 'gulp-clean-css';

/**
 * System
 */
import connect from 'gulp-connect';


/**
 * Notification
 */
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import size from 'gulp-size';

/**
 * Styles
 */
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

/**
 * Source Map
 */
import sourcemaps from 'gulp-sourcemaps';


/**
* Config
*/
const cfg = {
  src: {
    scss: './src/scss/**/*.scss',
    css: './src/styles/**/*.css',
  },
  dest: {
    scss: './src/styles/',
    css: './dist/styles/',
  }
};

/**
 * Styles
 * ================================================================================
 */
const scss = () =>
  src(cfg.src.scss)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded',
        errLogToConsole: false,
        includePaths: ['node_modules', 'bower_components', 'src', '.'],
      })
    )
    .on('error', notify.onError())
    .pipe(sourcemaps.write('./'))
    .pipe(dest(cfg.dest.scss))
    .pipe(dest(cfg.dest.css))

/**
 * Styles Reload
 *
 */
const stylesReload = () => src(cfg.dest.scss)
  .pipe(connect.reload());

/**
* PostCSS, Autoprefixer, CSS compressor
*/
const cssCompress = (done) =>
  src('./src/styles/**/*.css')
    .pipe(plumber())
    .pipe(cleanCSS())
    .on('error', notify.onError())
    .pipe(dest('./dist/styles/'))
    .pipe(dest('./build/styles/'))
    .pipe(size())
    .pipe(connect.reload())
    .on('end', done);


export { scss, cssCompress, stylesReload };
