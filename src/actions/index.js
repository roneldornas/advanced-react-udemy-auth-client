import axios from 'axios';
import { AUTH_USER } from './types';

export const signup = (formProps) => dispacth => {
    axios.post('http://localhost:3090/signup', formProps);
};

