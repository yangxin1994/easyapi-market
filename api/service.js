import axios from 'axios'

import {serviceUrl} from "./api";

/**
 * 获取服务列表
 */
export const getServiceList = params => axios.get(`${serviceUrl}/api/services`, {
  params: {
    ...params
  }
})

/**
 * 获取服务类型
 */
export const getServiceTypeList = () => axios.get(`${serviceUrl}/api/service/types`)
