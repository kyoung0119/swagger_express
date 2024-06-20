import mongoose, { Schema } from 'mongoose';
import { WalletInfoSchema } from './WalletInfo.js';

const FinanceWalletInfoSchema = new Schema({
  address: {
    type: String,
    required: true,
    description: "The address of the requesting person (should start from 'SW')",
  },
  funds: {
    type: [WalletInfoSchema],
    required: true,
    description: "The list of the funds in the wallet",
  },
});

export const FinanceWalletInfo = mongoose.models.FinanceWalletInfo || mongoose.model('FinanceWalletInfo', FinanceWalletInfoSchema);