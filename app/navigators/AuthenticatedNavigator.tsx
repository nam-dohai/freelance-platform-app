import React from "react"
import { View, ViewStyle } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ActiveProjectDetailScreen } from "app/screens/DemoShowroomScreen/ActiveProjectDetailScreen"
import RootTabNavigator from "./RootTabNavigator"

export type AuthenticatedNavigatorParamList = {
  RootTab: undefined
  ActiveProjectDetail: {
    project: {
      id: string
      name: string
      author: string
      description: string
      tags: Array<string>
      status: string
    }
  }
}

const Stack = createNativeStackNavigator<AuthenticatedNavigatorParamList>()

function AuthenticatedNavigator() {
  return (
    <View style={$container}>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="RootTab" component={RootTabNavigator} options={{ }} />
        <Stack.Screen name="ActiveProjectDetail" component={ActiveProjectDetailScreen} />
      </Stack.Navigator>
    </View>
  )
}

export default AuthenticatedNavigator

const $container: ViewStyle = {
  flex: 1,
}
