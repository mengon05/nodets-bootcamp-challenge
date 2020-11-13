
var express = require('express');
const { body, validationResult } = require('express-validator');

var router = express.Router();

var Cake = require('../domain/cake');
const cake = require('../domain/cake');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Cake.getAll((err, data)=>{
    if(err) throw err;
    res.send(data);

  })
});
router.get('/:id', function(req, res, next) {
  console.log("router.get -> req.params.id", req.params.id)
  Cake.getById(req.params.id,(err, data)=>{
    if(err) throw err;
    res.send(data);
  })
});
router.delete('/:id', function(req, res, next) {
  console.log("router.get -> req.params.id", req.params.id)
  Cake.deleteById(req.params.id,(err, data)=>{
    if(err) throw err;
    res.send(data);
  })
});
router.get('/:id', function(req, res, next) {
  console.log("router.get -> req.params.id", req.params.id)
  Cake.getById(req.params.id,(err, data)=>{
    if(err) throw err;
    res.send(data);
  })
});

function sendErrors(req, res, next){
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({errors: errors.array()});
  }
  next();
}

router.post('/', [
  body('name').not().isEmpty().trim().escape().withMessage("Name is required"),
  body('price').isFloat({gt: 0}).withMessage("Price is not valid"),
  // body('flavors').not().isEmpty().trim().escape().withMessage("Flavor is required"),
   body('flavors').isArray(),
   sendErrors
],(req, res, next) => {
  
  var newRecord = new Cake({
    ...req.body,
  });
  Cake.create(newRecord,(error,record)=>{
    if(error) throw errors;
    console.log("New record", record);
    res.send(record);
  });
  
});
router.put('/:id', [
  body('name').not().isEmpty().trim().escape().withMessage("Name is required"),
  body('price').isFloat({gt: 0}).withMessage("Price is not valid"),
  // body('flavors').not().isEmpty().trim().escape().withMessage("Flavor is required"),
   body('flavors').isArray(),
   sendErrors
],(req, res, next) => {
  
  Cake.updateById(req.params.id, req.body,(error,record)=>{
    if(error) throw error;
    console.log("update record", record);
    res.send(record);
  });
  
});

module.exports = router;
