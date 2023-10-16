import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Course from './components/Course';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header1}>Courses</Text>
      <View style={styles.tilesContainer}>
        <Course title="Development1" subtitle="YP0683" />
        <Course title="Design 3" subtitle="YP1234" />
        <Course title="Communicatie 3" subtitle="YP9988" />
        <Course title="Ethiek" subtitle="YP3256" />
        <Course title="Ondernemerschap" subtitle="YP2233" />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 32,
    fontWeight: '800',
    margin: 12,
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 56,
  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'space-evenly',

  }
});
