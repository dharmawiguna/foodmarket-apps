import {OrderItem} from '../../types';

interface OrderState {
  orders: OrderItem[];
  inProgress: OrderItem[];
  pastOrders: OrderItem[];
}

interface SetOrderAction {
  type: 'SET_ORDER' | 'SET_IN_PROGRESS' | 'SET_PAST_ORDERS';
  value: OrderItem[];
}
type Action = SetOrderAction;

const initOrder: OrderState = {
  orders: [],
  inProgress: [],
  pastOrders: [],
};

export const orderReducer = (state = initOrder, action: Action) => {
  switch (action.type) {
    case 'SET_ORDER':
      return {
        ...state,
        orders: action.value,
      };
    case 'SET_IN_PROGRESS':
      return {
        ...state,
        inProgress: action.value,
      };
    case 'SET_PAST_ORDERS':
      return {
        ...state,
        pastOrders: action.value,
      };

    default:
      return state;
  }
};
