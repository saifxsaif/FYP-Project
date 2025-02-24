import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import UserProfilePage from "./components/UserProfilePage";
import HomePage from "./components/HomePage";
import PlansPage from "./components/PlansPage";
import LogsPage from "./components/LogsPage";
import ProfileDisplay from "./components/ProfileDisplay";
import SettingsPage from "./components/SettingsPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen 
          name="WelcomePage" 
          component={WelcomePage} 
          options={{ headerShown: false }} 
          />
        <Stack.Screen 
          name="LoginPage" 
          component={LoginPage} 
          options={{ headerShown: false }} 
          />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="UserProfilePage" 
            component={UserProfilePage} 
            options={{ headerShown: false }} 
            />
            <Stack.Screen 
            name="HomePage" 
            component={HomePage} 
            options={{ headerShown: false }} 
            />
            <Stack.Screen 
            name="LogsPage" 
            component={LogsPage} 
            options={{ headerShown: false }} 
            />
            <Stack.Screen 
            name="ProfileDisplay" 
            component={ProfileDisplay} 
            options={{ headerShown: false }} 
            />
            <Stack.Screen 
            name="PlansPage" 
            component={PlansPage} 
            options={{ headerShown: false }} 
            />
            <Stack.Screen 
            name="SettingsPage"
            component={SettingsPage} 
            options={{ headerShown: false }} 
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
