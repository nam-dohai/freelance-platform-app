import React from "react"
import { View, ViewStyle } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ActiveProjectDetailScreen } from "app/screens/home/ActiveProjectDetailScreen"
import { ProjectDetailScreen } from "app/screens/search/ProjectDetailScreen"
import RootTabNavigator from "./RootTabNavigator"
import { PropositionScreen } from "app/screens/search/PropositionScreen"

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
  ProjectDetail: {
    project: {
      id: string
      name: string
      author: string
      description: string
      tags: Array<string>
      status: string
    }
  }
  Proposition: {
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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RootTab" component={RootTabNavigator} />
        <Stack.Screen name="ActiveProjectDetail" component={ActiveProjectDetailScreen} />
        <Stack.Screen name="ProjectDetail" component={ProjectDetailScreen} />
        <Stack.Screen name="Proposition" component={PropositionScreen} />
      </Stack.Navigator>
    </View>
  )
}

export default AuthenticatedNavigator

const $container: ViewStyle = {
  flex: 1,
}
