interface RegisterState {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface Action {
  type: 'SET_REGISTER';
  value: Partial<RegisterState>;
}
const initStateRegister: RegisterState = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

export const registerReducer = (
  state = initStateRegister,
  action: Action,
): RegisterState => {
  switch (action.type) {
    case 'SET_REGISTER':
      return {
        ...state,
        name: action.value.name || state.name,
        email: action.value.email || state.email,
        password: action.value.password || state.password,
        password_confirmation:
          action.value.password_confirmation || state.password_confirmation,
      };

    default:
      return state;
  }
};
