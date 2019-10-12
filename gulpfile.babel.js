import { series, parallel, watch } from 'gulp';
import { scriptsPath, scripts, linter } from './gulp-tasks/scripts';
import { stylesPath, styles } from './gulp-tasks/styles';

const watchTask = () => {
  watch(
    stylesPath.src,
    {
      ignoreInitial: true,
    },
    styles
  );
  watch(
    [scriptsPath.src, './gulp-tasks/**/*.js'],
    {
      ignoreInitial: true,
    },
    series(scripts, linter)
  );
};

export { linter as eslint, watchTask as watch, styles, scripts };
export default parallel(styles, scripts, linter, watchTask);
