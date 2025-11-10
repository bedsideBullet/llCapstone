import { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Keyboard, Platform } from 'react-native';
import LittleLemonHeader from '../Components/LittleLemonHeader';

const Onboarding = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const isButtonDisabled = firstName.trim() === '' || email.trim() === '';


 useEffect(() => {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible(true);
        },
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false);
        },
      );

      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }

    return () => {}; 
  }, []);

  const formJustifyStyle = {
    justifyContent: isKeyboardVisible ? 'flex-start' : 'center',
  };

  return (
    <View style={styles.container}>
      <LittleLemonHeader />

      <View style={[styles.formContainer, formJustifyStyle]}>
        <Text style={styles.title}>Let us get to know you</Text>

        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Enter your first name"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          disabled={isButtonDisabled}
          style={styles.button}
          onPress={() => {
            navigation.navigate("Welcome")
          }
          }>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdbdbdff',
  },
  formContainer: {
    flex: 1, 
    backgroundColor: '#bdbdbdff',
    padding: 24,
    
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    height: 44,
    borderColor: '#B0B0B0', 
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 24, 
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: '#edefee', 
    paddingHorizontal: 24,
    paddingVertical: 20,
    alignItems: 'flex-end', 
  },
  button: {
    backgroundColor: '#bdbdbdff', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
});

export default Onboarding;