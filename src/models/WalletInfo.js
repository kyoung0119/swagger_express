import mongoose, { Schema } from 'mongoose';

export const WalletInfoSchema = new Schema({
  address: {
    type: String,
    required: true,
    description: "The address of the token (starting from the 'SF')",
  },
  amount: {
    type: Number,
    required: true,
    description: "The amount of the holded tokens",
  },
});

export const WalletInfo = mongoose.models.WalletInfo || mongoose.model('WalletInfo', WalletInfoSchema);