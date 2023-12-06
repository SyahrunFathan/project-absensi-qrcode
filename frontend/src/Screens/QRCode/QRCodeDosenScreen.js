import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {COLORS, ILQRCode} from '../../Assets';
import {CardListAbsen, IonIcon} from '../../Components';

const QRCodeDosenScreen = () => {
  return (
    <SafeAreaView style={styles.STContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.STContent}>
          <View style={styles.STContentCard}>
            <View style={styles.STCard}>
              <Image source={ILQRCode} style={styles.STQRCode} />
            </View>
          </View>

          <View style={{marginTop: 30}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <IonIcon name={'people-outline'} size={30} color={COLORS.black} />
              <Text
                style={{color: COLORS.black, fontSize: 22, fontWeight: '700'}}>
                List Mahasiswa
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <CardListAbsen />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QRCodeDosenScreen;
const styles = StyleSheet.create({
  STContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundWhite,
  },
  STContent: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  STContentCard: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  STCard: {
    borderWidth: 1,
    height: 300,
    width: 300,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    borderColor: COLORS.grey,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  STQRCode: {
    width: 290,
    height: 290,
  },
});
