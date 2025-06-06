/* tslint:disable */
/* eslint-disable */
/**
 * MKSERVERMASTER API (frontend)
 * Internal API for MK-Servermaster Board.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApiErrorResponse
 */
export interface ApiErrorResponse {
    /**
     * 
     * @type {number}
     * @memberof ApiErrorResponse
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiErrorResponse
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiErrorResponse
     */
    message?: string;
}

/**
 * Check if a given object implements the ApiErrorResponse interface.
 */
export function instanceOfApiErrorResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiErrorResponseFromJSON(json: any): ApiErrorResponse {
    return ApiErrorResponseFromJSONTyped(json, false);
}

export function ApiErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiErrorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ApiErrorResponseToJSON(value?: ApiErrorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'type': value.type,
        'message': value.message,
    };
}

