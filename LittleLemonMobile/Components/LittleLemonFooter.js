import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={footerStyles.container}>
      <Text 
        style={footerStyles.text}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#ee9972',
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic'
  }
})