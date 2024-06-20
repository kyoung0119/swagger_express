import mongoose, { Schema } from 'mongoose';

const DomainTransferSchema = new Schema({
  address: {
    type: String,
    required: true,
    description: "The address of the current domain owner (should start from 'SW')",
  },
  data: {
    type: String,
    required: true,
    description: "The encrypted JSON of the request",
  },
});

export const DomainTransfer = mongoose.models.DomainTransfer || mongoose.model('DomainTransfer', DomainTransferSchema);