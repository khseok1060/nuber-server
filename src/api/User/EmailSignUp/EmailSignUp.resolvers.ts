import User from "../../../entities/User";
import { EmailSignUpMutationArgs, EmailSignUpResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    EmailSignUp: async(__, args: EmailSignUpMutationArgs): Promise<EmailSignUpResponse> => {
      const { email } = args;
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            ok: false,
            error: "You should log in instead",
            token: null
          }
        } else {
          const newUser = await User.create({ ...args }).save();
          return {
            ok: true,
            error: null,
            token: "Comming soon!"
          }
        }
      } catch(error) {
        return {
          ok: false,
          error: error.message,
          token: null
        }

      }
    }
  }
}

export default resolvers;
