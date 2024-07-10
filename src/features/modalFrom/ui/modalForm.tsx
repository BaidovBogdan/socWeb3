import { Modal, Form, Input, Checkbox, Button } from 'antd';
import { useState } from 'react';

interface ModalFormProps {
  modalVisible: boolean;
  closeModal: () => void;
  btnOk: () => void;
  setUserName?: (value: string) => void;
  setPasswordOne?: (value: string) => void;
  setPasswordTwo?: (value: string) => void;
  setEmail?: (value: string) => void;
}
interface FieldType {
  username?: string;
  email?: string;
  passwordOne?: string;
  passwordTwo?: string;
  remember?: string;
}

export default function ModalForm({
  modalVisible,
  closeModal,
  btnOk,
  setUserName,
  setPasswordOne,
  setPasswordTwo,
  setEmail,
}: ModalFormProps) {
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <>
      {!isLogin && (
        <Modal
          title="Вход"
          open={modalVisible}
          onOk={btnOk}
          onCancel={closeModal}
        >
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              className="mr-4"
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input onChange={(e) => setUserName?.(e.target.value)} />
            </Form.Item>

            <Form.Item<FieldType>
              className="mr-4"
              label="Password"
              name="passwordOne"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                onChange={(e) => setPasswordOne?.(e.target.value)}
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox className="mr-10">Remember me</Checkbox>
              <Button className="ml-48" onClick={() => checkLogin()}>
                создать аккаунт
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}

      {isLogin && (
        <Modal
          title="Регистрация"
          open={modalVisible}
          onOk={btnOk}
          onCancel={closeModal}
        >
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              className="mr-4"
              label="Email"
              name={'email'}
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input onChange={(e) => setEmail?.(e.target.value)} />
            </Form.Item>
            <Form.Item<FieldType>
              className="mr-4"
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input onChange={(e) => setUserName?.(e.target.value)} />
            </Form.Item>

            <Form.Item<FieldType>
              className="mr-4"
              label="Password"
              name="passwordTwo"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                onChange={(e) => setPasswordTwo?.(e.target.value)}
              />
            </Form.Item>
            <Form.Item<FieldType>
              className="mr-4"
              label="Password"
              name="passwordOne"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                onChange={(e) => setPasswordOne?.(e.target.value)}
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            ></Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
}
