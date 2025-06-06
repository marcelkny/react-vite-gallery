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
 * @interface GalleryKeyword
 */
export interface GalleryKeyword {
    /**
     * 
     * @type {string}
     * @memberof GalleryKeyword
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof GalleryKeyword
     */
    keyword: string;
    /**
     * 
     * @type {number}
     * @memberof GalleryKeyword
     */
    contentLevel_id: number;
    /**
     * 
     * @type {string}
     * @memberof GalleryKeyword
     */
    keycategory_id: string;
    /**
     * 
     * @type {string}
     * @memberof GalleryKeyword
     */
    user_id: string;
    /**
     * 
     * @type {string}
     * @memberof GalleryKeyword
     */
    created_at: string;
    /**
     * 
     * @type {string}
     * @memberof GalleryKeyword
     */
    updated_at: string;
    /**
     * 
     * @type {string}
     * @memberof GalleryKeyword
     */
    image_id?: string;
}

/**
 * Check if a given object implements the GalleryKeyword interface.
 */
export function instanceOfGalleryKeyword(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "keyword" in value;
    isInstance = isInstance && "contentLevel_id" in value;
    isInstance = isInstance && "keycategory_id" in value;
    isInstance = isInstance && "user_id" in value;
    isInstance = isInstance && "created_at" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function GalleryKeywordFromJSON(json: any): GalleryKeyword {
    return GalleryKeywordFromJSONTyped(json, false);
}

export function GalleryKeywordFromJSONTyped(json: any, ignoreDiscriminator: boolean): GalleryKeyword {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'keyword': json['keyword'],
        'contentLevel_id': json['contentLevel_id'],
        'keycategory_id': json['keycategory_id'],
        'user_id': json['user_id'],
        'created_at': json['created_at'],
        'updated_at': json['updated_at'],
        'image_id': !exists(json, 'image_id') ? undefined : json['image_id'],
    };
}

export function GalleryKeywordToJSON(value?: GalleryKeyword | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'keyword': value.keyword,
        'contentLevel_id': value.contentLevel_id,
        'keycategory_id': value.keycategory_id,
        'user_id': value.user_id,
        'created_at': value.created_at,
        'updated_at': value.updated_at,
        'image_id': value.image_id,
    };
}

