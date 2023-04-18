import { StackScreenProps } from "@react-navigation/stack"
import { Button, Header, Screen, Text, TextField } from "app/components"
import { AuthenticatedNavigatorParamList, goBack, navigate } from "app/navigators"
import { colors, spacing } from "app/theme"
import { observer } from "mobx-react-lite"
import React, { FC, useCallback } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"

export const PropositionScreen: FC<
  StackScreenProps<AuthenticatedNavigatorParamList, "Proposition">
> = observer(function PropositionScreen({ route }) {
  const { params } = route
  const { project, type } = params

  const sendProposition = useCallback(() => {
    //TODO: Make Proposition API
    navigate("Search")
  }, [])

  const sendOffer = useCallback(() => {
    //TODO: Make Offer API
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
              uri: project.author.image_url,
            }}
            style={$authorImage}
          />
          <Text style={$author} size="xl" preset="bold">
            {project.author.name}
          </Text>
        </View>

        <Text preset="bold" size="xl" style={{ marginTop: spacing.huge }}>
          Make a {type === "propose" ? "Proposition" : "Offer"}
        </Text>
        <TextField inputWrapperStyle={$message} placeholder="Message" />
      </View>

      <View style={$footer}>
        <Button text="Send" style={$button} onPress={type === "propose" ? sendProposition : sendOffer} />
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
