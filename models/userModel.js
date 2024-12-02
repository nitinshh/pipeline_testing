module.exports = (Sequelize, sequelize, DataTypes) => {
  return sequelize.define(
    "users",
    {
      ...require("./cors")(Sequelize, DataTypes),
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },

      lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      phoneNumber: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },

      profilePicture: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },

      resetToken: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },

      resetTokenExpires: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      deviceToken: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },

      deviceType: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },

      bio: {
        type: DataTypes.TEXT("long"),
        allowNull: true,
      },

      otpVerify: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      tableName: "users",
    }
  );
};
