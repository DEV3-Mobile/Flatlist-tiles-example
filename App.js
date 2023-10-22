import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';

import Course from './components/Course';

const courses = [
  {
    title: 'Development 1',
    code: 'YP0683'
  }, {
    title: 'Design 3',
    code: 'YP1234'
  }, {
    title: 'Communicatie 3',
    code: 'YP9988',
  }, {
    title: 'Ethiek',
    code: 'YP3256'
  }, {
    title: 'Ondernemerschap',
    code: 'YP2233'
  }

];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Courses</Text>
      <View style={styles.tilesContainer}>
        <FlatList style={styles.tile} data={courses}
          renderItem={(itemData) => < Course title={itemData.item.title} subtitle={itemData.item.subtitle} />
          }
        />
      </View>
    </View>
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
