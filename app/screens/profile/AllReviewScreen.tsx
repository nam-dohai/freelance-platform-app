import { StackScreenProps } from "@react-navigation/stack"
import { Header, Screen, Text } from "app/components"
import { AuthenticatedNavigatorParamList, goBack } from "app/navigators"
import { colors, spacing } from "app/theme"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { FlatList, View, ViewStyle } from "react-native"
import { Rating } from "react-native-ratings"

export const AllReviewScreen: FC<StackScreenProps<AuthenticatedNavigatorParamList, "AllReview">> =
  observer(function AllReviewScreen({ route }) {
    const { params } = route
    const { reviews } = params

    return (
      <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
        <Header
          safeAreaEdges={[]}
          leftIcon="back"
          leftIconColor={colors.palette.grey}
          onLeftPress={goBack}
        />

        <View style={$bodyContainer}>
          <FlatList
            data={reviews}
            renderItem={({ item }) => {
              const review = item
              
              return (
                <View style={{ marginBottom: spacing.extraLarge }}>
                  <Text size="lg" preset="heading">
                    {review.author.name}
                  </Text>
                  <Text size="sm" style={{ color: colors.palette.grey }}>
                    {review.comment}
                  </Text>
                  <Text size="xs">Rating</Text>
                  <Rating
                    style={{ alignItems: "flex-start" }}
                    imageSize={20}
                    ratingCount={5}
                    startingValue={review.rate}
                    readonly
                    type="custom"
                    ratingColor={colors.palette.primary}
                    tintColor={colors.palette.background}
                  />
                </View>
              )
            }}
            keyExtractor={(item) => item.id}
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
