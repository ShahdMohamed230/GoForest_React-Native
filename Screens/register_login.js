import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';


const RegisterLoginScreen = ({ navigation }) => {
const [email, setEmail] = useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [isSignUp, setIsSignUp] = useState(true);

const handleSignUp = async () => {
  navigation.navigate('main');
};

const handleLogin = () => {
  navigation.navigate('main');
};

const handleForgotPassword = () => {
  navigation.navigate('main');
};

const handleFacebookLogin = () => {
  navigation.navigate('main');
};

const handleGoogleLogin = () => {
  navigation.navigate('main');
};

const handleTwitterLogin = () => {
  navigation.navigate('main');
};

const handleAppleLogin = () => {
  navigation.navigate('main');
};

return (
<View style={styles.container}>
<Image source={require('../assets/icons/leaf.png')} style={styles.logo} />
<Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Log In'}</Text>
<TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
<TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} value={username} />
<TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
{isSignUp && (
<TextInput style={styles.input} placeholder="Phone Number" onChangeText={setPhoneNumber} value={phoneNumber} />
)}
{isSignUp ? (
<TouchableOpacity style={styles.button} onPress={handleSignUp}>
<Text style={styles.buttonText}>Sign Up</Text>
</TouchableOpacity>
) : (
<TouchableOpacity style={styles.button} onPress={handleLogin}>
<Text style={styles.buttonText}>Log In</Text>
</TouchableOpacity>
)}
<View style={styles.socialLoginContainer}>
<Text style={styles.socialLoginText}>Or log in with:</Text>
<View style={styles.socialButtonsContainer}>
<TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
<Image source={require('../assets/icons/facebook.png')} style={styles.socialButtonIcon} />
</TouchableOpacity>
<TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
<Image source={require('../assets/icons/google.png')} style={styles.socialButtonIcon} />
</TouchableOpacity>
<TouchableOpacity style={styles.socialButton} onPress={handleTwitterLogin}>
<Image source={require('../assets/icons/twitter.png')} style={styles.socialButtonIcon} />
</TouchableOpacity>
<TouchableOpacity style={styles.socialButton} onPress={handleAppleLogin}>
<Image source={require('../assets/icons/apple.png')} style={styles.socialButtonIcon} />
</TouchableOpacity>
</View>
</View>
<TouchableOpacity style={styles.switchButton} onPress={() => setIsSignUp(!isSignUp)}>
<Text style={styles.switchButtonText}>
{isSignUp ? 'Already have an account? Log In' : 'Need to sign up? Sign Up'}
</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword}>
<Text style={styles.forgotPasswordButtonText}>Forgot my password</Text>
</TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
paddingHorizontal: 20,
backgroundColor: '#E6F4EA',
},
logo: {
height: 100,
width: 100,
marginBottom: 20,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
color: '#4A4A4A',
},
input: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 4,
padding: 10,
marginBottom: 10,
width: '100%',
backgroundColor: '#fff',
},
button: {backgroundColor: '#59B58D',
borderRadius: 4,
paddingVertical: 10,
paddingHorizontal: 20,
marginTop: 10,
},
buttonText: {
color: '#fff',
fontWeight: 'bold',
fontSize: 16,
textAlign: 'center',
},
socialLoginContainer: {
marginTop: 20,
alignItems: 'center',
},
socialLoginText: {
marginVertical: 10,
color: '#4A4A4A',
},
socialButtonsContainer: {
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
},
socialButton: {
backgroundColor: '#fff',
borderRadius: 50,
marginRight: 10,
padding: 10,
},
socialButtonIcon: {
height: 20,
width: 20,
resizeMode: 'contain',
},
switchButton: {
marginTop: 20,
},
switchButtonText: {
color: '#4A4A4A',
},
forgotPasswordButton: {
marginTop: 10,
},
forgotPasswordButtonText: {
color: '#4A4A4A',
},
});

export default RegisterLoginScreen;