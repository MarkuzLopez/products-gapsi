import http from '../constants/config';

// export const getProducts = () => http.get('products');
// productos/reloj/3
export const getProducts = ({ category, page } ) => http.get(`productos/${category}/${page}`);

export const newVisitor = () => http.post('visitor');