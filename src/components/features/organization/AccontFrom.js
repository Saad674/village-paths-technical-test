import {useState} from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
const AccountForm = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <Form
      style={{ marginTop: '2rem'}}
      className
      name="basic"
      size="large"
      initialValues={{ remember: false }}
      onFinish={() => {
        history.push('/join-ogranization');
      }}
    >
      <Row>
        <Col span="24">
          <Form.Item
            name="email"
            className="form-input"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please enter your email!',
              },
            ]}
          >
            <Input value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span="12">
          <Form.Item
            name="first name"
            className="form-input"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Item>
        </Col>
        <Col span="11">
          <Form.Item
            name="last name"
            className="form-input"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="password"
        className="form-input"
        rules={[{ required: true, message: 'Please enter your password!' }]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button
          style={{
            backgroundColor: '#36507E',
            color: 'white',
            borderRadius: '7px',
          }}
          htmlType="submit"
        >
          Continue
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AccountForm;
