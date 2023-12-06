import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {COLORS} from '../../Assets';
import {request, PERMISSIONS} from 'react-native-permissions';
import {useCameraDevice, Camera} from 'react-native-vision-camera';
import {showError} from '../../Utils';

const QRCodeScreen = ({navigation}) => {
  const [cameraActive, setCameraActive] = useState(false);
  const device = useCameraDevice('back');

  useEffect(() => {
    const cameraPermission = async () => {
      const response = await request(PERMISSIONS.ANDROID.CAMERA);
      if (response === 'granted') {
        setCameraActive(true);
      } else {
        showError('Camera tidak di izinkan!');
        navigation.navigate('Home');
      }
    };

    cameraPermission();
  }, []);

  if (!cameraActive) {
    return (
      <View>
        <Text>Camera Not Ready</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 400,
        }}>
        <Camera style={{flex: 1}} device={device} isActive={cameraActive} />
      </View>
    </SafeAreaView>
  );
};

export default QRCodeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundWhite,
  },
});
