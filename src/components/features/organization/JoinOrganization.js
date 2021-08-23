import React from 'react';
import { Card, Button, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import classes from './JoinOrganization.module.css';
const JoinOrganizatin = () => {
  const organization = useSelector(state => state.organization.organization);
  const isLoading = useSelector(state => state.organization.loading);
  return (
    <div className={classes.main}>
      <div>
        <h1 className={classes['heading-bold']}>
          Join your organization in Village Hub
        </h1>
        <p>
          The organization allow anyone from <span className={classes['heading-bold']}>@villagecreed.com</span> to join:
        </p>
      </div>
      <div>
        <Card loading={isLoading} bodyStyle={{ padding: '12px 24px' }}>
          {!isLoading && organization && <Row align="middle">
            <Col span="4">
              <img
                className={classes['img-logo']}
                src={organization.profileImage.url}
                alt="organization logo"
              />
            </Col>
            <Col span="16">
              <div>
                <h4 className={classes['org-name']}>
                  {organization.name}
                </h4>
                <p className={classes['org-members']}>
                  {`${organization.memberCount} members`}
                </p>
              </div>
            </Col>
            <Col span="4">
              <Button
                style={{
                  background: '#36507E',
                  color: 'white',
                  borderRadius: '5px',
                }}
              >
                Join
              </Button>
            </Col>
          </Row> } 
        </Card>
      </div>
      <div className={classes['create-org']}>
        <Button icon={<PlusOutlined />} type="dashed">
          Create a new Organizatin
        </Button>
      </div>
    </div>
  );
};
export default JoinOrganizatin;
