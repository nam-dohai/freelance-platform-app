import { StackScreenProps } from "@react-navigation/stack"
import { Header, Screen, Text } from "app/components"
import { AuthenticatedNavigatorParamList, goBack } from "app/navigators"
import { colors, spacing } from "app/theme"
import React, { FC } from "react"
import { FlatList, Image, ImageStyle, View, ViewStyle } from "react-native"

const data = [
  {
    id: "1",
    message: "No problem Dustin, I send you the documents when I arrived at my office!",
    sender: "0",
  },

  {
    id: "2",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem cras ornare commodo imperdiet egestas pharetra, suspendisse tristique. Tellus volutpat unfortunately. Is it possible to send me the documents? Thank you very much.",
    sender: "1",
  },
  {
    id: "3",
    message: "No problem Dustin, I send you the documents when I arrived at my office!",
    sender: "0",
  },

  {
    id: "4",
    message: "Nice! Sorry for the spelling mistakes, the text was pretty old",
    sender: "1",
  },
  
  {
    id: "5",
    message: "No problem Dustin, I send you the documents when I arrived at my office!",
    sender: "0",
  },
  {
    id: "6",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem cras ornare commodo imperdiet egestas pharetra, suspendisse tristique. Tellus volutpat unfortunately. Is it possible to send me the documents? Thank you very much.",
    sender: "1",
  },
  {
    id: "7",
    message: "No problem Dustin, I send you the documents when I arrived at my office!",
    sender: "0",
  },

  {
    id: "8",
    message: "Nice! Sorry for the spelling mistakes, the text was pretty old",
    sender: "1",
  },
]

export const ChatScreen: FC<StackScreenProps<AuthenticatedNavigatorParamList, "Chat">> =
  function ChatScreen() {
    // const { params } = route
    // const { conversation } = params
    // console.log(conversation);

    return (
      <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
        <Header
          safeAreaEdges={[]}
          leftIcon="back"
          leftIconColor={colors.palette.grey}
          onLeftPress={goBack}
        />
        <View style={$recipientContainer}>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png",
            }}
            style={$image}
          />
          <Text size="xl" preset="bold" style={{ marginLeft: spacing.medium }}>
            Alex Marchal
          </Text>
        </View>
        <FlatList
          inverted
          style={$conversationContainer}
          data={data}
          renderItem={({ item }) => {
            const message = item
            return (
              <View style={message.sender === "1" ? $boxSender : $boxRecipient}>
                <Text size="sm" style={{ color: colors.palette.white }}>
                  {message.message}
                </Text>
              </View>
            )
          }}
          keyExtractor={(item) => item.id}
        />
      </Screen>
    )
  }

const $screenContainer: ViewStyle = {
  flex: 1,
}

const $recipientContainer: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing.medium,
}

const $image: ImageStyle = {
  width: 32,
  height: 32,
  borderRadius: 999,
}

const $conversationContainer: ViewStyle = {
  marginTop: spacing.medium,
  marginHorizontal: spacing.medium,
}

const $box: ViewStyle = {
  padding: spacing.small,
  marginBottom: spacing.large,
}

const $boxSender: ViewStyle = {
  ...$box,
  backgroundColor: colors.palette.primary,
  maxWidth: "77%",
  alignSelf:"flex-start",
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  borderBottomRightRadius: 10,
}

const $boxRecipient: ViewStyle = {
  ...$box,
  backgroundColor: "rgba(147, 120, 255, 0.3)",
  alignSelf:"flex-end",
  maxWidth: "77%",
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 10,
}
