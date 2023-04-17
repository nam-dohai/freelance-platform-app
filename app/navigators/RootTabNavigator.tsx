import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { colors, spacing, typography } from 'app/theme'
import React from 'react'
import { TextStyle, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AppStackParamList, AppStackScreenProps } from './AppNavigator'
import { HomeScreen } from 'app/screens/home'
import { SearchScreen } from 'app/screens/search'
import { Octicons, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { MessagesScreen } from 'app/screens/chat'
import { ProfileScreen } from 'app/screens/profile'
import { observer } from 'mobx-react-lite'


export type RootTabParamList = {
  Home: undefined
  Search: { queryIndex?: string; itemIndex?: string }
  Conversation: undefined
  Profile: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type RootTabScreenProps<T extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<RootTabParamList>()

function RootTabNavigator() {

  const { bottom } = useSafeAreaInsets()
  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 50 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Octicons name="apps" color={focused ? colors.tint : 'rgba(147, 120, 255, 0.3)' } size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Octicons name="search" color={focused ? colors.tint : 'rgba(147, 120, 255, 0.3)' } size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Conversation"
        component={MessagesScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name="chatbox-outline" color={focused ? colors.tint : 'rgba(147, 120, 255, 0.3)' } size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="user-circle" color={focused ? colors.tint : 'rgba(147, 120, 255, 0.3)' } size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default observer(RootTabNavigator)

const $tabBar: ViewStyle = {
  backgroundColor: colors.palette.white,
  borderTopColor: colors.transparent,
  borderColor: "#FBEEFF",
  borderWidth: 0.6,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.medium,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}