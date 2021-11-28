import axios from 'axios';
import { isUserAuthenticated, getLoggedInUser } from '../helpers/authUtils';
import { API_BASE_URL } from './hostSetting';

export const ApiCall = (options) => {
    const loggedInuser = getLoggedInUser();
    var new_options = { ...options };

  

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        let host = window.location.host;
        let parts = host.split(".");
        if (parts.length >= 2) {
            let old_url = new_options.url;
            let new_url = old_url.replace("app", parts[0]);
            new_options.url = new_url;
        }
    }


    return axios(new_options).then((response) => response);
};
