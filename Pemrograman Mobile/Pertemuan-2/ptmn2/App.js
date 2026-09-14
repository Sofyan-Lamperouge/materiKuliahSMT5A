import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
        
        <Text style={styles.title}>Biodata Saya</Text>

        <View style={styles.line} />

        <View style={styles.info}>
          <Text style={styles.label}>Nama</Text>
          <Text style={styles.value}>: Mohammad Sofyan Nurseha </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>NIM</Text>
          <Text style={styles.value}>: 2488010031 </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Asal Sekolah</Text>
          <Text style={styles.value}>: SMAN 1 Dukupuntang</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Cita-cita</Text>
          <Text style={styles.value}>: Game Developer</Text>
        </View>

        <View style={styles.plan}>
          <Text style={styles.planTitle}>
            Rencana Mencapai Cita-cita
          </Text>

          <Text style={styles.planText}>
            Belajar dengan rajin dan banyak membuat projek game pribadi.
          </Text>
        </View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,

    // Shadow Android
    elevation: 8,

    // Shadow iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  line: {
    height: 1,
    backgroundColor: '#ddd',
    marginBottom: 20,
  },

  info: {
    flexDirection: 'row',
    marginBottom: 15,
  },

  label: {
    width: 120,
    fontSize: 16,
    fontWeight: 'bold',
  },

  value: {
    flex: 1,
    fontSize: 16,
  },

  plan: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#f5f7fa',
    borderRadius: 12,
  },

  planTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  planText: {
    fontSize: 15,
    lineHeight: 22,
  },
});
