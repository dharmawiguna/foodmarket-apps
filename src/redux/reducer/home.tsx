import {FoodItem} from '../../types';

interface FoodState {
  food: FoodItem[];
}
interface SetFoodAction {
  type: 'SET_FOOD';
  value: FoodItem[];
}

type Action = SetFoodAction;

const initHome: FoodState = {
  food: [],
};

export const homeReducer = (state = initHome, action: Action) => {
  switch (action.type) {
    case 'SET_FOOD':
      return {
        ...state,
        food: action.value,
      };

    default:
      return state;
  }
};
