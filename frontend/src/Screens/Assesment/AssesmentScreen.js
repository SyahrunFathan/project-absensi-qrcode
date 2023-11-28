import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../Assets';
import CheckBox from '@react-native-community/checkbox';
import {setStorage} from '../../Utils';

const AssesmentScreen = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleButtonStart = async () => {
    await setStorage('check', toggleCheckBox);
    navigation.replace('Login');
  };
  return (
    <SafeAreaView style={styles.STContainer}>
      <View style={styles.STCard}>
        <ScrollView>
          <View style={styles.STContentCard}>
            <Text style={styles.STTextLarge}>
              Syarat & Ketentuan Aplikasi :
            </Text>
          </View>
          <Text style={styles.STTextBlack}>1. Pendaftaran Mahasiswa:</Text>
          <View style={styles.STGap}>
            <Text>&#x25CF;</Text>
            <Text style={styles.STTextNormal}>
              Untuk menggunakan aplikasi, mahasiswa diharuskan mendaftar dengan
              menyediakan informasi pribadi yang benar dan akurat.
            </Text>
          </View>
          <View style={styles.STGap}>
            <Text>&#x25CF;</Text>
            <Text style={styles.STTextNormal}>
              Setiap mahasiswa bertanggung jawab atas keamanan akunnya dan tidak
              boleh memberikan informasi login kepada pihak lain.
            </Text>
          </View>
          <Text style={styles.STTextBlack}>2. Penggunaan Barcode:</Text>
          <View style={styles.STGap}>
            <Text>&#x25CF;</Text>
            <Text style={styles.STTextNormal}>
              Setiap mahasiswa akan diberikan barcode unik yang digunakan untuk
              proses absensi. Barcode ini harus digunakan dengan benar dan tidak
              boleh disalahgunakan.
            </Text>
          </View>
          <View style={styles.STGap}>
            <Text>&#x25CF;</Text>
            <Text style={styles.STTextNormal}>
              Mahasiswa bertanggung jawab atas keamanan barcode pribadi mereka.
            </Text>
          </View>
          <Text style={styles.STTextBlack}>3. Kehadiran dan Absensi:</Text>
          <View style={styles.STGap}>
            <Text>&#x25CF;</Text>
            <Text style={styles.STTextNormal}>
              Mahasiswa diharapkan untuk hadir tepat waktu pada setiap sesi
              perkuliahan.
            </Text>
          </View>
          <View style={styles.STGap}>
            <Text>&#x25CF;</Text>
            <Text style={styles.STTextNormal}>
              Keterlambatan dan ketidakhadiran melebihi batas yang ditetapkan
              dapat berakibat pada sanksi sesuai kebijakan universitas.
            </Text>
          </View>
          <Text style={styles.STTextBlack}>4. Keamanan Data:</Text>
          <View style={styles.STGap}>
            <Text>&#x25CF;</Text>
            <Text style={styles.STTextNormal}>
              Kami berkomitmen untuk melindungi keamanan data pribadi mahasiswa.
              Data akan disimpan dan diolah sesuai dengan undang-undang privasi
              yang berlaku.
            </Text>
          </View>
          <Text style={styles.STTextBlack}>5. Aksesibilitas:</Text>
          <View style={styles.STGap}>
            <Text>&#x25CF;</Text>
            <Text style={styles.STTextNormal}>
              Aplikasi dirancang untuk diakses oleh semua mahasiswa, termasuk
              mereka dengan kebutuhan khusus. Beri tahu kami jika Anda
              menghadapi kendala aksesibilitas.
            </Text>
          </View>
          <Text style={styles.STTextBlack}>6. Pemeliharaan dan Pembaruan:</Text>
          <View style={styles.STGap}>
            <Text>&#x25CF;</Text>
            <Text style={styles.STTextNormal}>
              Untuk meningkatkan kualitas layanan, kami dapat melakukan
              pemeliharaan dan pembaruan. Pemberitahuan akan diberikan
              sebelumnya melalui platform komunikasi resmi.
            </Text>
          </View>
          <Text style={styles.STTextBlack}>
            7. Perubahan Syarat & Ketentuan:
          </Text>
          <View style={styles.STGap}>
            <Text>&#x25CF;</Text>
            <Text style={styles.STTextNormal}>
              Pihak pengembang berhak untuk mengubah syarat dan ketentuan ini.
              Perubahan akan diumumkan melalui platform resmi, dan pengguna
              diharapkan untuk memeriksa secara berkala.
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.STContentFooter}>
        <View style={styles.STContentCheck}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.STTextBlack}>
            Saya menyetujui seluruh syarat & ketentuan!
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.STBtnGetStart,
            {
              backgroundColor:
                toggleCheckBox !== true ? COLORS.grey : COLORS.primary,
            },
          ]}
          onPress={handleButtonStart}>
          <Text style={{fontSize: 20, color: COLORS.white}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  STContainer: {
    backgroundColor: COLORS.backgroundWhite,
    flex: 1,
  },
  STCard: {
    marginTop: 100,
    marginHorizontal: 20,
    padding: 20,
    height: 400,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.grey,
    elevation: 2,
  },
  STContentCard: {
    alignItems: 'center',
    marginBottom: 10,
  },
  STTextLarge: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '700',
  },
  STTextBlack: {
    color: COLORS.black,
    fontSize: 16,
    marginBottom: 5,
  },
  STTextNormal: {
    fontSize: 16,
    marginBottom: 5,
  },
  STGap: {
    flexDirection: 'row',
    gap: 8,
  },
  STContentFooter: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  STContentCheck: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  STBtnGetStart: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 2,
  },
});
export default AssesmentScreen;
