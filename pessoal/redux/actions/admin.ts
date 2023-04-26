import { ADMIN_USER } from './actionTypes/admin'

export const adminUser=admin => { 
     return { 
         type: ADMIN_USER, 
         payload: admin 
     } 
 }