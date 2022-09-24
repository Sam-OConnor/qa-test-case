import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Card, Form, Input, Button, Progress, Popover } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import LangSelector from "../components/LangSelector";

const Registration = () => {
  const { t } = useTranslation();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card title={t("register.registration")} extra={<LangSelector />}>
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
          {t("register.email")}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: t("register.required"),
              },
            ]}
          >
            <Input placeholder={t("register.email")} />
          </Form.Item>
        </div>

        <div>
          {t("register.password")}
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: t("register.required"),
              },
            ]}
          >
            <Input.Password placeholder={t("register.password")} />
          </Form.Item>
        </div>

        <div>
          {t("register.repeatPassword")}
          <Form.Item
            name="repeatPassword"
            rules={[
              {
                required: true,
                message: t("register.required"),
              },
            ]}
          >
            <Input.Password placeholder={t("register.repeatPassword")} />
          </Form.Item>
        </div>

        <div>
          {t("register.passwordStrength")}{" "}
          <Popover
            content={<span>{t("register.passwordRules")}</span>}
            trigger="hover"
          >
            <InfoCircleOutlined style={{ marginLeft: 5, fontSize: 12 }} />
          </Popover>
          <Progress percent={0} showInfo={false} />
        </div>

        <div style={{ textAlign: "right" }}>
          {t("register.alreadyHaveAccount")}{" "}
          <Link to="/">{t("register.logIn!")}</Link>
        </div>

        <Form.Item style={{ marginTop: 20, marginBottom: 0 }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ margin: "0 auto", display: "block", minWidth: 140 }}
          >
            {t("register.signUp")}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Registration;
