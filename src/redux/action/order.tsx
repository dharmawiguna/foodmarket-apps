import Axios from 'axios';
import constants from '../../utils/constants';
import {getData} from '../../utils';

export const getOrders = () => (dispatch: any) => {
  getData('token').then(resToken => {
    Axios.get(`${constants.DEFAULT_URL}/transaction`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then(res => {
        dispatch({type: 'SET_ORDER', value: res.data.data.data});
      })
      .catch(err => {
        console.log(err);
      });
  });
};

export const getInProgress = () => (dispatch: any) => {
  getData('token').then(resToken => {
    Axios.all([
      Axios.get(`${constants.DEFAULT_URL}/transaction?status=PENDING`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${constants.DEFAULT_URL}/transaction?status=SUCCESS`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${constants.DEFAULT_URL}/transaction?status=ON_DELIVERY`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2, res3) => {
          const pending = res1.data.data.data;
          const success = res2.data.data.data;
          const delivery = res3.data.data.data;
          dispatch({
            type: 'SET_IN_PROGRESS',
            value: [...pending, ...success, ...delivery],
          });
        }),
      )
      .catch(err => {
        console.log(err);
      });
  });
};

export const getPastOrders = () => (dispatch: any) => {
  getData('token').then(resToken => {
    Axios.all([
      Axios.get(`${constants.DEFAULT_URL}/transaction?status=CANCELLED`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${constants.DEFAULT_URL}/transaction?status=DELIVERED`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2) => {
          const cancelled = res1.data.data.data;
          const delivered = res2.data.data.data;
          dispatch({
            type: 'SET_PAST_ORDERS',
            value: [...cancelled, ...delivered],
          });
        }),
      )
      .catch(err => {
        console.log(err);
      });
  });
};
