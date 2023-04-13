import React, { FC } from "react"
import {
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { Header, Screen, Text } from "../../components"
import { colors, spacing } from "../../theme"
import { RootTabScreenProps,  } from "app/navigators"
import ActiveProject from "./components/ActiveProject"

const activeProjects = [
  {
    id: "1",
    name: "Wireframes",
    author: "Francisco Fisher",
    description: "I need a designer for my new website. The project is just at the beginning and I need wireframes before I start coding the website. I only want wireframes and I don’t want prototype or UI design.",
    status: "Active",
    tags: ["WIREFRAMES"],
  },
  {
    id: "2",
    name: "Need a new logo",
    author: "Amel Rio",
    description: "I need a designer for my new website. The project is just at the beginning and I need wireframes before I start coding the website. I only want wireframes and I don’t want prototype or UI design.",
    status: "Pending",
    tags: [],
  },
]

export const HomeScreen: FC<RootTabScreenProps<"Home">> =
  function HomeScreen(_props) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      <Header safeAreaEdges={[]} leftIconColor={colors.palette.grey}/>
        <View style={$bodyContainer}>
          <Text size="xxl" preset="bold">
            Feed
          </Text>

          <Text size="xl" preset="bold">
            Resume
          </Text>

          <View style={$activeProjectContainer}>
            <Text size="xl" preset="bold" style={$heading}>
              Active Projects
            </Text>
            <TouchableOpacity style={$viewAllContainer}>
              <Text size="xs" preset="formLabel">View all</Text>
            </TouchableOpacity>
          </View>

          {activeProjects.map((item) => <ActiveProject project={item} key={item.id} />)}
        </View>
      </Screen>
    )
  }

const $screenContainer: ViewStyle = {
  flex: 1,
}

const $bodyContainer: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.medium,
}

const $activeProjectContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap-reverse",
}

const $heading: ViewStyle = {
  flex: 1,
}

const $viewAllContainer: ViewStyle = {
  alignSelf: "flex-end",
  paddingHorizontal: spacing.small,
  paddingVertical: spacing.tiny,
  backgroundColor: colors.palette.pink,
  borderRadius: 6,
}