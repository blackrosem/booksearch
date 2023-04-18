const { User, Book } = require('../models');

const resolvers =  {
    Query: {
        user: async (parent, args) => {
            return await User.findById(args.id).populate('savedBooks');
        },
        user1: async (parent, args) => {
            return await User.findByUsername(args.username).populate('savedBooks');
        }
    }
};

module.exports = resolvers;