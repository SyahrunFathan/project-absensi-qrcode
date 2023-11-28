import {showMessage} from 'react-native-flash-message';

export const showSuccess = async text => {
  showMessage({
    message: text,
    icon: 'success',
    duration: 1500,
    type: 'info',
    style: {
      marginTop: 20,
      marginHorizontal: 20,
      borderRadius: 10,
    },
  });
};

export const showError = async text => {
  showMessage({
    message: text,
    icon: 'danger',
    duration: 1500,
    type: 'danger',
    style: {
      marginTop: 20,
      marginHorizontal: 20,
      borderRadius: 10,
    },
  });
};
