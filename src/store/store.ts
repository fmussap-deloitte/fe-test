import { Store } from 'redux';

import { isProduction } from 'common/utils';

const configureStore: () => Store<{}> = isProduction()
  ? require('./configureStore.production') // tslint:disable-line:no-require-imports
  : require('./configureStore.development'); // tslint:disable-line:no-require-imports

export default configureStore();
