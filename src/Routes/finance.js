import express from "express";
import bodyParser from "body-parser";

import { getAddressFinaceInfo, getFinanceInfo, sendFunds } from "../controller/finance.js";

const financeRoute = express.Router()

financeRoute.use(bodyParser.json()) // to use body object in requests

/**
 * @swagger
 * /finance:
 *   get:
 *     summary: Get the finance properties
 *     tags: [finance]
 *     description: Returns the properties of the node finance part.
 *     operationId: financeGetInfo
 *     responses:
 *       200:
 *         description: Auccessful operation
 *       405:
 *         description: Finances not supported
 *       503:
 *         description: Node is not available now
 *       523:
 *         description: Node is not connected to the network
 */
financeRoute.get('/finance', getFinanceInfo)

/**
 * @swagger
 * /finance:
 *   post:
 *     summary: Make a transfer
 *     tags: [finance]
 *     description: Sending of the funds to the another wallet .
 *     operationId: financeSendFunds
 *     requestBody:
 *       description: Funds transfer
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FundsTransfer'
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Invalid schema signature provided
 *       405:
 *         description: SNS not supported
 *       503:
 *         description: Node is not available now
 *       523:
 *         description: Node is not connected to the network
 */
financeRoute.post('/finance', sendFunds)

/**
 * @swagger
 * /finance/{address}:
 *   get:
 *     summary: Get the address finances
 *     tags: [finance]
 *     description: Returns the finance statement for the address.
 *     operationId: financeGetAddressInfo
 *     parameters:
 *       - name: address
 *         in: path
 *         description: The address of the wallet
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: successful operation
 *       405:
 *         description: SNS not supported
 *       503:
 *         description: Node is not available now
 *       523:
 *         description: Node is not connected to the network
 */
financeRoute.get('/finance/:address', getAddressFinaceInfo)

export default financeRoute;
