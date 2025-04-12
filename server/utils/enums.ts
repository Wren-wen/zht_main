export enum ENV {
    DEV,
    PROD
}

export enum FILE_TYPE {
    ARTICLE = 'article',
    IMAGE = 'image_bed',
    PICTURE = 'picture',
    PRODUCT = 'product',
    INDEX = 'index'
}

export enum UPDATE_INFO {
    SUCCESS = 'ok',
    NO_MATCH = 'number of matched data is 0',
    NOT_RECV = 'db server did not receive operation'
}