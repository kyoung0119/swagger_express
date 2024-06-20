import mongoose, { Schema } from 'mongoose';

const FundsTransferSchema = new Schema({
  address: {
    type: String,
    required: true,
    description: "The address of the transferring person (should start from 'SW')",
  },
  data: {
    type: String,
    required: true,
    description: "The encrypted JSON of the request",
  },
});

export const FundsTransfer = mongoose.models.FundsTransfer || mongoose.model('FundsTransfer', FundsTransferSchema);