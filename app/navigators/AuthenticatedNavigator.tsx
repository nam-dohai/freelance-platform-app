import React from "react"
import { View, ViewStyle } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ActiveProjectDetailScreen } from "app/screens/home/ActiveProjectDetailScreen"
import { ProjectDetailScreen } from "app/screens/search/ProjectDetailScreen"
import RootTabNavigator from "./RootTabNavigator"
import { PropositionScreen } from "app/screens/search/PropositionScreen"
import { ChatScreen } from "app/screens/chat/ChatScreen"
import { AllReviewScreen } from "app/screens/profile/AllReviewScreen"
import { observer } from "mobx-react-lite"
import { Project } from "app/interfaces/project"

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
    project: Project
  }
  Proposition: {
    project: Project
    type: "propose" | "offer"
  }
  Chat: {
    conversation: any
  }
  AllReview: {
    reviews: Array<{
      id: string
      rate: number
      author: {
        name: string
      }
      comment: string
    }>
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
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="AllReview" component={AllReviewScreen} />
      </Stack.Navigator>
    </View>
  )
}

export default observer(AuthenticatedNavigator);

const $container: ViewStyle = {
  flex: 1,
}
