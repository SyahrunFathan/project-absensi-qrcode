import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import IonIcon from '../IonIcons';
import {COLORS, ILNullPhoto} from '../../Assets';

const CardInformasi = () => {
  const [viewDesc, setViewDesc] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      judul: 'Program Beasiswa BRI, Untuk Mahasiswa Akhir!',
      desc: 'This is a generator for text fonts of the cool variety noticed people were trying to find a generator like fancy letters, but were ending up on actual font',
    },
    {
      id: 3,
      judul: 'Program Beasiswa BRI, Untuk Mahasiswa Akhir!',
      desc: 'This is a generator for text fonts of the cool variety noticed people were trying to find a generator like fancy letters, but were ending up on actual font',
    },
    {
      id: 4,
      judul: 'Program Beasiswa BRI, Untuk Mahasiswa Akhir!',
      desc: 'This is a generator for text fonts of the cool variety noticed people were trying to find a generator like fancy letters, but were ending up on actual font',
    },
    {
      id: 6,
      judul: 'Program Beasiswa BRI, Untuk Mahasiswa Akhir!',
      desc: 'This is a generator for text fonts of the cool variety noticed people were trying to find a generator like fancy letters, but were ending up on actual font',
    },
    {
      id: 7,
      judul: 'Program Beasiswa BRI, Untuk Mahasiswa Akhir!',
      desc: 'This is a generator for text fonts of the cool variety noticed people were trying to find a generator like fancy letters, but were ending up on actual font',
    },
    {
      id: 8,
      judul: 'Program Beasiswa BRI, Untuk Mahasiswa Akhir!',
      desc: 'This is a generator for text fonts of the cool variety noticed people were trying to find a generator like fancy letters, but were ending up on actual font',
    },
    {
      id: 9,
      judul: 'Program Beasiswa BRI, Untuk Mahasiswa Akhir!',
      desc: 'This is a generator for text fonts of the cool variety noticed people were trying to find a generator like fancy letters, but were ending up on actual font',
    },
  ]);

  const handleDesc = index => {
    const newViewDesc = {...viewDesc};
    newViewDesc[index] = !newViewDesc[index];
    setViewDesc(newViewDesc);
  };
  return (
    <View style={styles.contentNews}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={item?.id}
          onPress={() => handleDesc(index)}
          style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Image source={ILNullPhoto} style={{width: 50, height: 50}} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text20}>{item?.judul}</Text>
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
              <Text>{item?.desc}</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
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
});
