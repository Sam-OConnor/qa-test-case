import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Card,
  Form,
  Input,
  Button,
  Progress,
  Popover,
  notification,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import LangSelector from "../components/LangSelector";
import "./style.scss";

const lowerCaseRegex = "(?=.*[a-z])";
const upperCaseRegex = "(?=.*[A-Z])";
const symbolsRegex = "(?=.*[!@#$%^&*])";
const numericRegex = "(?=.*[0-9])";

const passwordRegex = new RegExp(
  `^((${lowerCaseRegex}${upperCaseRegex}${symbolsRegex})|(${lowerCaseRegex}${upperCaseRegex}${numericRegex})|(${lowerCaseRegex}${symbolsRegex}${numericRegex})|(${upperCaseRegex}${symbolsRegex}${numericRegex}))(?=.{8,})`
);

const Registration = () => {
  const [qaTestDb, setQaTestDb] = useState(
    JSON.parse(localStorage.getItem("qaTestDb")) || []
  );
  const { t } = useTranslation();
  const [form] = Form.useForm();

  useEffect(() => {
    localStorage.setItem("qaTestDb", JSON.stringify(qaTestDb));
  }, [qaTestDb]);

  const onFinish = (values) => {
    const { email, password } = values;
    setQaTestDb([
      ...qaTestDb,
      {
        email,
        password,
      },
    ]);

    openNotificationWithIcon({
      type: "error",
      message: t("register.success"),
    });

    form.resetFields();
  };

  const openNotificationWithIcon = ({ type, message }) => {
    notification[type]({
      message,
    });
  };

  return (
    <Card
      className="card"
      title={t("register.registration")}
      extra={<LangSelector />}
    >
      <Form
        name="login"
        size="large"
        form={form}
        onFinish={onFinish}
        onFinishFailed={() => {
          const errors = form.getFieldsError();
          form.resetFields();
          form.setFields(errors);
        }}
        validateTrigger="onSubmit"
      >
        <div>
          {t("register.email")}
          <Form.Item
            className="input"
            name="email"
            rules={[
              {
                required: true,
                message: t("register.required"),
              },
              {
                pattern: /^[\w\-\@]+[\.]{1}[\w-]{2,4}$/,
                message: t("register.wrongEmailFormat"),
              },
            ]}
          >
            <Input placeholder={t("register.emails")} />
          </Form.Item>
        </div>

        <div>
          {t("register.password")}
          <Form.Item
            className="input"
            name="password"
            rules={[
              {
                pattern: passwordRegex,
                message: t("register.passwordRules"),
              },
            ]}
          >
            <Input.Password placeholder={t("register.password")} />
          </Form.Item>
        </div>

        <div>
          {t("register.repeatPasword")}
          <Form.Item
            className="input"
            name="repeatPassword"
            rules={[
              {
                required: true,
                message: t("register.required"),
              },
            ]}
          >
            <Input.Password placeholder={t("register.repeadPassword")} />
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
            className="button"
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
