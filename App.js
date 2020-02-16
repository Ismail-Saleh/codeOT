import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Article from './src/screens/Article';
import Comments from './src/screens/Comments'


const AppNavigator = createStackNavigator({
  Article: {
      screen: Article,
      navigationOptions: {
        headerShown: false
    } 
  },
  Comments: {
    screen: Comments,
    navigationOptions: {
      headerShown: false
  } 
}
});

export default createAppContainer(AppNavigator);