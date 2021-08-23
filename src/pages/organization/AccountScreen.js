import React from 'react';
import { useHistory } from 'react-router-dom';
import Account from 'components/features/organization/Account';
import ImageSection from 'components/common/organization/ImageSection';
import { Row, Col } from 'antd';
import UserCard from 'assets/svg/user-cards.svg';
import Icon from 'components/common/organization/ArrowIcon';
import classes from './Account.module.css';
const AccountScreen = () => {
  const history = useHistory();
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={13} span={13} className={classes.main}>
          <Row>
            <Col span="1" className={classes['arrow-section']}>
              <span
                onClick={() => {
                  history.goBack();
                }}
              >
                <Icon />
              </span>
            </Col>
            <Col  xs={22} sm={22} md={14} span={14} className={classes['account-section']}>
              <Account/>
            </Col>
          </Row>
        </Col>
        <Col
          xs={24} sm={24} md={24} lg={11} span={11}  
          className={classes['img-section']}
        >
          <div>
            <ImageSection url={UserCard} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default AccountScreen;
