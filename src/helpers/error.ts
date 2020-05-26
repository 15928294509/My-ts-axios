import { AxiosRequestConfig, AxiosResponse } from "../types"


export class AxiosError extends Error {
    isAxiosError: boolean
    config: AxiosRequestConfig
    code?: string | null
    request?: any
    response?: AxiosResponse
    /* istanbul ignore next */
    // 忽略测试下面代码
    constructor(message: string, config: AxiosRequestConfig,
        code?: string | null,
        request?: any,
        response?: AxiosResponse, ) {
        super(message);
        this.config = config;
        this.code = code;
        this.request = request;
        this.response = response;
        this.isAxiosError = true;
        Object.setPrototypeOf(this, AxiosError.prototype);
    }
}

export function createError(message: string, config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse, ) {
    return new AxiosError(message, config,
        code,
        request,
        response);
}