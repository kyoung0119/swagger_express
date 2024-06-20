import express from "express";
import bodyParser from "body-parser";
import { addDomain, getDomain, getDomainList, getSNSInfo, updateDomain } from '../controller/sns.js'

const snsRoute = express.Router()

snsRoute.use(bodyParser.json()) // to use body object in requests

/**
 * @swagger
 * /sns:
 *   get:
 *     summary: Get the SNS properties
 *     tags: [sns]
 *     description: Returns the properties of the node SNS.
 *     operationId: snsGetInfo
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
snsRoute.get('/sns', getSNSInfo)

/**
 * @swagger
 * /sns:
 *   put:
 *     summary: Update an existing domain
 *     tags: [sns]
 *     description: The only one possible update for the domain is the transfer to another owner
 *     operationId: snsUpdateDomain
 *     requestBody:
 *       description: Update an existent domain owner
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DomainTransfer'
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
snsRoute.put('/sns', updateDomain)

/**
 * @swagger
 * /sns:
 *   post:
 *     summary: Add a new domain
 *     tags: [sns]
 *     description: Add a new domain for the current user.
 *     operationId: snsAddDomain
 *     requestBody:
 *       description: Create a new domain
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DomainOrder'
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
snsRoute.post('/sns', addDomain)

/**
 * @swagger
 * /sns/{domainName}:
 *   get:
 *     summary: Get the current domain record for master domains and subdomains
 *     tags: [sns]
 *     description: Returns the NS record, according to the subdomain of the domain, supported by SNS
 *     operationId: snsGetDomain
 *     parameters:
 *       - name: domainName
 *         in: path
 *         description: The name of the domain
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
snsRoute.get('/sns/:domainName', getDomain)

/**
 * @swagger
 * /sns/{domainName}/list:
 *   get:
 *     summary: Get the list of the domain records (only for master domains)
 *     tags: [sns]
 *     description: Returns the list of the NS records, supported by SNS
 *     operationId: snsGetDomainNS
 *     parameters:
 *       - name: domainName
 *         in: path
 *         description: The name of the domain
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
snsRoute.get('/sns/:domainName/list', getDomainList)

export default snsRoute;
