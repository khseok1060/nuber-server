import User from "../../../entities/User";
import { UpdateMyProfileMutationArgs, UpdateMyProfileResponse} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
  Mutation: {
    UpdateMyProfile: privateResolver(async(_, args: UpdateMyProfileMutationArgs, { req }): Promise<UpdateMyProfileResponse> => {
      const user: User = req.user;
      await User.update({ id: user.id }, { ...args })
    })
  }
}

export default resolvers;
