module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define("Item", {
    // defines the name of the item 
    itemname: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [1, 250]
      }
    },
    // the price of the item 
    price: {
      type: DataTypes.DECIMAL(10,2),
      notEmpty: true,
      defaultValue: 0.00
    },
    // the number of items in stock
    instock: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  /*
    // items associated with the posts that they create
    Item.associate = function (models) {

    };
    */

  return Item;
};
