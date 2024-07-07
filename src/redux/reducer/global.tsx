interface GlobalState {
  isError: boolean;
  isLoading: boolean;
  message: string;
}

interface Action {
  type: 'SET_ERROR' | 'SET_LOADING';
  value: Partial<GlobalState>;
}

const initGlobalState: GlobalState = {
  isError: false,
  message: 'Error',
  isLoading: false,
};

export const globalReducer = (state = initGlobalState, action: Action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        isError: action.value.isError || state.isError,
        message: action.value.message || state.message,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.value,
      };
    default:
      return state;
  }
};
