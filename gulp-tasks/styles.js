/* eslint-disable import/no-extraneous-dependencies */
import {
  src,
  dest,
} from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';

const stylesPath = {
  src: './src/sass/**/*.scss',
  dest: './dist/css/',
};

const styles = () => src(stylesPath.src, {
  sourcemaps: true,
})
  .pipe(plumber())
  .pipe(sass({
    outputStyle: 'compressed',
  }).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(cleanCSS({
    compatibility: 'ie8',
  }))
  .pipe(rename({
    extname: '.min.css',
  }))
  .pipe(dest(stylesPath.dest, {
    sourcemaps: true,
  }));

export {
  stylesPath,
  styles,
};
