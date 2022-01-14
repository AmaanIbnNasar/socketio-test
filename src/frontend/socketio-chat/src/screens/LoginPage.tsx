import React, { useState } from 'react';
import CentreBox from '../components/CentreBox';
import { useAppDispatch } from '../state/StateContext';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const dispatch = useAppDispatch();
  return (
    <CentreBox>
      <form onSubmit={(event) => {
        event.preventDefault();
        dispatch({ type: 'USER:SET_NAME', userName: username });
      }}
      >
        <label htmlFor="username-input" className="form-label">
          Enter username:
          <input id="username-input" className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <input className="btn btn-success ms-3" type="submit" value="Submit" />
      </form>
    </CentreBox>
  );
};

export default LoginPage;
