import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getStorage} from '../../Utils';
import {COLORS} from '../../Assets';
import {CardHome, CardInformasi, IonIcon} from '../../Components';

const HomeScreen = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const AmbilData = async () => {
      const response = await getStorage('profile');
      setProfile(response?.data?.result);
    };
    AmbilData();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.STContainer}>
        <View style={styles.STContent}>
          <Text style={styles.STTextBold}>Hi, {profile?.nama}! 👋</Text>
          <Text style={styles.STTextNormal}>Selamat datang kembali!</Text>
          <CardHome />

          <View style={{marginTop: 30}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <IonIcon
                name={'volume-high-outline'}
                size={22}
                color={COLORS.black}
              />
              <Text style={styles.STTextBold}>Informasi!</Text>
            </View>
            <CardInformasi />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  STContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundWhite,
  },
  STContent: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  STTextBold: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.black,
  },
  STTextNormal: {
    fontSize: 18,
    color: COLORS.black,
    fontWeight: '400',
  },
});
