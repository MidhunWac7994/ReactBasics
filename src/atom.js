import { atom } from 'recoil';

export const isLoggedInState = atom({
  key: 'isLoggedInState', 
  default: localStorage.getItem('isLoggedIn') === 'true', 
});
  

export const sidebarOpenState = atom({
  key: 'sidebarOpenState',
  default: false, 
});
