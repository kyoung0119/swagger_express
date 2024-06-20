import express from "express";
import bodyParser from "body-parser";
import { getNodeInfo, getNodeList, getTransaction, getTransactionList } from "../controller/general.js";

const generalRoute = express.Router()

generalRoute.use(bodyParser.json()) // to use body object in requests

/**
 * @swagger
 * /general:
 *   get:
 *     summary: Get the node information
 *     tags: [general]
 *     description: Returns the public key and another public information of the node.
 *     operationId: generalGetPk
 *     responses:
 *       200:
 *         description: successful operation
 *       503:
 *         description: Node is not available now
 *       523:
 *         description: Node is not connected to the network
 */
generalRoute.get('/general', getNodeInfo)

/**
 * @swagger
 * /general/nodes:
 *   get:
 *     summary: Get the nearest nodes list
 *     tags: [general]
 *     description: |
 *       Returns the list of nearest accessible nodes for the client. Client should
 *       choose one of the nodes for further interaction.
 *     operationId: generalGetNodes
 *     responses:
 *       200:
 *         description: successful operation
 *       503:
 *         description: Node is not available now
 *       523:
 *         description: Node is not connected to the network
 */
generalRoute.get('/general/nodes', getNodeList)

/**
 * @swagger
 * /general/transactions:
 *   get:
 *     summary: Get the transactions list
 *     tags: [general]
 *     description: Return the information of the transactions by the order.
 *     operationId: generalGetTransactions
 *     parameters:
 *       - name: from
 *         in: query
 *         description: The number of the transaction to start from
 *         required: true
 *         schema:
 *           type: number
 *       - name: limit
 *         in: query
 *         description: The amount of the requested transactions. Default amount is 20 items
 *         required: false
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: successful operation
 *       503:
 *         description: Node is not available now
 *       523:
 *         description: Node is not connected to the network
 */
generalRoute.get('/general/transactions', getTransactionList)

/**
 * @swagger
 * /general/transactions/{transactionId}:
 *   get:
 *     summary: Get the transaction information
 *     tags: [general]
 *     description: Return the information of the transaction by id.
 *     operationId: generalGetTransaction
 *     parameters:
 *       - name: transactionId
 *         in: path
 *         description: The name of the domain
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: successful operation
 *       503:
 *         description: Node is not available now
 *       523:
 *         description: Node is not connected to the network
 */
generalRoute.get('/general/transactions/:transactionId', getTransaction)

export default generalRoute;
