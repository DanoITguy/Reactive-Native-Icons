import { ScrollView } from 'react-native';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;

    return (
        <ScrollView>
            {/* Content will be added later */}
        </ScrollView>
    );
};

export default CampsiteInfoScreen;




//import RenderCampsite from '../features/campsites/RenderCampsite';

//const CampsiteInfoScreen = ({ route }) => {
  //  const { campsite } = route.params;
    //return <RenderCampsite campsite={campsite} />;
//};

//export default CampsiteInfoScreen;