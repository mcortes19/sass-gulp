/* eslint-disable import/no-extraneous-dependencies */
import { src, dest } from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import plumber from 'gulp-plumber';
import eslint from 'gulp-eslint';

const scriptsPath = {
  src: './src/js/**/*.js',
  dest: './dist/js/',
};

const scripts = () => {
  return src(scriptsPath.src, {
    sourcemaps: true,
  })
    .pipe(plumber())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(
      dest(scriptsPath.dest, {
        sourcemaps: true,
      })
    );
};

// Lint scripts
const linter = () => {
  return src([scriptsPath.src, './gulp-tasks/**/*.js'])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format());
};

export { scriptsPath, scripts, linter };
