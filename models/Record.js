const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const RecordSchema = new mongoose.Schema({
  Brand: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
  },
  Price: {
    type: Number,
  },
  Size: {
    type: String,
  },
  Volume: {
    type: String,
  },
  Classification: {
    type: Number,
  },
  PurchasePrice: {
    type: Number,
  },
  VendorNumber: {
    type: Number,
  },
  VendorName: {
    type: String,
  },
});

RecordSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Record", RecordSchema);
