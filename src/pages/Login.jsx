import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Card, Form, Input, Button } from "antd";
import LangSelector from "../components/LangSelector";

const Login = () => {
  const { t } = useTranslation();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card title={t("login.login")} extra={<LangSelector />}>
      <Form
        name="login"
        size="large"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        validateTrigger="onSubmit"
        initialValues={{
          remember: true,
        }}
      >
        <div>
          {t("login.email")}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: t("login.required"),
              },
              {
                pattern: /^[\w\-\.]+@[\w\-\.]+$/,
                message: t("login.wrongEmailFormat"),
              },
            ]}
          >
            <Input placeholder={t("login.email")} />
          </Form.Item>
        </div>

        <div>
          {t("login.password")}
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: t("login.required"),
              },
            ]}
            style={{ marginBottom: 5 }}
          >
            <Input type="password" placeholder={t("login.password")} />
          </Form.Item>
        </div>

        <div style={{ textAlign: "right" }}>
          {t("login.dontHaveAccount")}{" "}
          <Link to="/sign-up">{t("login.signUp!")}</Link>
        </div>

        <Form.Item style={{ marginTop: 20, marginBottom: 0 }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ margin: "0 auto", display: "block", minWidth: 140 }}
          >
            {t("login.signIn")}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
