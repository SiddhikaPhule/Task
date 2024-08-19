const {Schema} = require ("mongoose");

const HoldingSchema = new Schema ({
    name:String,
    phone: Number
});

module.exports = { HoldingSchema };