import axios from 'axios';
import { createUserRequest } from '../interfaces/createUser'
import { loginRequest } from '../interfaces/login';
import { createOperationRequest } from '../interfaces/createOperation';

const api = axios.create({
  baseURL: 'http://localhost:32769/api',
});

export const insertOperation = async (operationData: createOperationRequest) => {
  try {
    const response = await api.post('/operations', operationData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('gipucmgpoc')}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const createUser = async (userData: createUserRequest) => {
  try {
    const response = await api.post('/users', userData, {
        headers :{
            'Content-Type': 'application/json'
        }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiLogin = async (loginData: loginRequest) => {
    try {
        const response = await api.post('/users/login', loginData, {
            headers :{
                'Content-Type': 'application/json'
            }
        });
        localStorage.setItem('gipucmgpoc',response.data);
        return true;
    } catch (error) {
        throw error;
    }
}
