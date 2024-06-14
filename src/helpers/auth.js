//import router that you use in other files if needed (check login)
import cookie from 'js-cookie';

// set in cookie
export const setCookie = (key, value, expiration) => {
  if (typeof window !== 'undefined') {
    cookie.set(key, value, {
        expires: expiration,
        secure: false, //set this to true if your site is on https. Rn you are on dev mode.
        // sameSite: 'Strict' //set this to 'Strict' if you want to block third party cookies 
    });
  }
};

// remove from cookie
export const removeCookie = (key) => {
  if (typeof window !== 'undefined') {
    cookie.remove(key);
  }
};

// get from cookie such as stored token
export const getCookie = (key) => {
    if (typeof window !== 'undefined') {
        return cookie.get(key);
    }
};

// set in localstorage
export const setLocalStorage = (key, value) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// remove from localstorage
export const removeLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
    }
};

// authenticate user by passing data to cookie and localstorage during signin
export const authenticate = (response) => {
    setCookie('token', response.token, response.end);
    setLocalStorage('user_id', response.id);
};

// access user info from localstorage
export const isAuth = () => {
    if (typeof window !== 'undefined') {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('user_id')) {
                return {
                    token: cookieChecked,
                    user_id: JSON.parse(localStorage.getItem('user_id'))
                };
            } else {
                return false;
            }
        }
    }
};

// signout user by removing data from cookie and localstorage
export const signout = () => {
    removeCookie('token');
    removeLocalStorage('user_id');
};

