import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState } from '../atom';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'password123';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === hardcodedUsername && password === hardcodedPassword) {
      setError('');
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return {
    username,
    password,
    error,
    setUsername,
    setPassword,
    handleSubmit,
  };
};

export default useLogin;
