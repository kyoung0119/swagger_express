// models/FinanceInfo.js
import mongoose, { Schema } from 'mongoose';

const FinanceInfoSchema = new Schema({
  version: {
    type: String,
    required: true,
    description: "The node SNS protocol version",
  },
});

export const FinanceInfo = mongoose.models.FinanceInfo || mongoose.model('FinanceInfo', FinanceInfoSchema);