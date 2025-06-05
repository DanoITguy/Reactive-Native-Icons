import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

const FeaturedItem = ({ item }) => {
    if (item) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={item.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{item.description}</Text>
            </Card>
        );
    }
    return <View />;
};

const HomeScreen = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);
    const [promotions, setPromotions] = useState(PROMOTIONS);
    const [partners, setPartners] = useState(PARTNERS);

    const featCampsite = campsites.find((item) => item.featured);
    const featPromotion = promotions.find((item) => item.featured);
    const featPartner = partners.find((item) => item.featured);

    return (
        <ScrollView>
            <FeaturedItem item={featCampsite} />
            <FeaturedItem item={featPromotion} />
            <FeaturedItem item={featPartner} />
        </ScrollView>
    );
};

export default HomeScreen;

// This code defines a HomeScreen component that displays featured items from campsites, promotions, and partners.
// It uses the FeaturedItem component to render each featured item in a card format.
// The component uses React's useState hook to manage the state of the items, and it retrieves the featured items from the respective arrays.
// The HomeScreen component is exported as the default export of the module.
// The FeaturedItem component is responsible for rendering each featured item, including its image, name, and description.
// The ScrollView component allows for vertical scrolling of the content, making it suitable for displaying multiple featured items.
// The code uses the react-native-elements library for styling and layout, particularly the Card component for displaying featured items.
// The FeaturedItem component checks if the item exists before rendering it, ensuring that no empty cards are displayed.
// The styles applied to the text and card components ensure that the content is visually appealing and easy to read.
// The HomeScreen component is a functional component that leverages React hooks for state management, making it efficient and easy to maintain.
// The code is structured to be modular, allowing for easy updates and additions to the featured items in the future.
// The use of the find method allows for quick retrieval of the featured items from the arrays, ensuring that only one featured item is displayed for each category.
// The HomeScreen component can be easily integrated into a larger application, providing a clean and organized way to showcase featured content.       