import {FoodItem} from '../../types';

interface FoodState {
  food: FoodItem[];
  newTaste: FoodItem[];
  popular: FoodItem[];
  recommended: FoodItem[];
}
interface SetFoodAction {
  type: 'SET_FOOD' | 'SET_NEW_TASTE' | 'SET_POPULAR' | 'SET_RECOMMENDED';
  value: FoodItem[];
}

type Action = SetFoodAction;

const initHome: FoodState = {
  food: [],
  newTaste: [],
  popular: [],
  recommended: [],
};

export const homeReducer = (state = initHome, action: Action) => {
  switch (action.type) {
    case 'SET_FOOD':
      return {
        ...state,
        food: action.value,
      };
    case 'SET_NEW_TASTE':
      return {
        ...state,
        newTaste: action.value,
      };
    case 'SET_POPULAR':
      return {
        ...state,
        popular: action.value,
      };
    case 'SET_RECOMMENDED':
      return {
        ...state,
        recommended: action.value,
      };

    default:
      return state;
  }
};
