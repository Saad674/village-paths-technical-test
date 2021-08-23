import React from 'react';
import Organizatin from 'components/features/organization/JoinOrganization';
import ImageSection from 'components/common/organization/ImageSection';
import { Row, Col } from 'antd';
import JoinOrg from 'assets/svg/join-org.svg';
import Icon from 'components/common/organization/ArrowIcon';
import { useHistory } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import {organizationActions} from 'redux/organization/index';
import classes from './JoinOrganization.module.css';
const OrganizationScreen = () => {
  const dispatch = useDispatch(); 
  const history = useHistory();
  React.useEffect(() => {
    dispatch(organizationActions.getOrganization());
  },[]);
  return (
    <div>
      <Row>
        <Col span="13">
          <Row>
            <Col className={classes['arrow-section']} span="1">
              <span
                onClick={() => {
                  history.goBack();
                }}
              >
                <Icon />
              </span>
            </Col>
            <Col span="13" className={classes['org-section']}>
              <Organizatin />
            </Col>
          </Row>
        </Col>
        <Col
          span="11"
          className={classes['img-section']}
        >
          <div>
            <ImageSection url={JoinOrg} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default OrganizationScreen;
