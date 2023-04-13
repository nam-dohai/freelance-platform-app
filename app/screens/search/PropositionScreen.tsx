import { StackScreenProps } from "@react-navigation/stack"
import { Button, Header, Screen, Text, TextField } from "app/components"
import { AuthenticatedNavigatorParamList, goBack, navigate } from "app/navigators"
import { colors, spacing } from "app/theme"
import React, { FC, useCallback } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"

export const PropositionScreen: FC<
  StackScreenProps<AuthenticatedNavigatorParamList, "Proposition">
> = function PropositionScreen({ route }) {
  const { params } = route
  const { project } = params

  const sendProposition = useCallback(() => {
    navigate("Search")
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

        <Text preset="bold" size="xl" style={{ marginTop: spacing.huge }}>
          Make a proposition
        </Text>
        <TextField inputWrapperStyle={$message} placeholder="Message" />
      </View>

      <View style={$footer}>
        <Button text="Send" style={$button} onPress={sendProposition} />
      </View>
    </Screen>
  )
}

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

const $message: ViewStyle = {
  height: 240,
  alignContent:"flex-start",
  justifyContent:"flex-start",
  marginTop: spacing.medium,
  backgroundColor: colors.palette.white,
}

const $footer: ViewStyle = {
  alignSelf: "center",
  marginBottom: spacing.medium,
  width: "100%",
}

const $button: ViewStyle = {
  marginHorizontal: 52,
  paddingVertical: spacing.medium,
  borderRadius: 30,
  justifyContent: "center",
}
