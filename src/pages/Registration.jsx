import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Card, Form, Input, Button, Progress, Popover } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const Registration = () => {
  const { t } = useTranslation();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card title={t("registration")}>
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
          {t("email")}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: t("required"),
              },
            ]}
          >
            <Input placeholder={t("email")} />
          </Form.Item>
        </div>

        <div>
          {t("password")}
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: t("required"),
              },
            ]}
          >
            <Input.Password placeholder={t("password")} />
          </Form.Item>
        </div>

        <div>
          {t("repeatPassword")}
          <Form.Item
            name="repeatPassword"
            rules={[
              {
                required: true,
                message: t("required"),
              },
            ]}
          >
            <Input.Password placeholder={t("repeatPassword")} />
          </Form.Item>
        </div>

        <div>
          {t("passwordStrength")}{" "}
          <Popover content={<span>{t("passwordRules")}</span>} trigger="hover">
            <InfoCircleOutlined style={{ marginLeft: 5, fontSize: 12 }} />
          </Popover>
          <Progress percent={0} showInfo={false} />
        </div>

        <div style={{ textAlign: "right" }}>
          {t("alreadyHaveAccount")} <Link to="/">{t("logIn!")}</Link>
        </div>

        <Form.Item style={{ marginTop: 20, marginBottom: 0 }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ margin: "0 auto", display: "block", minWidth: 140 }}
          >
            {t("signUp")}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Registration;
