import mongoose, { Schema } from 'mongoose';

export const DomainNSRecordSchema = new Schema({
  name: {
    type: String,
    required: true,
    description: "The name of the subdomain (or @ for root)",
  },
  target: {
    type: String,
    required: true,
    description: "The target of the subdomain. May be Scalia address (storage, client or something else), IPFS address, or IP address.",
  },
});

export const DomainNSRecord = mongoose.models.DomainNSRecord || mongoose.model('DomainNSRecord', DomainNSRecordSchema);
