// @flow
import {
    SEARCH_LIST,
    SEARCH_LIST_SUCCESS,
    SEARCH_LIST_FAILED,
 
} from './constants';

import { getLoggedInUser } from '../../helpers/authUtils';

const INIT_STATE = {
    user: getLoggedInUser(),
    loading: false,
};

type SearchAction = { type: string, payload: {} | string };
type State = { user?: {} | null, loading?: boolean, +value ?: boolean };

const Search = (state: State = INIT_STATE, action: SearchAction) => {
    switch (action.type) {
        case SEARCH_LIST:
            return { ...state, listloading: true };
        case SEARCH_LIST_SUCCESS:
            return { ...state, search: action.payload, listloading: false, error: null };
        case SEARCH_LIST_FAILED:
            return { ...state, error: action.payload, loading: false };
      
        default:
            return { ...state };
    }
};

export default Search;
