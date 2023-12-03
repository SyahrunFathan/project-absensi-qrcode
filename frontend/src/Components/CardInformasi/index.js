import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import IonIcon from '../IonIcons';
import {COLORS, ILNullPhoto} from '../../Assets';
import {fetchBerita} from '../../Utils';

const CardInformasi = () => {
  const [viewDesc, setViewDesc] = useState(false);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  const handleDesc = index => {
    const newViewDesc = {...viewDesc};
    newViewDesc[index] = !newViewDesc[index];
    setViewDesc(newViewDesc);
  };

  useEffect(() => {
    const AmbilData = async () => {
      try {
        const response = await fetchBerita();
        setData(response?.data?.response);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setMessage(error.response.data.message);
        }
      }
    };
    AmbilData();
  }, []);
  return (
    <View style={styles.contentNews}>
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <TouchableOpacity
            key={item?.id_berita}
            onPress={() => handleDesc(index)}
            style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Image
                  source={item?.url ? {uri: item?.url} : ILNullPhoto}
                  style={{width: 50, height: 50}}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text20}>{item?.judul_berita}</Text>
              </View>
              <View style={{marginLeft: 'auto'}}>
                {viewDesc[index] ? (
                  <IonIcon name={'chevron-down-outline'} size={20} />
                ) : (
                  <IonIcon name={'chevron-back-outline'} size={20} />
                )}
              </View>
            </View>
            {viewDesc[index] && (
              <View style={{marginTop: 5}}>
                <Text>{item?.isi_berita}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))
      ) : (
        <View style={styles.viewError}>
          <Text style={styles.textGreyBold}>{message}</Text>
        </View>
      )}
    </View>
  );
};

export default CardInformasi;
const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 7,
  },
  text20: {
    maxWidth: 300,
    color: COLORS.navy,
    fontSize: 20,
  },
  container: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.grey,
    padding: 10,
  },
  contentNews: {
    marginVertical: 10,
  },
  newsHeaders: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  text20: {
    fontSize: 20,
    color: COLORS.navy,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  textGreyBold: {
    color: COLORS.grey,
    fontWeight: '700',
    fontSize: 24,
    fontStyle: 'italic',
  },
  viewError: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
