const User = require('../../model/user');
const Address = require('../../model/address');

const userType = {
    email: '',
    lastName: '',
    firstName: '',
    password: '',
    address: {
        zip: 6000,
        city: '',
        street: '',
    },
};

exports.findOne = (id = 'sjdfldsklj') => User.findById(id).populate('address');

exports.findAll = () => User.find({}).populate('address');

exports.create = async (user = userType) => {
    const address = new Address(user.address);
    await address.save();

    user.address = address._id;
    const newUser = new User(user);
    await newUser.save();

    return newUser;
};
