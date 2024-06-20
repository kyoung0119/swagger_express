// models/SNSInfo.js
import mongoose, { Schema } from 'mongoose';

const SNSInfoSchema = new Schema({
  version: {
    type: String,
    required: true,
    description: "The node SNS protocol version",
  },
});

export const SNSInfo = mongoose.models.SNSInfo || mongoose.model('SNSInfo', SNSInfoSchema);