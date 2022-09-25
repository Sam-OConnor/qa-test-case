import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Card, Form, Input, Button, notification } from "antd";
import LangSelector from "../components/LangSelector";
import "./style.scss";

const Login = () => {
  const [qaTestDb, setQaTestDb] = useState(
    JSON.parse(localStorage.getItem("qaTestDb")) || []
  );
  const { t } = useTranslation();
  const [form] = Form.useForm();

  useEffect(() => {
    localStorage.setItem("qaTestDb", JSON.stringify(qaTestDb));
  }, [qaTestDb]);

  const openNotificationWithIcon = ({ type, message, description }) => {
    notification[type]({
      message,
      description,
    });
  };

  const onFinish = (values) => {
    const { email, password } = values;

    const usersByEmail = qaTestDb.filter((user) => user.email === email);

    if (!usersByEmail || usersByEmail.length === 0) {
      openNotificationWithIcon({
        type: "error",
        message: t("login.error"),
        description: t("login.userNotFound"),
      });
      return;
    }

    const result = usersByEmail.find((user) => user.password === password);

    if (!result) {
      openNotificationWithIcon({
        type: "error",
        message: t("login.error"),
        description: t("login.wrongPassword"),
      });
      return;
    } else {
      openNotificationWithIcon({
        type: "success",
        message: t("login.success"),
        description: "",
      });
      form.resetFields();
    }
  };

  return (
    <Card className="card" title={t("login.login")} extra={<LangSelector />}>
      <Form
        name="login"
        form={form}
        size="large"
        onFinish={onFinish}
        validateTrigger="onSubmit"
      >
        <div>
          {t("login.email")}
          <Form.Item
            className="input"
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
            className="input"
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
            className="button"
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
