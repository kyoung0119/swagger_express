import {
  SUCCESS_CODE,
  NODE_NOT_AVAILABLE_CODE,
  NODE_NOT_AVAILABLE_MSG
} from '../utils/response.js'
import { NodeInfo } from '../models/NodeInfo.js'
import { TransactionInfo } from '../models/TransactionInfo.js';

export const getNodeInfo = async (req, res, next) => {
  try {
    const mockNodeInfo = {
      address: "SNJKTDEFGUTGGhghGSU^R%56tstfyttrd4",
      version: "0.0.1",
      lastTransaction: 324537,
      protocols: ["dht", "sns", "storage"]
    };

    // To ensure the mock data aligns with the schema, we can create a new NodeInfo instance.
    const nodeInfoInstance = new NodeInfo(mockNodeInfo);

    return res.status(SUCCESS_CODE).send({ result: true, data: nodeInfoInstance })
  } catch (error) {
    console.log('error', error)
    next(error)
    return res.status(NODE_NOT_AVAILABLE_CODE).send({ result: false, messages: NODE_NOT_AVAILABLE_MSG })
  }
}

export const getNodeList = async (req, res, next) => {
  try {
    const mockNodeList = ["133.1.2.3", "240.7.6.88", "75.148.55.223"];

    return res.status(SUCCESS_CODE).send({ result: true, data: mockNodeList })
  } catch (error) {
    console.log('error', error)
    next(error)
    return res.status(NODE_NOT_AVAILABLE_CODE).send({ result: false, messages: NODE_NOT_AVAILABLE_MSG })
  }
}

export const getTransactionList = async (req, res, next) => {
  try {
    const { from, limit = 20 } = req.query;

    const mockTransactions = [
      {
        transaction: "ST1234567890",
        status: "confirmed",
        data: { amount: 1000, currency: "USD", timestamp: "2024-06-19T12:34:56Z" }
      },
      {
        transaction: "ST0987654321",
        status: "pending",
        data: { amount: 200, currency: "EUR", timestamp: "2024-06-19T13:00:00Z" }
      },
      {
        transaction: "ST1122334455",
        status: "processing",
        data: { amount: 500, currency: "GBP", timestamp: "2024-06-19T14:15:30Z" }
      }
    ];

    // Apply pagination logic
    const startIndex = parseInt(from, 10) || 0;
    const endIndex = startIndex + parseInt(limit, 10);

    // Select a subset of the mock data based on the provided parameters
    const transactionsSubset = mockTransactions.slice(startIndex, endIndex);

    // Ensure the mock data aligns with the schema by creating instances of TransactionInfo.
    const transactionInstances = transactionsSubset.map(tx => new TransactionInfo(tx));

    return res.status(SUCCESS_CODE).send({ result: true, data: transactionInstances })
  } catch (error) {
    console.log('error', error)
    next(error)
    return res.status(NODE_NOT_AVAILABLE_CODE).send({ result: false, messages: NODE_NOT_AVAILABLE_MSG })
  }
}

export const getTransaction = async (req, res, next) => {
  try {
    const transactionId = req.params.transactionId;

    console.log(transactionId)

    const mockTransaction = {
      transaction: "ST1234567890",
      status: "confirmed",
      data: { amount: 1000, currency: "USD", timestamp: "2024-06-19T12:34:56Z" }
    };

    const transactionInstance = new TransactionInfo(mockTransaction);

    return res.status(SUCCESS_CODE).send({ result: true, data: transactionInstance })
  } catch (error) {
    console.log('error', error)
    next(error)
    return res.status(NODE_NOT_AVAILABLE_CODE).send({ result: false, messages: NODE_NOT_AVAILABLE_MSG })
  }
}
