module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        // user's username as defined during user registration
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                len: [1, 50]
            }
        },
        // user's password as defined during user registration
        password: {
            type: DataTypes.STRING,
            notEmpty: true,
            validate: {
                len: [1, 75]
                // ...
            }
        },
        // user's email input during registration
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1, 254],
                isEmail: true
            }
        },
    });
    /*
    // users associated with the posts that they create
    User.associate = function (models) {

    };
    */

    return User;
};
