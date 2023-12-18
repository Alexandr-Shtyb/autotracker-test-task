import axios from 'axios'
import { API_DEVICES, TOKEN } from '../constants/global'
import { IPostObject } from './interfaces'

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json'
  },
}

export const getData = async () => {
  const res = await axios.get(`${API_DEVICES}`, options)
  return res
}

export const deleteObject = async (id: number) => {
  const res = await axios.delete(`${API_DEVICES}/${id}`, options)
  return res
}

export const addObject = async (data: IPostObject) => {
  const res = await axios.post(`${API_DEVICES}`, data, options)
  return res
}
