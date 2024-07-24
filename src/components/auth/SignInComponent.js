import React, { useState } from 'react';

const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('');
  const [roleType, setRoleType] = useState('');

  const submitHandler = (e) => {};

  return (
    <div>
      SignInComponent
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="loginType">Login Type:</label>
          <select
            id="loginType"
            value={loginType}
            onChange={(e) => setLoginType(e.target.value)}
            required
          >
            <option value="normal">normal</option>
            <option value="admin">admin</option>
          </select>
        </div>
        <div>
          <label htmlFor="roleType">Role Type:</label>
          <select
            id="roleType"
            value={roleType}
            onChange={(e) => setRoleType(e.target.value)}
            required
          >
            <option value="normal">normal</option>
            <option value="naver">naver</option>
            <option value="google">google</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignInComponent;
