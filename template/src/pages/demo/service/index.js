/**
 * @file services/index.js
 * @author {{author}}
 */
import {get} from 'axios';

export const getData = () => get('/api/getData');
export const publish = data => post('/api/publish', data);
