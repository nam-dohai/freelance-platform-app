import { Screen, Text } from "app/components"
import { RootTabScreenProps, navigate } from "app/navigators"
import { colors, spacing } from "app/theme"
import React, { FC } from "react"
import { Image, ImageStyle, View, ViewStyle, TouchableOpacity } from "react-native"
import { Rating } from "react-native-ratings"

const user = {
  image:
    "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png",
  name: "Dustin Warren",
  title: "UX Designer",
  description:
    "My name is Dustin, I’m a young designer from Dublin. I practice for 4 years now, worked with small and big agencies.",
  reviews: [
    {
      id: "1",
      rate: 4,
      author: {
        name: "Kyle Wilson",
      },
      comment: "Awesome job!",
    },
    {
      id: "2",
      rate: 5,
      author: {
        name: "Rosemary Copler",
      },
      comment: "Alex is a very great designer, having a lot of positive energy with him!",
    },
    {
      id: "3",
      rate: 5,
      author: {
        name: "Soham Pena",
      },
      comment: "Working with Alex is always a pleasure! He has limitless capabilities!",
    },
    {
      id: "4",
      rate: 5,
      author: {
        name: "Calvin Watson",
      },
      comment: "I recommend Alex. Always impress by his work and his speed!",
    },
  ],
}

export const ProfileScreen: FC<RootTabScreenProps<"Profile">> = function ProfileScreen(_props) {
  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      <View style={$bodyContainer}>
        <Text size="xxl" preset="bold">
          Profile
        </Text>
        <View style={[$row, { marginTop: spacing.large }]}>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png",
            }}
            style={$authorImage}
          />
          <View style={{ marginLeft: spacing.extraSmall }}>
            <Text size="xl" preset="heading">
              {user.name}
            </Text>
            <Text size="sm" style={{ color: colors.palette.grey }}>
              {user.title}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: spacing.extraLarge }}>
          <Text size="lg" preset="heading">
            Description
          </Text>
          <Text size="sm" style={{ color: colors.palette.grey, maxWidth: "88%" }}>
            {user.description}
          </Text>
        </View>

        <View style={{ marginTop: spacing.extraLarge }}>
          <View style={$row}>
            <Text size="lg" preset="subheading" style={{ flex: 1 }}>
              {user.reviews.length} reviews
            </Text>
            <View style={{ alignItems: "center" }}>
              <Text size="xs">Average rating</Text>
              <Rating
                imageSize={20}
                ratingCount={4}
                readonly
                fractions={10}
                type="custom"
                ratingColor={colors.palette.primary}
                tintColor={colors.palette.background}
              />
            </View>
          </View>

          <View style={$row}>
            <View style={{ flex: 1 }}>
              <Text size="xxs" style={{ color: colors.palette.grey }}>
                Last Review
              </Text>
              <Text size="sm" preset="subheading">
                {user.reviews[0].comment}
              </Text>
              <Text size="xxs">-{user.reviews[0].author.name}</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={$viewAllContainer}
                onPress={() => navigate("AllReview", { reviews: user.reviews })}
              >
                <Text size="xs" preset="formLabel">
                  View all
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginTop: spacing.extraLarge }}>
          <Text size="lg" preset="heading">
            Portfolio
          </Text>
          <Image source={require("../../../assets/images/Posts.png")} style={$portfolioImage} />
        </View>
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

const $row: ViewStyle = {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
}

const $authorImage: ImageStyle = {
  width: 52,
  height: 52,
  borderRadius: 999,
}

const $viewAllContainer: ViewStyle = {
  alignSelf: "flex-end",
  paddingHorizontal: spacing.small,
  paddingVertical: spacing.tiny,
  backgroundColor: colors.palette.pink,
  borderRadius: 6,
}

const $portfolioImage: ImageStyle = {
  width: "100%",
  height: 210,
  borderRadius: 10,
  resizeMode: "stretch",
  marginTop: spacing.medium,
}
