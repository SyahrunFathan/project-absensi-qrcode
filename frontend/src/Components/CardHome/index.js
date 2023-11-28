import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { COLORS } from '../../Assets';

const CardHome = () => {
  return (
    <>
      <View style={styles.STContentCard}>
        <View style={styles.STCard1}>
          <Text style={styles.STTextUpCard}>100</Text>
          <Text style={styles.STTextBottomCard}>Present</Text>
        </View>
        <View style={styles.STCard2}>
          <Text style={styles.STTextUpCard}>100</Text>
          <Text style={styles.STTextBottomCard}>Absent</Text>
        </View>
      </View>
      <View style={styles.STContentCard}>
        <View style={styles.STCard3}>
          <Text style={styles.STTextUpCard}>100</Text>
          <Text style={styles.STTextBottomCard}>Permission</Text>
        </View>
        <View style={styles.STCard4}>
          <Text style={styles.STTextUpCard}>100</Text>
          <Text style={styles.STTextBottomCard}>Sick</Text>
        </View>
      </View>
    </>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  STContentCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: '100%',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 5,
  },
  STCard1: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    width: 90,
    height: 90,
    elevation: 10,
    marginHorizontal: 20,
    backgroundColor: COLORS.primary,
  },
  STCard2: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    width: 90,
    height: 90,
    elevation: 10,
    marginHorizontal: 20,
    backgroundColor: COLORS.danger,
  },
  STCard3: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    width: 90,
    height: 90,
    elevation: 10,
    marginHorizontal: 20,
    backgroundColor: '#4A76E3',
  },
  STCard4: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    width: 90,
    height: 90,
    elevation: 10,
    marginHorizontal: 20,
    backgroundColor: '#DAA626',
  },
  STTextUpCard: {
    marginTop: 20,
    color: COLORS.white,
    fontSize: 24,
  },
  STTextBottomCard: {
    marginBottom: 10,
    fontSize: 16,
    color: COLORS.white,
  },
});
