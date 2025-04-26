import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Hello from './src/components/Hello'

//JSX.ElementはReactの型
const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Hello bang={true} style={{fontSize: 11 }}>World</Hello>
      <Text>Open up App.tsx to start working on your app!！！！</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

//Appをexportする
export default App