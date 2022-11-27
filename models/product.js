const mongoose = require("mongoose");
const { arrayBuffer } = require("stream/consumers");
const productSchema = new mongoose.Schema({
  src: {
    type: arrayBuffer,
    required: "Images required",
  },
  name: {},
});
