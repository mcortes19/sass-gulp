/* eslint-disable import/no-extraneous-dependencies */
import {
  src,
  dest,
} from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import plumber from 'gulp-plumber';

const scriptsPath = {
  src: './src/js/**/*.js',
  dest: './dist/js/',
};

const scripts = () => src(scriptsPath.src, {
  sourcemaps: true,
})
  .pipe(plumber())
  .pipe(babel({
    presets: ['@babel/env'],
  }))
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest(scriptsPath.dest, {
    sourcemaps: true,
  }));

export {
  scriptsPath,
  scripts,
};
