import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, Alert} from 'react-native';
import {COLORS, ICCamera} from '../../Assets';
import {
  useCameraPermission,
  useCameraDevice,
  Camera,
} from 'react-native-vision-camera';

const QRCodeScreen = () => {
  const device = useCameraDevice('back');

  if (device === null) {
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
        <Camera style={{flex: 1}} device={device} isActive={true} />
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
