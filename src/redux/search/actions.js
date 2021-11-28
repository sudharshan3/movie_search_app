// @flow
import {
    SEARCH_LIST,
    SEARCH_LIST_SUCCESS,
    SEARCH_LIST_FAILED,
  
} from './constants';

type SearchAction = { type: string, payload: {} | string };

export const getSearchList = (data:{}): SearchAction => ({
    type: SEARCH_LIST,
    payload: data,
});

export const getSearchListSuccess = (search: string): SearchAction => ({
    type: SEARCH_LIST_SUCCESS,
    payload: search,
});

export const getSearchListFailed = (error: string): SearchAction => ({
    type: SEARCH_LIST_FAILED,
    payload: error,
});

