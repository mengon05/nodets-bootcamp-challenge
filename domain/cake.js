var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cakes");

var db = mongoose.connection;


var CakeSchema = mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number
    },
    flavors: {
        type: Array
    }
})

var Cake = module.exports = mongoose.model("Cake",CakeSchema);

module.exports.create = (newRecord,callback) =>{
    newRecord.save(callback);
}

module.exports.getById = (id,callback) =>{
   Cake.findById(id,callback);
}

module.exports.getAll = (callback) =>{
    Cake.find().select('-__v').exec(callback);
}

module.exports.deleteById = (id, callback) =>{
    Cake.deleteOne({
         _id: id 
    }, callback);
}


module.exports.updateById = (id, record, callback) =>{
    // Cake.updateOne(id, record, callback);
    Cake.findOneAndUpdate(
        { _id: id },
        record,
        { upsert: true}
      ,callback);
  
}
