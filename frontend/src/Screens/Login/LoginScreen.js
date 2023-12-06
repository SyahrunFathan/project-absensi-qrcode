import {
  Alert,
  BackHandler,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, ILLogo, ICBackArrow} from '../../Assets';
import {IonIcon} from '../../Components';
import {LoginApi, setStorage, showError} from '../../Utils';
import {Picker} from '@react-native-picker/picker';

const LoginScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const handleButtonBack = () => {
    Alert.alert('Perhatian!', 'Anda akan keluar dari aplikasi?', [
      {
        text: 'Batal',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Ya, Keluar!',
        onPress: () => {
          BackHandler.exitApp();
        },
      },
    ]);
  };

  const handleButtonLogin = async () => {
    try {
      const response = await LoginApi({
        username: username,
        password: password,
        role: role,
      });
      if (response) {
        const profileData = {
          timestamp: new Date().getTime(),
          data: response?.data,
        };
        await setStorage('profile', profileData);
        navigation.replace('MainApp');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        showError(error.response.data.message);
      } else {
        console.log(error.response.data.message);
      }
    }
  };
  return (
    <SafeAreaView style={styles.STContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.STContentCard}>
          <View style={styles.STContentCardHeader}>
            <TouchableOpacity onPress={handleButtonBack}>
              <Image source={ICBackArrow} style={{width: 38, height: 38}} />
            </TouchableOpacity>
            <Image source={ILLogo} style={{width: 80, height: 80}} />
          </View>
          <View style={styles.STContentText}>
            <Text style={styles.STTextBold700}>Hallo, Selamat Datang! 👋</Text>
            <Text style={styles.STTextLead}>
              Sistem Aplikasi Absensi Mahasiswa Jurusan{'\n'}Teknologi
              Informasi!
            </Text>
          </View>
        </View>
        <View style={styles.STContent}>
          <View style={{gap: 10}}>
            <Text style={styles.STTextNormal}>Username :</Text>
            <View style={styles.STContentForm}>
              <TextInput
                placeholder="Enter your username"
                style={styles.STFormInput}
                value={username}
                onChangeText={text => setUsername(text)}
              />
              <TouchableOpacity style={styles.STBtnIcon}>
                <IonIcon name={'person'} size={24} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginVertical: 10, gap: 10}}>
            <Text style={styles.STTextNormal}>Password :</Text>
            <View style={styles.STContentForm}>
              <TextInput
                placeholder="Enter your username"
                style={styles.STFormInput}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity
                style={styles.STBtnIcon}
                onPress={() => setShowPassword(!showPassword)}>
                {showPassword === true ? (
                  <IonIcon name={'eye'} size={24} />
                ) : (
                  <IonIcon name={'eye-off'} size={24} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginVertical: 10, gap: 10}}>
            <Text style={styles.STTextNormal}>Hak Akses :</Text>
            <View style={styles.STContentForm}>
              <Picker
                style={styles.STFormInput}
                selectedValue={role}
                onValueChange={(item, index) => setRole(item)}>
                <Picker.Item label="-- Pilih Hak Akses --" value={''} />
                <Picker.Item label="Mahasiswa" value={1} />
                <Picker.Item label="Dosen" value={2} />
              </Picker>
            </View>
          </View>
          <TouchableOpacity
            style={styles.STButtonLogin}
            onPress={handleButtonLogin}>
            <Text style={styles.STTextButton}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  STContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundWhite,
  },
  STContentCard: {
    height: 300,
    backgroundColor: COLORS.primary,
    borderBottomEndRadius: 100,
    elevation: 10,
  },
  STContentCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  STContentText: {
    marginHorizontal: 20,
    marginTop: 60,
  },
  STTextBold700: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '700',
  },
  STTextLead: {
    color: COLORS.white,
    fontWeight: '300',
    fontSize: 16,
  },
  STContent: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  STTextNormal: {
    fontSize: 18,
    color: COLORS.navy,
  },
  STContentForm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  STFormInput: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 40,
    backgroundColor: COLORS.white,
    borderColor: COLORS.grey,
    elevation: 3,
    width: '100%',
    fontSize: 16,
  },
  STBtnIcon: {
    position: 'absolute',
    right: 12,
  },
  STButtonLogin: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    elevation: 3,
  },
  STTextButton: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
  },
});
