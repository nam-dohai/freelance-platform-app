import { Header, Screen, Text, TextField } from "app/components"
import { RootTabScreenProps, navigate } from "app/navigators"
import { colors, spacing } from "app/theme"
import React, { FC, useCallback, useState, useEffect } from "react"
import {
  View,
  ViewStyle,
  Image,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  FlatList,
} from "react-native"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import { observer } from "mobx-react-lite"
import { Project } from "app/interfaces/project"
import { api } from "app/services/api"

export const SearchScreen: FC<RootTabScreenProps<"Search">> = observer(function SearchScreen(
  _props,
) {
  const [projects, setProjects] = useState<Array<Project>>()

  useEffect(() => {
    const fetchAllProjects = async () => {
      const res = await api.getAllProjects()
      if (res.kind === "ok") {
        const allProjects = res.projects
        setProjects(allProjects)
      } else {
        console.log("Cannot get projects")
      }
    }
    fetchAllProjects()
  }, [])

  const openProjectDetail = useCallback((project: Project) => {
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
        {projects?.length && projects?.length > 0 && (
          <FlatList
            data={projects}
            renderItem={({ item }) => {
              const project = item
              
              return (
                <TouchableOpacity style={$cardContainer} onPress={() => openProjectDetail(project)}>
                  <View style={$authorContainer}>
                    <Image
                      source={{
                        uri: project.author.image_url,
                      }}
                      style={$authorImage}
                    />
                    <Text style={$author} size="xl" preset="subheading">
                      {project.author.name}
                    </Text>
                  </View>
                  <View style={$projectContainer}>
                    <Text style={{ color: colors.palette.grey }}>
                      Posted at {new Date(project.createdAt).toTimeString()}
                    </Text>

                    <Text size="xl" preset="bold" style={{ marginTop: spacing.large }}>
                      {project.name}
                    </Text>
                    <Text size="lg" style={{ marginTop: spacing.large }} preset="subheading">
                      Description
                    </Text>
                    <Text
                      size="md"
                      style={{ marginTop: spacing.extraSmall, color: colors.palette.grey }}
                    >
                      {project.description}
                    </Text>

                    <View style={$row}>
                      <Text
                        size="xs"
                        style={{
                          marginTop: spacing.extraSmall,
                          color: colors.palette.grey,
                          flex: 1,
                        }}
                      >
                        {project.propositions.length} propositions - {project.offers.length} offers
                      </Text>
                      <Text size="md" style={{ color: colors.palette.primary }} preset="bold">
                        {project.price}
                      </Text>
                    </View>
                    <View style={[$row, { marginTop: spacing.large }]}>
                      {project.project_categories.length > 0 &&
                        project.project_categories.map((projectCategories, index) => {
                          return (
                            <View key={index} style={$tagContainer}>
                              <Text style={{ color: colors.palette.grey }}>{projectCategories.name}</Text>
                            </View>
                          )
                        })}
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item) => item.id}
          />
        )}
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
