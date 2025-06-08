import CampsiteInfoScreen from './CampsiteInfoScreen';
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DirectoryScreen from './DirectoryScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';











//import AboutScreen from "./AboutScreen";
//import ContactScreen from "./ContactScreen";

//import { Platform, View } from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import HomeScreen from './HomeScreen';
//import DirectoryScreen from './DirectoryScreen';
//import AboutScreen from './AboutScreen';
//import ContactScreen from './ContactScreen';

//import { Platform, View } from 'react-native';
//import Constants from 'expo-constants';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import HomeScreen from './HomeScreen';
//import DirectoryScreen from './DirectoryScreen';
//import CampsiteInfoScreen from './CampsiteInfoScreen';
//import AboutScreen from './AboutScreen';
//import ContactScreen from './ContactScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
};

const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    );
};

const DirectoryNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Directory' screenOptions={screenOptions}>
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={{ title: 'Campsite Directory' }}
            />
            <Stack.Screen
                name='CampsiteInfo'
                component={CampsiteInfoScreen}
                options={({ route }) => ({
                    title: route.params.campsite.name
                })}
            />
        </Stack.Navigator>
    );
};

const AboutNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='About'
                component={AboutScreen}
            />
        </Stack.Navigator>
    );
};

const ContactNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                options={{ title: 'Contact Us' }}
            />
        </Stack.Navigator>
    );
};

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
            >
                <Drawer.Screen
                    name='HomeNav'
                    component={HomeNavigator}
                    options={{ 
                        title: 'Home',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name='DirectoryNav'
                    component={DirectoryNavigator}
                    options={{ 
                        title: 'Directory',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name='AboutNav'
                    component={AboutNavigator}
                    options={{ 
                        title: 'About Us',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name='ContactNav'
                    component={ContactNavigator}
                    options={{ 
                        title: 'Contact Us',
                        headerShown: false
                    }}
                />
            </Drawer.Navigator>
        </View>
    );
};

export default Main;
