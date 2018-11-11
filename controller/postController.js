var express = require("express");
var crypto = require("crypto");
const Sequelize = require("sequelize");

var db_lookalike = require("../dbconfig/db_lookalike");

var aLike_PostData = require("../model/PostLookalikeData");

const Op = Sequelize.Op;

const postData = function(req, res) {
  const data_obj = req.body; //รับ params

  return db_lookalike
    .transaction(
      { isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED },
      function(t) {
        const objSave = {};
        objSave.data_field = data_obj.data_field;
        objSave.status = 1;
        objSave.date_create = new Date().toISOString().slice(0, 10);
        objSave.date_edit = "";
        objSave.id_users = data_obj.id_users;

        return aLike_PostData.create(objSave, { transaction: t }).catch(
          function(err) {
            console.log(err.parent.sqlMessage);
          },
          { transaction: t }
        );
      }
    )
    .then(function(option) {
      objResp = {
        message: "บันทึกข้อมูลสำเร็จ"
      };
      res.json(objResp);
    })
    .catch(function(err) {
      res.json(err);
    });
};

const loadPostAll = (req, res) => {
  aLike_PostData
    .findAll({
      order: [["id", "DESC"]]
    })
    .then(user => {
      //   console.log('user',user)
      status: true;

      res.json(user);
    })
    .catch(err => {
      res.json({ status: false, msg: err });
    });
};

const defineData = (req, res) =>{
    const idselect  = req.body.id
    aLike_PostData.findOne({
        where: {id: idselect}
    })
    .then(model =>{
        console.log(model)
    })
     
}

const updatePost = (req, res) => {
  console.log(req.body);
  const data_field = req.body.data_field;
  const id = req.body.id;
  aLike_PostData.findOne({
    where: { id }
  })
  .then(model =>{
    //console.log(model)
    model.update({data_field})
    .then(() => {
     
      res.json({status:true})
     
    })
  })
};

const delPost = (req, res) => {
  const _idus = req.query.id;
  console.log(_idus);
  aLike_PostData
    .findOne({
      where: { id: _idus }
    })
    .then(model => {
     
      if (model) {
        model
          .destroy({ force: true })
          .then(succ => {
            res.json({ status: true, succ });
          })
          .catch(error => {
            res.json({ status: false, message: error });
          });
      } else {
        res.json({ status: false, message: error });
      }
    });
};

module.exports = {
  postData,
  loadPostAll,
  updatePost,
  delPost,
  defineData
};
