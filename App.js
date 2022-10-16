import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header1}>Courses</Text>
      <View style={styles.tilesContainer}>
        <View style={styles.tile}>
          <Image
            style={styles.tileImage}
            source={require('./assets/courseImages/macbook-code.jpg')}
          />
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Development 1 (YP0584 | 2022)</Text>
            <Text style={styles.tileText}>Development 1 (YP0584 | 2022)</Text>
          </View>
        </View>
        <View style={styles.tile}>
          <Image
            style={styles.tileImage}
            source={require('./assets/courseImages/sensors.jpg')}
          />
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Development 2 (YP0859 | 2022)</Text>
            <Text style={styles.tileText}>Development 2 (YP0859 | 2022)</Text>
          </View>
        </View>
        <View style={styles.tile}>
          <Image
            style={styles.tileImage}
            source={require('./assets/courseImages/phone-desk.jpg')}
          />
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Development 3 (YP0833 | 2022)</Text>
            <Text style={styles.tileText}>Development 3 (YP0833 | 2022)</Text>
          </View>
        </View>
        <View style={styles.tile}>
          <Image
            style={styles.tileImage}
            source={require('./assets/courseImages/php.jpg')}
          />
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Development 4 (YP0860 | 2022)</Text>
            <Text style={styles.tileText}>Development 4 (YP0860 | 2022)</Text>
          </View>
        </View>
        <View style={styles.tile}>
          <Image
            style={styles.tileImage}
            source={require('./assets/courseImages/idea.jpg')}
          />
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Lab 1 (YP0584 | 2022)</Text>
            <Text style={styles.tileText}>Lab 1 (YP0584 | 2022)</Text>
          </View>
        </View>
        <View style={styles.tile}>
          <Image
            style={styles.tileImage}
            source={require('./assets/courseImages/ideas.jpg')}
          />
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Lab 2 (YP0584 | 2022)</Text>
            <Text style={styles.tileText}>Lab 2 (YP0584 | 2022)</Text>
          </View>
        </View>
        <View style={styles.tile}>
          <Image
            style={styles.tileImage}
            source={require('./assets/courseImages/macbook-code.jpg')}
          />
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Lab 3 (YP0584 | 2022)</Text>
            <Text style={styles.tileText}>Lab 3 (YP0584 | 2022)</Text>
          </View>
        </View>
        <View style={styles.tile}>
          <Image
            style={styles.tileImage}
            source={require('./assets/courseImages/sketch.jpg')}
          />
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Creatie 2 (YP0584 | 2022)</Text>
            <Text style={styles.tileText}>Creatie 2 (YP0584 | 2022)</Text>
          </View>
        </View>
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

  },
  tile: {
    flexBasis: '46%',//200
    borderRadius: 5,
    borderColor: '#B4B8DA',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: '2%',

  },
  tileImage: {
    width: '100%',
    maxHeight: 110,
    overflow: 'hidden',
  },
  tileDetail: {
    padding: 10,
  },
  tileHeader: {
    fontSize: 22,
    fontWeight: '600',
  },
  tileText: {
    fontSize: 16,
    fontWeight: '500',
  }
});
