import React from 'react';
import AccountForm from './AccontFrom';
import classes from './Account.module.css';
const AccountInfo = () => (
  <div className={classes.main}>
    <div>
      <h1 className={classes['heading-bold']}>Let's get to know you...</h1>
      <p>Tell us more about yourself.</p>
    </div>
    <div>
      <AccountForm />
    </div>
  </div>
);
export default AccountInfo;
