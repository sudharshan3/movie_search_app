var url = '';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
} else {
    url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
}

export const API_BASE_URL = url;
