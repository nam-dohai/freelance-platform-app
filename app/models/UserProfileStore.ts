import { api } from "app/services/api"
import { Instance, SnapshotOut, flow, getRoot, types } from "mobx-state-tree"
import { RootStore } from "./RootStore"
import jwtDecode from "jwt-decode";
export const UserProfileModel = types
  .model("UserProfileStore")
  .props({
    data: types.maybe(types.model("UserProfile", {
      id: types.maybe(types.string),
      name: types.maybe(types.string),
      image_url: types.maybe(types.string),
      title: types.maybe(types.string),
      description: types.maybe(types.string),
      portfolio: types.maybe(types.string),
      user_id: types.maybe(types.string),
    })),
  })
  .views((store) => ({}))
  .actions((store) => ({
    init: flow(function* () {
      const token = getRoot<RootStore>(store).authenticationStore.authToken;
      const decoded = jwtDecode(token);
      
      const userId = decoded.id;
      console.log({ userId });
      
      const response = yield api.getUserProfileByUserId(userId)
      if (response.kind === "ok") {
        const userProfile = response.userProfile
        store.data = userProfile
      }
    }),
  }))

export interface UserProfileStore extends Instance<typeof UserProfileModel> {}
export interface UserProfileStoreSnapshot extends SnapshotOut<typeof UserProfileModel> {}

// @demo remove-file
