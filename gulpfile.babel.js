import {
  parallel,
  watch,
} from 'gulp';
import {
  scriptsPath,
  scripts,
} from './gulp-tasks/scripts';
import {
  stylesPath,
  styles,
} from './gulp-tasks/styles';

const watchTask = () => {
  watch(stylesPath.src, {
    ignoreInitial: false,
  }, styles);
  watch(scriptsPath.src, {
    ignoreInitial: false,
  }, scripts);
};

export default parallel(styles, scripts, watchTask);
