import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {COLORS, ILNullPhoto} from '../../Assets';
import {Picker} from '@react-native-picker/picker';

const CardListAbsen = () => {
  const [selectStatus, setSelectStatus] = useState();
  return (
    <>
      <View style={styles.STCard}>
        <Image source={ILNullPhoto} style={styles.STImageCard} />
        <View style={{gap: 3, width: '100%'}}>
          <View style={{maxWidth: '76%'}}>
            <Text style={styles.STTextBold}>Syahrun Fathan Hidayah</Text>
            <Text style={{fontSize: 16}}>Stambuk: F55120127</Text>
            <Text style={{fontSize: 16}}>MK: Pemrograman Mobile</Text>
          </View>
          <View style={styles.STContentStatus}>
            <Text style={{fontSize: 16}}>Status:</Text>
            <Picker
              style={styles.STPicker}
              selectedValue={selectStatus}
              onValueChange={(item, index) => {
                setSelectStatus(item);
              }}>
              <Picker.Item label="--Pilih Status Absen--" value={''} />
              <Picker.Item label="Hadir" value={1} />
              <Picker.Item label="Izin" value={2} />
              <Picker.Item label="Sakit" value={3} />
            </Picker>
          </View>
        </View>
      </View>
    </>
  );
};

export default CardListAbsen;
const styles = StyleSheet.create({
  STCard: {
    marginTop: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    borderRadius: 12,
    borderColor: COLORS.grey,
  },
  STImageCard: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  STTextBold: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '700',
  },
  STContentStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    height: 30,
    marginTop: -5,
  },
  STPicker: {
    width: '100%',
    maxWidth: '75%',
    borderColor: COLORS.black,
    color: COLORS.primary,
  },
});
