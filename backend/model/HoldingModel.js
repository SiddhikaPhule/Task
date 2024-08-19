const {model} = require ("mongoose");

const {HoldingSchema} = require('../schemas/HoldingSchema');

const HoldingModel = new model ("info", HoldingSchema);

module.exports = {HoldingModel};