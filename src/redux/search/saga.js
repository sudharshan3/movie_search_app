// @flow
import { Cookies } from 'react-cookie';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { fetchJSON } from '../../helpers/api';
import { ApiCall } from '../../services/index';
import { endpoints } from '../../services/endpoints';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SEARCH_LIST } from './constants';

import {
    getSearchListSuccess,
    getSearchListFailed,
 
} from './actions';

import { getLoggedInUser } from '../../helpers/authUtils';

const searchAddedSucsess = () => toast.success('Search Added Successfully', { transition: Zoom });
const searchDeletedSuccess = () => toast.success('Search Deleted Successfully', { transition: Zoom });
const searchUpdated = () => toast.info('Search Updated Successfully', { transition: Zoom });
const emptyAllFields = () => toast.warning('Please Fill All Fields', { transition: Zoom });
const WarnFields = (msg) => toast.error(msg, { transition: Zoom });
/**
 * Login the user
 * @param {*} payload - username and password
 */
function* SearchList({payload:data}) {
    const user = getLoggedInUser();
    let options = {
      
     
        headers: {
            'Content-Type': 'application/json',
            // Authorization: 'Bearer ' + user.token,
        },
        method: 'POST',
        url: endpoints.searchList+"&s="+data.search,
        // data: sendData
    };

    try {
        const response = yield call(ApiCall, options);

        yield put(getSearchListSuccess(response.data));
    } catch (error) {
        let message;
        switch (error.response.status) {
            case 500:
                message = 'Internal Server Error';
                WarnFields(message);
                break;
            case 401:
                message = "API limit Reached";
                WarnFields(message);
                break;
            case 400:
                message = error.response.data && error.response.data.error;
                WarnFields(message);
                break;
            default:
                message = error;
        }
        yield put(getSearchListFailed(message));
    }
}


export function* watchSearchList(): any {
    yield takeEvery(SEARCH_LIST, SearchList);
}


function* authSaga(): any {
    yield all([
        fork(watchSearchList),
        
    ]);
}

export default authSaga;
