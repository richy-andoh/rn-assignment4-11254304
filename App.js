import { Text, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const App = () =>  {
  const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen}
             options={{ headerShown: false }}
            />
            <Stack.Screen name='Home' component={HomeScreen} 
             options={{
              headerShown: false
             }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    )
  
}

export default App;
const styles = StyleSheet.create({
  
})
