import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider />
                <Text>1 Nucamp Way</Text>
                <Text>Seattle, WA 98001</Text>
                <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
                <Text>Phone: 1-206-555-1234</Text>
                <Text>Email: campsites@nucamp.co</Text>
            </Card>
        </ScrollView>
    );
};

export default ContactScreen;




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






//                 headerTintColor: "#fff",
//function AboutScreen() {
//    return <ScrollView> </ScrollView>;
//}

//function AnotherComponent() {
//    return <ScrollView> </ScrollView>;
//}

//export default AboutScreen;
//export { AnotherComponent };