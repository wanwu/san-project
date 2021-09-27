/**
 * @file services/index.ts
 * @author {{author}}
 */
import {get, post} from 'axios';

export const getData = () => get('/api/getData');
export const publish = data => post('/api/publish', data);
