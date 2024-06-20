import mongoose, { Schema } from 'mongoose';

const TransactionInfoSchema = new Schema({
  transaction: {
    type: String,
    required: true,
    description: "The id of the transaction (should start from 'ST')",
  },
  status: {
    type: String,
    required: true,
    enum: [
      'awaiting',
      'pending',
      'processing',
      'signed',
      'underpriced',
      'conflicted',
      'confirmed',
    ],
    description: "The transaction status",
  },
  data: {
    type: Schema.Types.Mixed,
    description: "The JSON of the specific transaction data",
  },
});

export const TransactionInfo = mongoose.models.TransactionInfo || mongoose.model('TransactionInfo', TransactionInfoSchema);