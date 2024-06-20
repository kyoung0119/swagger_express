import express from "express";
import bodyParser from "body-parser";

import generalRoute from "./general.js"
import snsRoute from "./sns.js"
import financeRoute from "./finance.js"

const app = express.Router()

app.use(bodyParser.json()) // to use body object in requests

// app.get('/api/admin/generatetoken', generateToken)

app.use('/', generalRoute)
app.use('/', snsRoute)
app.use('/', financeRoute)

/**
 * @swagger
 * components:
 *   schemas:
 *     Transaction:
 *       type: object
 *       properties:
 *         transaction:
 *           type: string
 *           example: "STJKTDEFGUTGGhghGSU^R%56tstfyttrd4"
 *           description: The id of the transaction (should start from "ST")
 *         status:
 *           type: string
 *           description: The transaction status
 *           enum:
 *             - awaiting
 *             - pending
 *             - processing
 *             - signed
 *             - underpriced
 *             - conflicted
 *             - confirmed
 *     TransactionInfo:
 *       type: object
 *       properties:
 *         transaction:
 *           type: string
 *           example: "STJKTDEFGUTGGhghGSU^R%56tstfyttrd4"
 *           description: The id of the transaction (should start from "ST")
 *         status:
 *           type: string
 *           description: The transaction status
 *           enum:
 *             - awaiting
 *             - pending
 *             - processing
 *             - signed
 *             - underpriced
 *             - conflicted
 *             - confirmed
 *         data: 
 *           type: object
 *           description: The JSON of the specific transaction data
 *     NodeInfo:
 *       type: object
 *       properties:
 *         address:
 *           type: string
 *           example: "SNJKTDEFGUTGGhghGSU^R%56tstfyttrd4"
 *           description: The address of the current node (should start from "SN")
 *         version:
 *           type: string
 *           example: "0.0.1"
 *           description: The node version. Supported protocols list is defined by the version
 *         lastTransaction:
 *           type: number
 *           example: 324537
 *           description: Last processed transaction in the node. The number of the transaction in the different nodes may vary.
 *         protocols:
 *           type: array
 *           items:
 *             type: string
 *           example: ["dht", "sns", "storage"]
 *           description: The list of the protocols supported by the current node. Node may support only a part of the all network protocols.
 *     SNSInfo:
 *       type: object
 *       properties:
 *         version:
 *           type: string
 *           example: "0.0.1"
 *           description: The node SNS protocol version.
 *     DomainTransfer:
 *       type: object
 *       properties:
 *         address:
 *           type: string
 *           example: "SCGydedy8768tygIUY"
 *           description: The address of the current domain owner (should start from "SW")
 *         data:
 *           type: string
 *           example: "The encrypted message of the domain transfer request"
 *           description: |
 *             The encrypted JSON of the request. This data is encrypted by asymmetric encryption using the private key of the client and the public key of the node.
 * 
 *             JSON: {
 * 
 *                 domain: The domain name,
 * 
 *                 address: The new owner address (should start from "SW"),
 * 
 *                 price: The price for the domain transfer. Defines the amount of the Scalia tokens needed to be taken from the new owner,
 * 
 *                 timestamp: The execution timestamp. Should be no more than 1 minute before of the request
 * 
 *             }
 *     DomainOrder:
 *       type: object
 *       properties:
 *         address:
 *           type: string
 *           example: "SCGydedy8768tygIUY"
 *           description: The address of the domain buyer (should start from "SW")
 *         data:
 *           type: string
 *           example: "The encrypted message of the domain request"
 *           description: |
 *             The encrypted JSON of the request. This data is encrypted by asymmetric encryption using the private key of the client and the public key of the node.
 * 
 *             JSON: {
 * 
 *                 domain: The domain name,
 * 
 *                 address: The new owner address (should start from "SW"). May not the same as the buyer.
 * 
 *                 price: The price for the domain name order. Defines the amount of the Scalia tokens needed to be paid by buyer. The domain name to be purchased is placed in an internal closed-type auction, and awaits the maximum bid within twenty-four hours of the bid. The owner of the domain becomes the applicant of the maximum amount, but not less than a fixed value (defined in a separate document).
 * 
 *                 timestamp: The execution timestamp. Should be no more than 1 minute before of the request
 * 
 *             }
 *     DomainNSRecord:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the subdomain (or @ for root)
 *           example: "www"
 *         target:
 *           type: string
 *           example: "ipfs:/blablabla....."
 *           description: The target of the subdomain. May be Scalia address (storage, client or something else), IPFS address or IP address.
 *     Domain:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "mydomain.scalia"
 *           description: The name of the domain
 *         expired:
 *           type: string
 *           format: date-time
 *           description: The expiration of the domain
 *         records:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/DomainNSRecord'
 *           description: The list of the NS records.
 *     FinanceInfo:
 *       type: object
 *       properties:
 *         version:
 *           type: string
 *           example: "0.0.1"
 *           description: The node SNS protocol version.
 *     FinanceWalletInfo:
 *       type: object
 *       properties:
 *         address:
 *           type: string
 *           example: "SCGydedy8768tygIUY"
 *           description: The address of the requesting person (should start from "SW")
 *         funds:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/WalletInfo'
 *     WalletInfo:
 *       type: object
 *       properties:
 *         address:
 *           type: string
 *           example: "SFGydedy8768tygIUY"
 *           description: The address of the token (starting from the "SF")
 *         amount: 
 *           type: number
 *           example: 7864.7686
 *           description: The amount of the holded tokens.
 *     FundsTransfer:
 *       type: object
 *       properties:
 *         address:
 *           type: string
 *           example: "SCGydedy8768tygIUY"
 *           description: The address of the transferring person (should start from "SW")
 *         data:
 *           type: string
 *           example: "The encrypted message of the domain request"
 *           description: |
 *             The encrypted JSON of the request. This data is encrypted by asymmetric encryption using the private key of the client and the public key of the node.
 * 
 *             JSON: {
 *                 address: The funds receiving address (should start from "SW" or "SC"). 
 * 
 *                 amount: The amount of the transferred tokens.
 * 
 *                 token: The address of the token (Should start from "SF", Scalia native toke have the short "SF" address, Scalia's subtokens have the "SFXX" addresses, where XX is the id of the subtoken.)
 * 
 *                 timestamp: The execution timestamp. Should be no more than 1 minute before of the request
 * 
 *             } 
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

export default app;
