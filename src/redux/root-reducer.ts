import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import authFormReducer from 'src/redux/slices/auth-form-slice';

const rootReducer = combineReducers({
  authForm: authFormReducer,
});

export default rootReducer;
