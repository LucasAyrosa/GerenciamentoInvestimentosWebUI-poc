import axios from 'axios';
import { createUserRequest } from '../interfaces/createUser'
import { loginRequest } from '../interfaces/login';

const api = axios.create({
  baseURL: 'http://localhost:32771/api',
});

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

export const login = async (loginData: loginRequest) => {
    try {
        const response = await api.post('/users/login', loginData, {
            headers :{
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
