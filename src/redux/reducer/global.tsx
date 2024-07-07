interface GlobalState {
  isError: boolean;
  message: string;
}

interface Action {
  type: 'SET_ERROR';
  value: Partial<GlobalState>;
}

const initGlobalState: GlobalState = {
  isError: false,
  message: 'Error',
};

export const globalReducer = (state = initGlobalState, action: Action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        isError: action.value.isError || state.isError,
        message: action.value.message || state.message,
      };
    default:
      return state;
  }
};
