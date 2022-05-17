const { AuthenticationError } = require('apollo-server-express');
const { Admin, Result} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    admin: async (parent, args, context) => {
      if (context.user) {
      return await Admin.findById({_id: context.user._id});
      }
    },
    Results: async(parent, args, context) =>{
      return await Result.find({});
    }
    
  },
  Mutation: {
      addAdmin: async (parent, { firstName, lastName, email, medicalLicenseNumber, password }) => {
        const user = await Admin.create({ firstName, lastName, email, medicalLicenseNumber, password });
        const token = signToken(user);
  
        return { token, user };
      },
    
    addResult: async (parent, { patientFirstName, patientLastName, phoneNumber, code, createdAt }, context) => {
      console.log(context);
      if (context.user) {
        const result = new Result({ patientFirstName, patientLastName, phoneNumber, code, createdAt  });

        await Admin.findByIdAndUpdate(context.user._id, { $push: { results: result } });

        return result;
      }

      throw new AuthenticationError('Not logged in');
    },
  
    login: async (parent, { email, password }) => {
      const user = await Admin.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
