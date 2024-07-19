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

export const getFoodDataByType = (type: string) => (dispatch: any) => {
  Axios.get(`${constants.DEFAULT_URL}/food?types=${type}`)
    .then(res => {
      console.log('newREst', res);
      if (type === 'new_food') {
        dispatch({type: 'SET_NEW_TASTE', value: res.data.data.data});
      }
      if (type === 'popular') {
        dispatch({type: 'SET_POPULAR', value: res.data.data.data});
      }
      if (type === 'recommended') {
        dispatch({type: 'SET_RECOMMENDED', value: res.data.data.data});
      }
    })
    .catch(err => {
      console.log(err);
    });
};
