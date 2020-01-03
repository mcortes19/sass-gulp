import { series, parallel, watch } from 'gulp';
import {
  scriptsPath,
  scriptsCompile,
  scriptsLinter,
} from './gulp-tasks/scripts';
import { sassPath, sassCompile } from './gulp-tasks/styles';

const watchTask = () => {
  watch(
    sassPath.src,
    {
      ignoreInitial: true,
    },
    sassCompile
  );
  watch(
    [scriptsPath.src, './gulp-tasks/**/*.js'],
    {
      ignoreInitial: true,
    },
    series(scriptsCompile, scriptsLinter)
  );
};

export {
  watchTask as watch,
  sassCompile as styles,
  scriptsCompile as scripts,
  scriptsLinter as eslint,
};
export default parallel(sassCompile, scriptsCompile, scriptsLinter, watchTask);
