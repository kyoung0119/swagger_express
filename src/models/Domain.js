import mongoose, { Schema } from 'mongoose';
import { DomainNSRecordSchema } from './DomainNSRecord.js';

const DomainSchema = new Schema({
  name: {
    type: String,
    required: true,
    description: "The name of the domain",
  },
  expired: {
    type: Date,
    required: true,
    description: "The expiration of the domain",
  },
  records: {
    type: [DomainNSRecordSchema],
    required: true,
    description: "The list of the NS records",
  },
});

export const Domain = mongoose.models.Domain || mongoose.model('Domain', DomainSchema);