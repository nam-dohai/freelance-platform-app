import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Header, Screen, Text } from "app/components"
import { colors, spacing } from "app/theme"
import { AuthenticatedNavigatorParamList, goBack } from "app/navigators"
import { StackScreenProps } from "@react-navigation/stack"

export const ActiveProjectDetailScreen: FC<
  StackScreenProps<AuthenticatedNavigatorParamList, "ActiveProjectDetail">
> = function ActiveProjectDetailScreen({ route }) {
  const { params } = route
  const { project } = params

  const tags = project.tags
  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      <Header safeAreaEdges={[]} leftIcon="back" leftIconColor={colors.palette.grey} onLeftPress={goBack}/>
      <View style={$deadlineBanner}>
        <Text size="md" style={$deadlineText}>
          You are in charge of this project
        </Text>
        <Text size="xxs" style={$deadlineText}>
          Deadline 28/03/2020
        </Text>
      </View>

      <View style={$bodyContainer}>
        <View style={$row}>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png",
            }}
            style={$authorImage}
          />
          <Text style={$author} size="xl" preset="bold">
            {project.author}
          </Text>
        </View>
        <Text style={{ marginTop: spacing.extraLarge, color: colors.palette.grey }}>
          Posted 8 days ago
        </Text>
        <Text style={$title} preset="bold" size="xl">
          {project.name}
        </Text>
        <Text style={{ marginTop: spacing.medium, color: colors.palette.grey }}>
          {project.description}
        </Text>

        <View style={[$row, { marginTop: spacing.extraLarge }]}>
          {tags.length > 0 &&
            tags.map((tag, index) => {
              return (
                <View key={index} style={$tagContainer}>
                  <Text style={{ color: colors.palette.grey }}>{tag}</Text>
                </View>
              )
            })}
            <View style={{flex: 1}}>
              <Text style={$price} size="md">$ 600</Text>
            </View>
        </View>
      </View>
    </Screen>
  )
}

const $screenContainer: ViewStyle = {
  flex: 1,
}

const $deadlineBanner: ViewStyle = {
  justifyContent: "center",
  paddingVertical: spacing.medium,
  alignItems: "center",
  backgroundColor: colors.palette.primary,
}

const $deadlineText: TextStyle = {
  color: colors.palette.white,
}

const $bodyContainer: ViewStyle = {
  padding: spacing.medium,
}

const $row: ViewStyle = {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
}

const $authorImage: ImageStyle = {
  width: 48,
  height: 48,
  borderRadius: 999,
}

const $author: TextStyle = {
  marginLeft: spacing.extraSmall,
}

const $title: TextStyle = {
  marginTop: spacing.tiny,
}

const $tagContainer: ViewStyle = {
  padding: spacing.tiny,
  borderWidth: 1.5,
  borderColor: "rgba(153, 135, 157, 1)",
  borderRadius: 4,
}

const $price: TextStyle = {
  alignSelf: "flex-end",
  color: colors.palette.primary,
}
