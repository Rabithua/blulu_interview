/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface GetUserToken200Response
 */
export interface GetUserToken200Response {
    /**
     * 
     * @type {number}
     * @memberof GetUserToken200Response
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof GetUserToken200Response
     */
    message?: string;
    /**
     * 登录token
     * @type {string}
     * @memberof GetUserToken200Response
     */
    data?: string;
}
/**
 * 
 * @export
 * @interface GetUserTokenRequest
 */
export interface GetUserTokenRequest {
    /**
     * code
     * @type {string}
     * @memberof GetUserTokenRequest
     */
    code: string;
    /**
     * email
     * @type {string}
     * @memberof GetUserTokenRequest
     */
    email: string;
}
/**
 * 
 * @export
 * @interface Response
 */
export interface Response {
    /**
     * 
     * @type {number}
     * @memberof Response
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof Response
     */
    message?: string;
    /**
     * 
     * @type {object}
     * @memberof Response
     */
    data?: object;
}
