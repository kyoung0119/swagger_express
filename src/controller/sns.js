import {
  SUCCESS_CODE,
  NODE_NOT_AVAILABLE_CODE,
  NODE_NOT_AVAILABLE_MSG
} from '../utils/response.js'
import { DomainNSRecord } from '../models/DomainNSRecord.js';
import { SNSInfo } from '../models/SNSInfo.js';
import { Domain } from '../models/Domain.js';

export const getSNSInfo = async (req, res, next) => {
  try {
    const mockSNSInfo = {
      version: "0.0.1"
    };

    // To ensure the mock data aligns with the schema, we can create a new NodeInfo instance.
    const snsInfoInstance = new SNSInfo(mockSNSInfo);

    return res.status(SUCCESS_CODE).send({ result: true, data: snsInfoInstance })
  } catch (error) {
    console.log('error', error)
    next(error)
    return res.status(NODE_NOT_AVAILABLE_CODE).send({ result: false, messages: NODE_NOT_AVAILABLE_MSG })
  }
}

export const updateDomain = async (req, res, next) => {
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

export const addDomain = async (req, res, next) => {
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

export const getDomain = async (req, res, next) => {
  try {
    const { domainName } = req.params;

    console.log(domainName)

    const mockData = {
      name: "www",
      target: "ipfs:/blablabla....."
    };

    const dataInstance = new DomainNSRecord(mockData);

    return res.status(SUCCESS_CODE).send({ result: true, data: dataInstance })
  } catch (error) {
    console.log('error', error)
    next(error)
    return res.status(NODE_NOT_AVAILABLE_CODE).send({ result: false, messages: NODE_NOT_AVAILABLE_MSG })
  }
}

export const getDomainList = async (req, res, next) => {
  try {
    const { domainName } = req.params;

    const mockData = {
      name: "mydomain.scalia",
      expired: "2025-06-19T15:00:00Z",
      records: [
        {
          name: "www",
          target: "ipfs:/blablabla....."
        },
        {
          name: "api",
          target: "ipfs:/anotherblablabla....."
        }
      ]
    };

    const dataInstance = new Domain(mockData);

    return res.status(SUCCESS_CODE).send({ result: true, data: dataInstance })
  } catch (error) {
    console.log('error', error)
    next(error)
    return res.status(NODE_NOT_AVAILABLE_CODE).send({ result: false, messages: NODE_NOT_AVAILABLE_MSG })
  }
}
