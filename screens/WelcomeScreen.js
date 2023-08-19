import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const [fethcedMessage, setFethcedMessage] = useState('');
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(
        `https://react-native-expenses-92ef6-default-rtdb.firebaseio.com/message.json?auth=${authCtx.token}`
      )
      .then((res) => setFethcedMessage(res.data));
  }, [authCtx.token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fethcedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
