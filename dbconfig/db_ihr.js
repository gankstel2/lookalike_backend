/**
 * Created by patipan on 03/08/2018 
 */


var config = require('../dbconfig/db.config');
var Sequelize = require('sequelize');
const db_ihr = new Sequelize(config.cfg_db_ihr, config.cfg_db_user, config.cfg_db_pwd, {
    host: config.cfg_db_host,
    dialect: 'mysql',
    timezone : '+07:00',
    logging: false,
    freezeTableName: true,
    operatorsAliases: false,
    pool: {
        max: config.cfg_MAX_POOL,
        min: config.cfg_MIN_POLL,
        idle: config.cfg_IDLE
    },
    define: {
        timestamps: false
    }
});


module.exports = db_ihr;

