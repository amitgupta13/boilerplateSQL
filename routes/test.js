const express = require('express');
const Joi = require('joi');
const test = require('../controllers/test');
const validate = require('../middleware/validate');
router = express.Router();

router.post('/', validate(validatePost), test.postTest);
router.get('/', test.getTest);
router.delete('/',validate(validateDelete), test.deleteTest);

function validatePost(req){
    const schema = {
        card:Joi.string().required().min(5).max(10)
    }

    return Joi.validate(req, schema);
}

function validateDelete(req){
    const schema = {
        id:Joi.number().required()
    }

    return Joi.validate(req, schema);
}


module.exports = router;