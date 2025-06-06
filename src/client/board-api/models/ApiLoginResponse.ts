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
import type { ApiLoginResponseData } from './ApiLoginResponseData';
import {
    ApiLoginResponseDataFromJSON,
    ApiLoginResponseDataFromJSONTyped,
    ApiLoginResponseDataToJSON,
} from './ApiLoginResponseData';

/**
 * 
 * @export
 * @interface ApiLoginResponse
 */
export interface ApiLoginResponse {
    /**
     * 
     * @type {number}
     * @memberof ApiLoginResponse
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof ApiLoginResponse
     */
    type: string;
    /**
     * 
     * @type {ApiLoginResponseData}
     * @memberof ApiLoginResponse
     */
    data: ApiLoginResponseData;
}

/**
 * Check if a given object implements the ApiLoginResponse interface.
 */
export function instanceOfApiLoginResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function ApiLoginResponseFromJSON(json: any): ApiLoginResponse {
    return ApiLoginResponseFromJSONTyped(json, false);
}

export function ApiLoginResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiLoginResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'type': json['type'],
        'data': ApiLoginResponseDataFromJSON(json['data']),
    };
}

export function ApiLoginResponseToJSON(value?: ApiLoginResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'type': value.type,
        'data': ApiLoginResponseDataToJSON(value.data),
    };
}

