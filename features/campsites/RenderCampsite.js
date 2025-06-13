import { FlatList, StyleSheet, Text, View } from 'react-native';
import RenderCampsite from './RenderCampsite';  // Make sure this path is correct
import { COMMENTS } from '../shared/comments';
import { useState } from 'react';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    const [comments, setComments] = useState(COMMENTS);
    const [favorite, setFavorite] = useState(false);

    const renderCommentItem = ({ item }) => {
        return (
            <View style={styles.commentItem}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>
                    {`-- ${item.author}, ${item.date}`}
                </Text>
            </View>
        );
    };

    return (
        <FlatList
            data={comments.filter(
                (comment) => comment.campsiteId === campsite.id
            )}
            renderItem={renderCommentItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ marginHorizontal: 20, paddingVertical: 20 }}
            ListHeaderComponent={
                <>
                    <RenderCampsite 
                        campsite={campsite}
                        isFavorite={favorite}
                        markFavorite={() => setFavorite(true)}
                    />
                    <Text style={styles.commentsTitle}>Comments</Text>
                </>
            }
        />
    );
};

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        paddingTop: 30
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    }
});

export default CampsiteInfoScreen;

// import { StyleSheet, Text, View } from 'react-native';
// import { Card, Icon } from 'react-native-elements';

// const RenderCampsite = ({ campsite }) => {
//     return (
//         <Card containerStyle={styles.cardContainer}>
//             <Card.Image source={campsite.image}>
//                 <View style={{ justifyContent: 'center', flex: 1 }}>
//                     <Text
//                         style={{
//                             color: 'white',
//                             textAlign: 'center',
//                             fontSize: 20
//                         }}
//                     >
//                         {campsite.name}
//                     </Text>
//                 </View>
//             </Card.Image>
//             <Text style={{ margin: 20 }}>{campsite.description}</Text>
//             <Icon
//                 name='heart-o'
//                 type='font-awesome'
//                 color='#f50'
//                 raised
//                 reverse
//             />
//         </Card>
//     );
// };

// const styles = StyleSheet.create({
//     cardContainer: {
//         padding: 0,
//         margin: 0,
//         marginBottom: 20
//     }
// });

// export default RenderCampsite;









// import { Text, View } from 'react-native';
// import { Card } from 'react-native-elements';

// const RenderCampsite = ({ campsite }) => {
//     if (campsite) {
//         return (
//             <Card containerStyle={{ padding: 0 }}>
//                 <Card.Image source={campsite.image}>
//                     <View style={{ justifyContent: 'center', flex: 1 }}>
//                         <Text
//                             style={{
//                                 color: 'white',
//                                 textAlign: 'center',
//                                 fontSize: 20
//                             }}
//                         >
//                             {campsite.name}
//                         </Text>
//                     </View>
//                 </Card.Image>
//                 <Text style={{ margin: 20 }}>{campsite.description}</Text>
//             </Card>
//         );
//     }
//     return <View />;
// };

// export default RenderCampsite;

// // Usage example: