import mongoose, { Schema } from 'mongoose';

const NodeInfoSchema = new Schema({
  address: {
    type: String,
    required: true,
    description: "The address of the current node (should start from 'SN')",
  },
  version: {
    type: String,
    required: true,
    description: "The node version",
  },
  lastTransaction: {
    type: Number,
    required: true,
    description: "Last processed transaction in the node",
  },
  protocols: {
    type: [String],
    required: true,
    description: "The list of the protocols supported by the current node",
  },
});

export const NodeInfo = mongoose.models.NodeInfo || mongoose.model('NodeInfo', NodeInfoSchema);