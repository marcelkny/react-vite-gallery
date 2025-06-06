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
import type { TokenInfo } from './TokenInfo';
import {
    TokenInfoFromJSON,
    TokenInfoFromJSONTyped,
    TokenInfoToJSON,
} from './TokenInfo';
import type { UserInfo } from './UserInfo';
import {
    UserInfoFromJSON,
    UserInfoFromJSONTyped,
    UserInfoToJSON,
} from './UserInfo';

/**
 * 
 * @export
 * @interface ApiLoginResponseData
 */
export interface ApiLoginResponseData {
    /**
     * 
     * @type {TokenInfo}
     * @memberof ApiLoginResponseData
     */
    tokenInfo: TokenInfo;
    /**
     * 
     * @type {UserInfo}
     * @memberof ApiLoginResponseData
     */
    userInfo: UserInfo;
    /**
     * 
     * @type {object}
     * @memberof ApiLoginResponseData
     */
    result: object;
}

/**
 * Check if a given object implements the ApiLoginResponseData interface.
 */
export function instanceOfApiLoginResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tokenInfo" in value;
    isInstance = isInstance && "userInfo" in value;
    isInstance = isInstance && "result" in value;

    return isInstance;
}

export function ApiLoginResponseDataFromJSON(json: any): ApiLoginResponseData {
    return ApiLoginResponseDataFromJSONTyped(json, false);
}

export function ApiLoginResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiLoginResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tokenInfo': TokenInfoFromJSON(json['tokenInfo']),
        'userInfo': UserInfoFromJSON(json['userInfo']),
        'result': json['result'],
    };
}

export function ApiLoginResponseDataToJSON(value?: ApiLoginResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tokenInfo': TokenInfoToJSON(value.tokenInfo),
        'userInfo': UserInfoToJSON(value.userInfo),
        'result': value.result,
    };
}

