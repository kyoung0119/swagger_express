import {
  SUCCESS_CODE,
  NODE_NOT_AVAILABLE_CODE,
  NODE_NOT_AVAILABLE_MSG
} from '../utils/response.js'
import { DomainNSRecord } from '../models/DomainNSRecord.js';
import { SNSInfo } from '../models/SNSInfo.js';
import { Domain } from '../models/Domain.js';
import { FinanceInfo } from '../models/FinanceInfo.js';
import { FinanceWalletInfo } from '../models/FinanceWalletInfo.js';

export const getFinanceInfo = async (req, res, next) => {
  try {
    const mockFinanceInfo = {
      version: "0.0.1"
    };

    // To ensure the mock data aligns with the schema, we can create a new NodeInfo instance.
    const financeInfoInstance = new FinanceInfo(mockFinanceInfo);

    return res.status(SUCCESS_CODE).send({ result: true, data: financeInfoInstance })
  } catch (error) {
    console.log('error', error)
    next(error)
    return res.status(NODE_NOT_AVAILABLE_CODE).send({ result: false, messages: NODE_NOT_AVAILABLE_MSG })
  }
}

export const sendFunds = async (req, res, next) => {
  try {
    const { address, data } = req.body;

    // Mock response data
    const mockResponse = {
      transaction: "STJKTDEFGUTGGhghGSU^R%56tstfyttrd4",
      status: "awaiting"
    };

    return res.status(200).send(mockResponse);
  } catch (error) {
    console.error('Error:', error);
    next(error);
    return res.status(503).send({ result: false, messages: 'Node is not available now' });
  }
};

export const getAddressFinaceInfo = async (req, res, next) => {
  try {
    const { address } = req.params;

    // Mock response data
    const mockData = {
      address: "SCGydedy8768tygIUY",
      funds: [
        {
          address: "SFGydedy8768tygIUY",
          amount: 7864.7686
        },
        {
          address: "SFGydedy1234asdf",
          amount: 1234.5678
        }
      ]
    };

    const dataInstance = new FinanceWalletInfo(mockData);

    return res.status(SUCCESS_CODE).send({ result: true, data: dataInstance })
  } catch (error) {
    console.log('error', error)
    next(error)
    return res.status(NODE_NOT_AVAILABLE_CODE).send({ result: false, messages: NODE_NOT_AVAILABLE_MSG })
  }
}