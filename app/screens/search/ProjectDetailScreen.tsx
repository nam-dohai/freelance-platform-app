import { StackScreenProps } from "@react-navigation/stack"
import { Button, Header, Screen, Text } from "app/components"
import { AuthenticatedNavigatorParamList, goBack, navigate } from "app/navigators"
import { colors, spacing } from "app/theme"
import { observer } from "mobx-react-lite"
import React, { FC, useCallback } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"

export const ProjectDetailScreen: FC<
  StackScreenProps<AuthenticatedNavigatorParamList, "ProjectDetail">
> = observer(function ProjectDetailScreen({ route }) {
  const { params } = route
  const { project } = params

  const makeAProposition = useCallback(() => {
    navigate("Proposition", {
      project,
    })
  }, [])

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      <Header
        safeAreaEdges={[]}
        leftIcon="back"
        leftIconColor={colors.palette.grey}
        onLeftPress={goBack}
      />
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
      <View style={$footer}>
        <Button text="Make a proposition" style={$button} onPress={makeAProposition} />
        <Button
          text="Make a order"
          style={[$button, { marginTop: spacing.extraSmall }]}
          preset="reversed"
          onPress={makeAProposition}
        />
      </View>
    </Screen>
  )
})

const $screenContainer: ViewStyle = {
  flex: 1,
}

const $bodyContainer: ViewStyle = {
  flex: 1,
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
  borderWidth: 0.6,
  borderColor: "rgba(153, 135, 157, 1)",
  marginRight: spacing.extraSmall,
  borderRadius: 4,
}

const $footer: ViewStyle = {
  alignSelf: "center",
  marginBottom: spacing.medium,
  width: "100%",
}

const $button: ViewStyle = {
  marginHorizontal: 52,
  paddingVertical: spacing.medium,
  justifyContent: "center",
  borderRadius: 30,
}
