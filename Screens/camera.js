import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Platform,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

const CameraScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'This app needs access to your camera.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission granted');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const handleRecordButton = async () => {
    if (cameraRef.current) {
      try {
        setIsRecording(true);
        const { uri } = await cameraRef.current.recordAsync();

        // Do something with the recorded video uri, e.g. upload to server
      } catch (error) {
        console.log(error);
      } finally {
        setIsRecording(false);
      }
    }
  };

  const handleStopRecordingButton = () => {
    if (cameraRef.current) {
      setIsRecording(false);
      cameraRef.current.stopRecording();
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={cameraRef} />
      {isRecording ? (
        <TouchableOpacity style={styles.stopRecordingButton} onPress={handleStopRecordingButton}>
          <Ionicons name="stop" size={32} color="#FFFFFF" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.recordButton} onPress={handleRecordButton}>
          <Ionicons name="ios-radio-button-on" size={72} color="#FFFFFF" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  recordButton: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
  },
  stopRecordingButton: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    backgroundColor: '#FF0000',
    borderRadius: 50,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CameraScreen;
