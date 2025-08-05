import axios from "axios"
import { toast } from "react-toastify"

type METHOD_TYPES = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

const errorHandler = (error: any, showErrors: boolean, disableRedirection?: boolean) => {
    console.log('error: ', JSON.stringify(error?.response, null, 2))
    if (error?.name != 'CanceledError' && showErrors)
        toast.error(error?.response?.data?.message || 'Something Went Wrong!')
    if (!disableRedirection && error?.response?.status == 401) {
        
    }
}

const apiRequest = async (method: METHOD_TYPES, endpoint: string, data?: object, showErrors: boolean = true, disableRedirection?: boolean, extraHeaders?: any, controller?: AbortController) => {
    try {
        const headers = {
            'accept': 'application/json',
            'content-type': 'multipart/form-data',
            ...extraHeaders
        }
        // const token = store.getState()?.auth?.user?.token
        // if (token)
        //     headers.authorization = `Bearer ${token}`
        return await axios({
            method,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`,
            data,
            headers,
            signal: controller?.signal
        })
    } catch (error) {
        errorHandler(error, showErrors,disableRedirection)
    }
}

export default apiRequest