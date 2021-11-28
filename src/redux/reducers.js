// @flow

import { combineReducers } from 'redux';
import Layout from './layout/reducers';
import Auth from './auth/reducers';
import Search from './search/reducers';

export default combineReducers({
    Auth,
    Layout,
    Search,
});
