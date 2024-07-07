import {showMessage as showToast} from 'react-native-flash-message';

type MessageType = 'info' | 'warning'; // Example definition

// Define the custom type for the showToast function
type CustomToastType = 'success' | 'error';

export const showMessage = (
  message: string,
  type: CustomToastType = 'error',
) => {
  // Convert CustomToastType to MessageType
  let messageType: MessageType | undefined;
  switch (type) {
    case 'success':
      messageType = 'info';
      break;
    case 'error':
      messageType = 'warning';
      break;
    default:
      messageType = undefined;
  }

  showToast({
    message,
    type: messageType,
    backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
  });
};

export default showMessage;
