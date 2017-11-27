import { getDir } from './getdir';
import { apiGetBasePath } from '../external/api-get-basepath';
export const PATH_CHDIR = 'PATH_CHDIR';
export const chdir = (path) => dispatch => {
  dispatch({
    type: PATH_CHDIR,
    payload: {path}
  });
  dispatch(getDir());
};

export const gotoBasePath = () => (dispatch) => {
  console.log()
  apiGetBasePath()
    .then(res => {
      if (res.status === 403) { return Promise.reject('Forbidden'); }
      return res.json()
        .then(json => {
          if (!res.ok) {
            console.log({json});
            return Promise.reject(json.message);
          }
          return json;
        });
    })
    .then(payload => dispatch(chdir(payload.basepath)))
    .catch(error => {
      console.log({error});
    });
};
