const db_lookalike = require('../dbconfig/db_ihr');
const Sequelize = require('sequelize');


const DataPost = db_lookalike.define('lookalike_data',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data_field: {type: {type:Sequelize.TEXT()}},
    status:{type: {type:Sequelize.INTEGER}},
    date_create:{type: {type:Sequelize.DATE, defaultValue: Sequelize.NOW}},
    date_edit: {type: {type:Sequelize.DATE, defaultValue:Sequelize.NOW}},
    id_users:{type: {type:Sequelize.INTEGER}}
},{
    tableName: 'lookalike_data',
    underscored:true
});


module.exports = DataPost;