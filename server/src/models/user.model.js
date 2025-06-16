const mongoose = require('mongoose');

//habrá un esquema por cada collección con los datos que necesitemos, la colección se llamará igual que la colección creada en mongoDB.

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String
  },
  {
    timestamps: true,
    collection: 'usersCollection'
  }
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
