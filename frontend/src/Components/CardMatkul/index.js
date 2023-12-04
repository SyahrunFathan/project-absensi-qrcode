import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {COLORS, ICBooks} from '../../Assets';

const CardMatkul = () => {
  return (
    <View>
      <View style={styles.STCard}>
        <Image source={ICBooks} style={styles.STImageCard} />
        <View style={{gap: 3}}>
          <Text style={styles.STTextBold}>Pemrograman Mobile</Text>
          <Text>
            Total SKS: <Text style={{color: COLORS.primary}}>4.0</Text>
          </Text>
        </View>
      </View>
      <View style={styles.STCard}>
        <Image source={ICBooks} style={styles.STImageCard} />
        <View style={{gap: 3}}>
          <Text style={styles.STTextBold}>Pemrograman Mobile</Text>
          <Text>
            Total SKS: <Text style={{color: COLORS.primary}}>4.0</Text>
          </Text>
        </View>
      </View>
      <View style={styles.STCard}>
        <Image source={ICBooks} style={styles.STImageCard} />
        <View style={{gap: 3}}>
          <Text style={styles.STTextBold}>Pemrograman Mobile</Text>
          <Text>
            Total SKS: <Text style={{color: COLORS.primary}}>4.0</Text>
          </Text>
        </View>
      </View>
      <View style={styles.STCard}>
        <Image source={ICBooks} style={styles.STImageCard} />
        <View style={{gap: 3}}>
          <Text style={styles.STTextBold}>Pemrograman Mobile</Text>
          <Text>
            Total SKS: <Text style={{color: COLORS.primary}}>4.0</Text>
          </Text>
        </View>
      </View>
      <View style={styles.STCard}>
        <Image source={ICBooks} style={styles.STImageCard} />
        <View style={{gap: 3}}>
          <Text style={styles.STTextBold}>Pemrograman Mobile</Text>
          <Text>
            Total SKS: <Text style={{color: COLORS.primary}}>4.0</Text>
          </Text>
        </View>
      </View>
      <View style={styles.STCard}>
        <Image source={ICBooks} style={styles.STImageCard} />
        <View style={{gap: 3}}>
          <Text style={styles.STTextBold}>Pemrograman Mobile</Text>
          <Text>
            Total SKS: <Text style={{color: COLORS.primary}}>4.0</Text>
          </Text>
        </View>
      </View>
      <View style={styles.STCard}>
        <Image source={ICBooks} style={styles.STImageCard} />
        <View style={{gap: 3}}>
          <Text style={styles.STTextBold}>Pemrograman Mobile</Text>
          <Text>
            Total SKS: <Text style={{color: COLORS.primary}}>4.0</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardMatkul;
const styles = StyleSheet.create({
  STCard: {
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderRadius: 12,
    borderColor: COLORS.grey,
    elevation: 2,
  },
  STImageCard: {
    width: 60,
    height: 60,
  },
  STTextBold: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '700',
  },
});
