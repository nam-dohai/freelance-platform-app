import { Screen, Text } from "app/components"
import { RootTabScreenProps, navigate } from "app/navigators"
import { colors, spacing } from "app/theme"
import React, { FC, useCallback } from "react"
import { FlatList, Image, ImageStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { observer } from "mobx-react-lite"

const conversations = [
  {
    id: "1",
    author: {
      image:
        "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png",
      name: "Alex Marchal",
    },
    lastMessage: "I have some questions about...",
  },
  {
    id: "2",
    author: {
      image:
        "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png",
      name: "Norma Wilson",
    },
    lastMessage: "http://www.warephase.com",
  },
  {
    id: "3",
    author: {
      image:
        "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png",
      name: "Morris Murphy",
    },
    lastMessage: "Hope it will work in the week...",
  },
]

export const MessagesScreen: FC<RootTabScreenProps<"Conversation">> = observer(function MessagesScreen(_prop) {
  const openChat = useCallback(() => {
    navigate("Chat")
  }, [])
  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      {/* <Header safeAreaEdges={[]} leftIconColor={colors.palette.grey}/> */}
      <View style={$bodyContainer}>
        <Text size="xxl" preset="bold">
          Messages
        </Text>
        <FlatList
          style={{ marginTop: spacing.medium }}
          data={conversations}
          renderItem={({ item }) => {
            const conversation = item
            return (
              <TouchableOpacity style={$conversationContainer} onPress={() => openChat()}>
                <Image source={{ uri: conversation.author.image }} style={$image} />
                <View style={$infoContainer}>
                  <Text size="lg" preset="heading">
                    {conversation.author.name}
                  </Text>
                  <Text size="xs" style={{ color: colors.palette.grey }}>
                    {conversation.lastMessage}
                  </Text>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={22} color={colors.palette.grey} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(conversation) => conversation.id}
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
  paddingHorizontal: spacing.medium,
}

const $conversationContainer: ViewStyle = {
  paddingVertical: spacing.large,
  flexDirection: "row",
  alignItems: "center",
}

const $image: ImageStyle = {
  width: 54,
  height: 54,
  borderRadius: 999,
}

const $infoContainer: ViewStyle = {
  flex: 1,
  marginLeft: spacing.medium,
}
