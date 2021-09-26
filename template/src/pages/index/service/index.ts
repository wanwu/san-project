/**
 * @file services/index.ts
 * @author {{author}}
 */
import axios from 'axios';

export const getData = () => axios.get('/api/getData');
export const publish = data => axios.post('/api/publish', data);
