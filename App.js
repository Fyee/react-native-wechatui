import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AuthLoadingScreen from './AuthLoadingScreen'
import HomeStack from './AppNavigator'
import Login from './js/pages/auth'
const AuthStack = createStackNavigator(
  {
    Login,
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoadingScreen,
    HomeStack,
    AuthStack
  },
  {
    initialRouteName: 'AuthLoadingScreen',
  }
));