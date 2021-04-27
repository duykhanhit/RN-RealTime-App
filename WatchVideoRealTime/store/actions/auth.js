export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = user => {
  return async dispatch => {
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
      }),
    });

    if (!response.ok) {
      // hanle error
    }

    const resData = await response.json();
    dispatch({type: SIGNUP, ...resData.data});
  };
};

export const login = (phonenumber, password) => {
  return async dispatch => {
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
      }),
    });

    if (!response.ok) {
      // hanle error
    }

    const resData = await response.json();
    dispatch({type: LOGIN, ...resData.data});
  };
};
