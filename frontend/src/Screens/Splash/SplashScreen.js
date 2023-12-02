import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import {COLORS, ILLogo} from '../../Assets';
import {RemoveToken, getStorage, removeStorage} from '../../Utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const checkStatusSyarat = async () => {
      const response = await getStorage('check');
      setTimeout(() => {
        if (response) {
          const CheckUser = async () => {
            const response = await getStorage('profile');
            if (response) {
              const currentTime = new Date().getTime();
              const timeLogin = 24 * 60 * 60 * 1000;
              const timeStorage = currentTime - response?.timestamp;
              if (timeStorage > timeLogin) {
                await RemoveToken(response?.data?.result?.userId, {
                  role: response?.data?.result?.role,
                });
                await removeStorage('profile');
                navigation.replace('Login');
              } else {
                navigation.replace('MainApp');
              }
            }
          };
          CheckUser();
        } else {
          navigation.replace('Assesment');
        }
      }, 1500);
    };

    checkStatusSyarat();
  }, []);
  return (
    <SafeAreaView style={styles.STcontainer}>
      <View style={styles.STcontent}>
        <Image source={ILLogo} style={styles.STimage} />
        <Text style={styles.STTextOne}>SIABSENSI TI</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  STcontainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  STcontent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  STimage: {
    width: 170,
    height: 170,
  },
  STTextOne: {
    marginTop: 20,
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 24,
  },
});
