'use strict';
module.exports = (sequelize, DataTypes) => {
  var DataAbsents = sequelize.define('DataAbsents', {
    name: DataTypes.STRING,
    verified: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return DataAbsents;
};