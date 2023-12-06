import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {COLORS, ICBooks} from '../../Assets';
import {fetchProgramById, getStorage} from '../../Utils';

const CardMatkul = () => {
  const [program, setProgram] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const AmbilData = async () => {
      const response = await getStorage('profile');
      try {
        const data = await fetchProgramById(response?.data?.result?.userId);
        setProgram(data?.data?.response);
      } catch (error) {
        setMessage(error?.response?.data?.message);
      }
    };
    AmbilData();
  }, []);

  return (
    <View style={{marginBottom: -10}}>
      {program && program.length > 0 ? (
        program.map((item, index) => (
          <View style={styles.STCard} key={index}>
            <Image source={ICBooks} style={styles.STImageCard} />
            <View style={{gap: 3}}>
              <Text style={styles.STTextBold}>{item?.matkul?.matkul}</Text>
              <View style={{flexDirection: 'row', gap: 20}}>
                <Text style={{fontSize: 16}}>
                  Total SKS:{' '}
                  <Text style={{color: COLORS.primary, fontSize: 16}}>
                    {item?.matkul?.sks}
                  </Text>
                </Text>
                <Text style={{fontSize: 16}}>
                  Hari:{' '}
                  <Text style={{color: COLORS.primary, fontSize: 16}}>
                    {item?.matkul?.jadwal[0]?.hari}
                  </Text>
                </Text>
              </View>
              <View style={{flexDirection: 'row', gap: 20}}>
                <Text style={{fontSize: 16}}>
                  Mulai:{' '}
                  <Text style={{color: COLORS.primary, fontSize: 16}}>
                    {item?.matkul?.jadwal[0]?.jam_mulai}
                  </Text>
                </Text>
                <Text style={{fontSize: 16}}>
                  Selesai:{' '}
                  <Text style={{color: COLORS.primary, fontSize: 16}}>
                    {item?.matkul?.jadwal[0]?.jam_selesai}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        ))
      ) : (
        <View style={styles.STViewError}>
          <Text style={styles.STTextBoldGrey}>{message}</Text>
        </View>
      )}
    </View>
  );
};

export default CardMatkul;
const styles = StyleSheet.create({
  STCard: {
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderRadius: 12,
    borderColor: COLORS.grey,
    backgroundColor: COLORS.white,
  },
  STImageCard: {
    width: 60,
    height: 60,
  },
  STTextBold: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '700',
  },
  STTextBoldGrey: {
    color: COLORS.grey,
    fontWeight: '700',
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  STViewError: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
