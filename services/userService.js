const { User } = require('../models/user');

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const createUser = async (userData) => {
  const user = await User.create(userData);
  return user;
};

const updateUser = async (id, userData) => {
  const [rowsUpdated] = await User.update(userData, {
    where: { id },
  });
  if (rowsUpdated === 0) {
    return null;
  }
  const updatedUser = await User.findByPk(id);
  return updatedUser;
};

const deleteUser = async (id) => {
  const rowsDeleted = await User.destroy({
    where: { id },
  });
  if (rowsDeleted === 0) {
    return null;
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};