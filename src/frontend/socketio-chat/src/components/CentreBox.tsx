import React from 'react';

const CentreBox: React.FC = ({ children }) => (
  <div className="login-page d-flex align-items-center flex-column w-100 bg-dark bg-opacity-10">
    <div className="flex-grow-1" />
    <div className="login-box card">
      <div className="card-body">
        <div className="d-flex flex-column align-items-center login-pages-brand">
          <h1>Chat App</h1>
        </div>
        <div className="p-2 my-3">{children}</div>
      </div>
    </div>
    <div className="flex-grow-1" />
  </div>
);

export default CentreBox;
