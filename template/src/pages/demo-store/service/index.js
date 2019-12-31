/**
 * @file services/index.js
 * @author {{author}}
 */
import fly from 'flyio';

export const getData = () => fly.get('/api/getData');
export const publish = data => fly.post('/api/publish', data);
