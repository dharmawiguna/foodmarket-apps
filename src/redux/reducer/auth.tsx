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

interface UploadPhotoState {
  uri: string;
  type: string;
  name: string;
  isUploadPhoto: boolean;
}

interface SetPhotoAction {
  type: 'SET_PHOTO';
  value: Partial<UploadPhotoState>;
}

interface SetUploadStatusAction {
  type: 'SET_UPLOAD_STATUS';
  value: boolean;
}

type ActionPhoto = SetPhotoAction | SetUploadStatusAction;

const initStateUploadPhoto: UploadPhotoState = {
  uri: '',
  type: '',
  name: '',
  isUploadPhoto: false,
};

export const photoReducer = (
  state = initStateUploadPhoto,
  action: ActionPhoto,
): UploadPhotoState => {
  switch (action.type) {
    case 'SET_PHOTO':
      return {
        ...state,
        uri: action.value.uri || state.uri,
        type: action.value.type || state.type,
        name: action.value.name || state.name,
      };
    case 'SET_UPLOAD_STATUS':
      return {
        ...state,
        isUploadPhoto: action.value,
      };

    default:
      return state;
  }
};
