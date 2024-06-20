import mongoose, { Schema } from 'mongoose';

const TransactionSchema = new Schema({
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
});

export const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);