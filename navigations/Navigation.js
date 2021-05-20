import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Restos from '../screens/Restos'
import Favorites from '../screens/Favorites'
import TopRestos from '../screens/TopRestos'
import Search from '../screens/Search'
import Account from '../screens/account/Account'
import RestosStack from './RestosStack';
import FavoritesStack from './FavoritesStack';
import TopRestosStack from './TopRestosStack';
import SearchStack from './SearchStack';
import AccountStacks from './AccountStack';
import { Icon } from 'react-native-elements'


const Tab = createBottomTabNavigator()
export default function Navigation() {

    const screenOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "restos":
                iconName ="compass-outline"   
                break;
            case "favorites":
                iconName ="heart-outline"   
                break;
            case "toprestos":
                iconName ="star-outline"   
                break;
            case "search":
                iconName ="magnify"   
                break;
            case "account":
                iconName ="home-outline"   
                break;
        }
        return(
            <Icon
                type="material-community"
                name={iconName}
                fontSize= "22"
                color={color}
            
            />
        )




    }
    return (



        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="restos"
                tabBarOptions={{
                    activeTintColor: "#FF0000"
                }}
                screenOptions= {({route}) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                })}
            >
                <Tab.Screen
                name="restos"
                component={RestosStack}
                options={{title: "Restos"}}

            />
                <Tab.Screen
                name="favorites"
                component={FavoritesStack}
                options={{title: "Favoritos"}}


            />
                <Tab.Screen
                name="toprestos"
                component={TopRestosStack}
                options={{title: "Top 5"}}
            />
                <Tab.Screen
                name="search"
                component={SearchStack}
                options={{title: "Buscar"}}
            />
                <Tab.Screen
                name="account"
                component={AccountStacks}
                options={{title: "Cuenta"}}
            />
            </Tab.Navigator>
        </NavigationContainer>
        
    )
}

