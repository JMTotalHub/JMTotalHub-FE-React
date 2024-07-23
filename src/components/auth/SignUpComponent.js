import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSignUpByUserData from '../../features/auth/actions/SignUpAction';
import { useNavigate } from 'react-router-dom';

const SignUpComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('');
  const [roleType, setRoleType] = useState('');

  const { status, error } = useSelector((state) => state.signUp);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (status === 'succeeded') {
    navigate('/');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      authSignUpByUserData({
        email,
        password,
        loginType,
        roleType,
      })
    );
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="loginType"
          value={loginType}
          onChange={(e) => setLoginType(e.target.value)}
        ></input>
        <input
          type="roleType"
          value={roleType}
          onChange={(e) => setRoleType(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpComponent;
