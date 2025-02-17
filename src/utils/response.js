export const SUCCESS_CODE = 200 //POST
export const SUCCESS_MSG = 'OK.' //
export const ACCEPTED_CODE = 202 // if the response includes an entity describing the status. The status should be 202 (Accepted) if the action has been queued
export const successCodeUpdate = 204 // For Patch useful in update when response body not required
// 204 response code is used because the response does not carry a message body

// 4** code
export const BAD_REQ_CODE = 400
export const BAD_REQ_MSG = 'Bad Request.'

export const AUTH_ERR_CODE = 401

export const FORBIDDEN_CODE = 403
export const FORBIDDEN_MSG = 'Forbidden'

export const NOT_FOUND_CODE = 404
export const NOT_FOUND_MSG = 'Not Found.'

export const NOT_ALLOWED_CODE = 405

export const CONFLICT_CODE = 409
export const CONFLICT_MSG = 'Conflict'

export const TOO_MANY_CODE = 429
export const TOO_MANY_MSG = 'Too many request'

// 5** code
export const SERVER_ERROR_CODE = 500
export const SERVER_ERROR_MSG = 'Internal Server Error.'

export const NODE_NOT_AVAILABLE_CODE = 503
export const NODE_NOT_AVAILABLE_MSG = 'Node is not available now'

export const NODE_NOT_CONNECTED_CODE = 523
export const NODE_NOT_CONNECTED_MSG = 'Node is not connected to the network'