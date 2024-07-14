import Axios from 'axios';
import constants from '../../utils/constants';

export const getFoodData = () => (dispatch: any) => {
  Axios.get(`${constants.DEFAULT_URL}/food`)
    .then(res => {
      dispatch({type: 'SET_FOOD', value: res.data.data.data});
    })
    .catch(err => {
      console.log(err);
    });
};
