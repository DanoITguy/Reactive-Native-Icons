import { ScrollView, Text } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';
import { useState } from 'react';

const Mission = () => {
    return (
        <Card>
            <Card.Title>Our Mission</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 10 }}>
                We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
            </Text>
        </Card>
    );
};

const AboutScreen = () => {
    const [partners, setPartners] = useState(PARTNERS);

    return (
        <ScrollView>
            <Mission />
            <Card>
                <Card.Title>Community Partners</Card.Title>
                <Card.Divider />
                {partners.map((partner) => (
                    <ListItem key={partner.id}>
                        <Avatar
                            rounded
                            source={partner.image}
                        />
                        <ListItem.Content>
                            <ListItem.Title>{partner.name}</ListItem.Title>
                            <ListItem.Subtitle>
                                {partner.description}
                            </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </Card>
        </ScrollView>
    );
};

export default AboutScreen;


// import { createDrawerNavigator } from '@react-navigation/drawer';
// import HomeNavigator from './HomeNavigator';
// import DirectoryNavigator from './DirectoryNavigator';
// import HomeScreen from './HomeScreen';
// import AboutScreen from './AboutScreen';
// import CampsiteInfoScreen from './CampsiteInfoScreen';
// import DirectoryScreen from './DirectoryScreen';




//                 headerStyle: { backgroundColor: "#5637DD" },
//             }}
//         >
//             <Drawer.Screen
//                 name="HomeNav"
//                 component={HomeNavigator}
//                 options={{ title: "Home" }}
//             />
//             <Drawer.Screen
//                 name="DirectoryNav"
//                 component={DirectoryNavigator}
//                 options={{ title: "Campsite Directory" }}
//             />
//         </Drawer.Navigator>
//     );
//         </View>

//                 headerTintColor: "#fff",
//                 headerStyle: { backgroundColor: "#5637DD" },
//             }}   
//         >
//             <Stack.Screen
//                 name="About"
//                 component={AboutScreen}
//                 options={{ title: "About Us" }}
//             />
//             <Stack.Screen
//                 name="AnotherComponent"
//                 component={AnotherComponent}
//                 options={{ title: "Another Component" }}
//             />
//         </Stack.Navigator>
//                 headerTintColor: "#fff",
//                 headerStyle: { backgroundColor: "#5637DD" },
//             }}
//             <Stack.Screen
//                 name="About"
//                 component={AboutScreen}
//                 options={{ title: "About Us" }}
//             />
//             <Stack.Screen
//                 name="AnotherComponent"
//                 component={AnotherComponent}
//                 options={{ title: "Another Component" }}
//             />   
//             <Stack.Screen
//                 name="About"
//                 component={AboutScreen}
//                 options={{ title: "About Us" }}
//             />
//             <Stack.Screen
//                 name="AnotherComponent"
//                 component={AnotherComponent}
//                 options={{ title: "Another Component" }}
//             />
//                 headerStyle: { backgroundColor: "#5637DD" },
//             }}






//function AboutScreen() {
//    return <ScrollView> </ScrollView>;
//}

//function AnotherComponent() {
//  return <ScrollView> </ScrollView>;
//}

//export default AboutScreen;
//export { AnotherComponent };