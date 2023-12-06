import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, ILDefaultPhoto} from '../../Assets';
import {CardMatkul, IonIcon} from '../../Components';
import {
  LogoutApi,
  fetchProgramById,
  getStorage,
  removeStorage,
} from '../../Utils';

const ProfileScreen = ({navigation}) => {
  const [showList, setShowList] = useState(false);
  const [program, setProgram] = useState([]);
  const [profile, setProfile] = useState([]);

  const handleLogout = async () => {
    try {
      const response = await LogoutApi();
      if (response) {
        await removeStorage('profile');

        navigation.replace('Splash');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const AmbilData = async () => {
      const response = await getStorage('profile');
      setProfile(response?.data?.result);
    };

    AmbilData();
  }, []);
  return (
    <SafeAreaView style={styles.STContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.STContent}>
          <View style={styles.STContentList}>
            <TouchableOpacity
              style={styles.STButtonList}
              onPress={() => setShowList(!showList)}>
              <IonIcon name={'list-outline'} size={40} color={COLORS.black} />
            </TouchableOpacity>
          </View>
          <View style={styles.STContentHeader}>
            <Image source={ILDefaultPhoto} style={styles.STProfile} />
            <View style={styles.STContentHeaderText}>
              <Text style={styles.STTextName}>{profile?.nama}</Text>
              <Text style={styles.STTextStambuk}>
                {profile?.nim ? profile?.nim : profile?.nip}
              </Text>
              {profile?.role === 1 ? (
                <Text style={styles.STTextStambuk}>Mahasiswa</Text>
              ) : (
                <Text style={styles.STTextStambuk}>Dosen</Text>
              )}
            </View>
          </View>
          <View style={{gap: 8, flexDirection: 'row', alignItems: 'center'}}>
            <IonIcon
              name={'bookmarks-outline'}
              size={20}
              color={COLORS.black}
            />
            {profile?.role === 1 ? (
              <Text style={[styles.STTextStambuk, {color: COLORS.black}]}>
                Mata Kuliah Semester Berjalan
              </Text>
            ) : (
              <Text style={[styles.STTextStambuk, {color: COLORS.black}]}>
                Perkuliahan Anda
              </Text>
            )}
          </View>
          {profile?.role === 1 ? (
            <CardMatkul />
          ) : (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 100,
              }}>
              <Text style={[styles.STTextStambuk, {fontStyle: 'italic'}]}>
                Content In Progress!
              </Text>
            </View>
          )}
        </View>
        {showList && (
          <>
            <TouchableOpacity
              style={styles.STOverlay}
              onPress={() => setShowList(!showList)}
            />
            <View style={styles.STContentItemList}>
              <TouchableOpacity style={styles.STButtonItemList}>
                <IonIcon
                  name={'create-outline'}
                  size={24}
                  color={COLORS.black}
                />
                <Text style={styles.STTextButtonItemList}>Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleLogout}
                style={[
                  styles.STButtonItemList,
                  {borderBottomWidth: 0, paddingBottom: 0},
                ]}>
                <IonIcon
                  name={'log-out-outline'}
                  size={24}
                  color={COLORS.black}
                />
                <Text style={styles.STTextButtonItemList}>Keluar Aplikasi</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  STContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundWhite,
  },
  STContent: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  STContentHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  STProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  STContentHeaderText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    gap: 5,
  },
  STTextName: {
    color: COLORS.black,
    fontSize: 22,
    fontWeight: '700',
  },
  STTextStambuk: {
    color: '#999896',
    fontWeight: '700',
    fontSize: 18,
  },
  STContentList: {
    alignItems: 'flex-end',
    marginHorizontal: 10,
  },
  STButtonList: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: 42,
    height: 42,
  },
  STContentItemList: {
    borderWidth: 1,
    position: 'absolute',
    width: 200,
    right: 33,
    top: 60,
    padding: 10,
    backgroundColor: COLORS.white,
    borderColor: COLORS.grey,
    gap: 10,
  },
  STButtonItemList: {
    borderBottomWidth: 1,
    paddingBottom: 8,
    borderColor: COLORS.grey,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  STTextButtonItemList: {
    color: COLORS.black,
    fontSize: 16,
  },
  STOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
});
