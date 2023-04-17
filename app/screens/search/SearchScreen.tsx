import { Header, Screen, Text, TextField } from "app/components"
import { RootTabScreenProps, navigate } from "app/navigators"
import { colors, spacing } from "app/theme"
import React, { FC, useCallback } from "react"
import { View, ViewStyle, Image, ImageStyle, TextStyle, TouchableOpacity } from "react-native"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import { observer } from "mobx-react-lite"

const activeProjects = [
  {
    id: "1",
    name: "Create an application",
    author: "Arlene Mckinney",
    description:
      "We are a young startup from Paris looking for a designer who can help us design a tech oriented application. We are open to proposals.",
    status: "Active",
    tags: ["UX/UI", "DESIGN", "FIGMA", "PHOTOSHOP"],
  },
  {
    id: "2",
    name: "Need a new logo",
    author: "Amel Rio",
    description:
      "I need a designer for my new website. The project is just at the beginning and I need wireframes before I start coding the website. I only want wireframes and I don’t want prototype or UI design.",
    status: "Pending",
    tags: [],
  },
]

export const SearchScreen: FC<RootTabScreenProps<"Search">> = observer(function SearchScreen(_props) {
  const project = activeProjects[0]

  const openProjectDetail = useCallback((project) => {
    navigate("ProjectDetail", { project })
  }, [])
  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      {/* <Header safeAreaEdges={[]} leftIconColor={colors.palette.grey} /> */}
      <View style={$bodyContainer}>
        <Text size="xxl" preset="bold">
          Search
        </Text>

        <TextField
          containerStyle={$inputSearchContainer}
          RightAccessory={() => (
            <AntDesign name="search1" style={$searchIcon} size={16} color={colors.palette.grey} />
          )}
        />

        <View style={[$row, { marginTop: spacing.extraLarge }]}>
          <Ionicons name="filter" size={24} color={colors.palette.grey} />
          <Text
            style={{ marginLeft: spacing.extraSmall, color: colors.palette.grey }}
            size="md"
            preset="subheading"
          >
            Filters
          </Text>
        </View>

        <TouchableOpacity style={$cardContainer} onPress={() => openProjectDetail(project)}>
          <View style={$authorContainer}>
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png",
              }}
              style={$authorImage}
            />
            <Text style={$author} size="xl" preset="subheading">
              {project.author}
            </Text>
          </View>
          <View style={$projectContainer}>
            <Text style={{ color: colors.palette.grey }}>Posted 3 days ago</Text>

            <Text size="xl" preset="bold" style={{ marginTop: spacing.large }}>
              {project.name}
            </Text>
            <Text size="lg" style={{ marginTop: spacing.large }} preset="subheading">
              Description
            </Text>
            <Text size="md" style={{ marginTop: spacing.extraSmall, color: colors.palette.grey }}>
              {project.description}
            </Text>

            <View style={$row}>
              <Text
                size="xs"
                style={{ marginTop: spacing.extraSmall, color: colors.palette.grey, flex: 1 }}
              >
                16 propositions
              </Text>
              <Text size="md" style={{ color: colors.palette.primary }} preset="bold">
                $ 2400
              </Text>
            </View>
            <View style={[$row, { marginTop: spacing.large }]}>
              {project.tags.length > 0 &&
                project.tags.map((tag, index) => {
                  return (
                    <View key={index} style={$tagContainer}>
                      <Text style={{ color: colors.palette.grey }}>{tag}</Text>
                    </View>
                  )
                })}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Screen>
  )
})

const $screenContainer: ViewStyle = {
  flex: 1,
}

const $bodyContainer: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.medium,
}

const $searchIcon: ViewStyle = {
  alignSelf: "center",
  marginRight: spacing.medium,
}

const $inputSearchContainer: ViewStyle = {
  marginTop: spacing.large,
}

const $row: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const $cardContainer: ViewStyle = {
  backgroundColor: colors.palette.white,
  marginTop: spacing.extraLarge,
  borderRadius: 10,
}

const $authorContainer: ViewStyle = {
  flexDirection: "row",
  backgroundColor: "rgba(239, 237, 240, 1)",
  paddingVertical: spacing.large,
  paddingHorizontal: spacing.medium,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
}

const $authorImage: ImageStyle = {
  width: 32,
  height: 32,
  borderRadius: 999,
}

const $author: TextStyle = {
  marginLeft: spacing.extraSmall,
}

const $projectContainer: ViewStyle = {
  padding: spacing.medium,
}

const $tagContainer: ViewStyle = {
  padding: spacing.tiny,
  borderWidth: 0.6,
  borderColor: "rgba(153, 135, 157, 1)",
  marginRight: spacing.extraSmall,
  borderRadius: 4,
}
