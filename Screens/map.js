import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';

const MapScreen = ({ navigation }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch the locations from your server or database
    // and set them to the state variable
    const fetchedLocations = [
      { id: 1, name: 'New York', latitude: 40.7128, longitude: -74.006 },
      { id: 2, name: 'London', latitude: 51.5074, longitude: -0.1278 },
      { id: 3, name: 'Tokyo', latitude: 35.6895, longitude: 139.6917 },
    ];
    setLocations(fetchedLocations);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.headerIconContainer}>
          <AntDesign name="menu-unfold" size={24} color="#fff" />
          <Text style={styles.headerIconText}>Menu</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Map</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Missions')} style={styles.headerIconContainer}>
          <Image source={require('../assets/images/missions.png')} style={styles.headerIcon} />
          <Text style={styles.headerIconText}>Missions</Text>
        </TouchableOpacity>
      </View>
      <MapView style={styles.map} initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        {locations.map(location => (
          <Marker
            key={location.id}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={location.name}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#8DBF80',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 80,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerIconText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 80,
  },
});

export default MapScreen;