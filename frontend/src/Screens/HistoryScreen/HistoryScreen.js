import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../Assets';
import {IonIcon} from '../../Components';

const HistoryScreen = () => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.STContainer}>
      <View style={styles.STContent}>
        <View style={styles.STContentSearch}>
          <TextInput
            style={styles.STFormSearch}
            placeholder="Cari Kehadiran"
            value={search}
            onChangeText={text => setSearch(text)}
          />
          <View style={styles.STIconSearch}>
            <IonIcon name={'search-outline'} size={24} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginBottom: 60}}>
            <View style={styles.STCardPresent}>
              <View style={styles.STContentCard}>
                <View style={styles.STCardLeft}>
                  <Text style={styles.STTextCardBold}>2020-05-19</Text>
                  <Text>-</Text>
                </View>
                <View style={styles.STBadgeCard}>
                  <Text style={styles.STTextBadge}>Present</Text>
                </View>
              </View>
            </View>
            <View style={styles.STCardPresent}>
              <View style={styles.STContentCard}>
                <View style={styles.STCardLeft}>
                  <Text style={styles.STTextCardBold}>2020-05-19</Text>
                  <Text>-</Text>
                </View>
                <View style={styles.STBadgeCard}>
                  <Text style={styles.STTextBadge}>Present</Text>
                </View>
              </View>
            </View>
            <View style={styles.STCardPresent}>
              <View style={styles.STContentCard}>
                <View style={styles.STCardLeft}>
                  <Text style={styles.STTextCardBold}>2020-05-19</Text>
                  <Text>-</Text>
                </View>
                <View style={styles.STBadgeCard}>
                  <Text style={styles.STTextBadge}>Present</Text>
                </View>
              </View>
            </View>
            <View style={styles.STCardPresent}>
              <View style={styles.STContentCard}>
                <View style={styles.STCardLeft}>
                  <Text style={styles.STTextCardBold}>2020-05-19</Text>
                  <Text>-</Text>
                </View>
                <View style={styles.STBadgeCard}>
                  <Text style={styles.STTextBadge}>Present</Text>
                </View>
              </View>
            </View>
            <View style={styles.STCardPresent}>
              <View style={styles.STContentCard}>
                <View style={styles.STCardLeft}>
                  <Text style={styles.STTextCardBold}>2020-05-19</Text>
                  <Text>-</Text>
                </View>
                <View style={styles.STBadgeCard}>
                  <Text style={styles.STTextBadge}>Present</Text>
                </View>
              </View>
            </View>
            <View style={styles.STCardPresent}>
              <View style={styles.STContentCard}>
                <View style={styles.STCardLeft}>
                  <Text style={styles.STTextCardBold}>2020-05-19</Text>
                  <Text>-</Text>
                </View>
                <View style={styles.STBadgeCard}>
                  <Text style={styles.STTextBadge}>Present</Text>
                </View>
              </View>
            </View>
            <View style={styles.STCardPresent}>
              <View style={styles.STContentCard}>
                <View style={styles.STCardLeft}>
                  <Text style={styles.STTextCardBold}>2020-05-19</Text>
                  <Text>-</Text>
                </View>
                <View style={styles.STBadgeCard}>
                  <Text style={styles.STTextBadge}>Present</Text>
                </View>
              </View>
            </View>
            <View style={styles.STCardPresent}>
              <View style={styles.STContentCard}>
                <View style={styles.STCardLeft}>
                  <Text style={styles.STTextCardBold}>2020-05-20</Text>
                  <Text>Lambat Bangun</Text>
                </View>
                <View
                  style={[
                    styles.STBadgeCard,
                    {backgroundColor: COLORS.danger},
                  ]}>
                  <Text style={styles.STTextBadge}>Absent</Text>
                </View>
              </View>
            </View>
            <View style={styles.STCardPresent}>
              <View style={styles.STContentCard}>
                <View style={styles.STCardLeft}>
                  <Text style={styles.STTextCardBold}>2020-05-20</Text>
                  <Text>Ke Acara Pesta Di Labuana</Text>
                </View>
                <View
                  style={[
                    styles.STBadgeCard,
                    {backgroundColor: COLORS.success},
                  ]}>
                  <Text style={styles.STTextBadge}>Permission</Text>
                </View>
              </View>
            </View>
            <View style={styles.STCardPresent}>
              <View style={styles.STContentCard}>
                <View style={styles.STCardLeft}>
                  <Text style={styles.STTextCardBold}>2020-05-20</Text>
                  <Text>Demam Tinggi</Text>
                </View>
                <View
                  style={[
                    styles.STBadgeCard,
                    {backgroundColor: COLORS.warning},
                  ]}>
                  <Text style={styles.STTextBadge}>Sick</Text>
                </View>
              </View>
            </View>
            <View style={styles.STCardPresent}>
              <View style={styles.STContentCard}>
                <View style={styles.STCardLeft}>
                  <Text style={styles.STTextCardBold}>2020-05-20</Text>
                  <Text>Demam Tinggi</Text>
                </View>
                <View
                  style={[
                    styles.STBadgeCard,
                    {backgroundColor: COLORS.warning},
                  ]}>
                  <Text style={styles.STTextBadge}>Sick</Text>
                </View>
              </View>
            </View>
            <View style={styles.STCardPresent}>
              <View style={styles.STContentCard}>
                <View style={styles.STCardLeft}>
                  <Text style={styles.STTextCardBold}>2020-05-20</Text>
                  <Text>Demam Tinggi</Text>
                </View>
                <View
                  style={[
                    styles.STBadgeCard,
                    {backgroundColor: COLORS.warning},
                  ]}>
                  <Text style={styles.STTextBadge}>Sick</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  STContainer: {
    backgroundColor: COLORS.backgroundWhite,
    flex: 1,
  },
  STContent: {
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 40,
  },
  STContentSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  STFormSearch: {
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    borderColor: COLORS.grey,
    elevation: 2,
    fontSize: 18,
    paddingLeft: 45,
    paddingRight: 20,
    width: '100%',
  },
  STIconSearch: {
    position: 'absolute',
    left: 12,
  },
  STCardPresent: {
    marginTop: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    elevation: 1,
    borderColor: COLORS.grey,
  },
  STContentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  STTextCardBold: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: '700',
  },
  STBadgeCard: {
    paddingHorizontal: 10,
    backgroundColor: COLORS.primary,
    paddingVertical: 5,
    borderRadius: 20,
    elevation: 8,
  },
  STTextBadge: {
    color: COLORS.white,
    fontSize: 16,
  },
  STCardLeft: {
    maxWidth: '50%',
  },
});
