import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const codeMessage: Record<string, any> = {
    200: "服务器成功返回请求的数据。",
    201: "新建或修改数据成功。",
    202: "一个请求已经进入后台排队（异步任务）。",
    204: "删除数据成功。",
    400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
    401: "用户没有权限（令牌、用户名、密码错误）。",
    403: "用户得到授权，但是访问是被禁止的。",
    404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
    406: "请求的格式不可得。",
    410: "请求的资源被永久删除，且不会再得到的。",
    422: "当创建一个对象时，发生一个验证错误。",
    500: "服务器发生错误，请检查服务器。",
    502: "网关错误。",
    503: "服务不可用，服务器暂时过载或维护。",
    504: "网关超时。",
};
// const request = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL,
// });


const header = {
    "Request-ID": process.env.Request_ID || "",
    "Request-Time": (new Date()).valueOf(),
};


const axiosInstance = axios.create({
    baseURL: '/',
    headers: header,
    timeout: 1000 * 60 * 10//超时10分钟
});


const request = {

    get: (url: string, params: Record<string, any>) => {
        return create('get', url, params);
    },
    post: (url: string, params: Record<string, any>) => {
        return create('post', url, params);
    },
    delete: (url: string, params: Record<string, any>) => {
        return create('delete', url, params);
    }

};

const create = (method: string, url: string, params: Record<string, any>) => {
    const config = {
        method: method,
        url: url,
        params
    };
    return axiosInstance(config);
};

// 请求拦截器
axiosInstance.interceptors.request.use(
    // @ts-ignore
    (config: AxiosRequestConfig) => {
        console.log(config);
        // 在这里对config进行修改，例如：添加headers
        return config;
    },
    (error: Error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.data.code == 200) {
            return response.data;
        } else {
            return Promise.reject(`response返回错误：${codeMessage[response.data.code]}-${response.data.message}`);
        }

    },
    (error: any) => {
        // 集成全局错误处理
        console.log(error);
        let errorMessage = "请求错误";
        if (error.response) {
            const { status, data } = error.response;
            errorMessage = data.message || `请求错误：${codeMessage[status]}`;
        }

        console.log(`request请求失败:${errorMessage}--${error}`);

        return Promise.reject(errorMessage);
    }
);

export default request;