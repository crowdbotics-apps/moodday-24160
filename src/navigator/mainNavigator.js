import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps198752Navigator from '../features/Maps198752/navigator';
import Additem198751Navigator from '../features/Additem198751/navigator';
import Maps198747Navigator from '../features/Maps198747/navigator';
import UserProfile198743Navigator from '../features/UserProfile198743/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps198752: { screen: Maps198752Navigator },
Additem198751: { screen: Additem198751Navigator },
Maps198747: { screen: Maps198747Navigator },
UserProfile198743: { screen: UserProfile198743Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
