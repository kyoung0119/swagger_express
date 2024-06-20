import mongoose, { Schema } from 'mongoose';

const DomainOrderSchema = new Schema({
  address: {
    type: String,
    required: true,
    description: "The address of the domain buyer (should start from 'SW')",
  },
  data: {
    type: String,
    required: true,
    description: "The encrypted JSON of the request",
  },
});

export const DomainOrder = mongoose.models.DomainOrder || mongoose.model('DomainOrder', DomainOrderSchema);