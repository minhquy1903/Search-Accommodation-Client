import React, { useState, useEffect } from "react";
import { FastField, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import InputField from "../../components/Form/InputField";
import firebase from "../../firebase/firebaseConfig";
import userAPI from "../../api/userAPI";
import { comfirmPhone } from "../../redux/userSlice";

import "./PhoneConfirm.scss";
// import IUser from '../../interfaces/user';

declare global {
  interface Window {
    recaptchaVerifier: firebase.auth.RecaptchaVerifier;
    confirmationResult: any;
  }
}

interface IVerifyCode {
  verifyCode: string;
}

const initialValues = { verifyCode: "" };

window.recaptchaVerifier = window.recaptchaVerifier || {};

const PhoneConfirm: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  function setUpRecaptcha() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response: any) => {
          console.log("reCAPTCHA solved, allow signInWithPhoneNumber.");
        },
      },
    );
  }

  const formatPhoneNumber = (phone: string): string => {
    phone = phone.substring(1);
    phone = `+84${phone}`;
    return phone;
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInformation")!);

    const signInWithPhoneNumber = async () => {
      setPhoneNumber(user.phone);

      setUpRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      try {
        const confirmationResult = await firebase
          .auth()
          .signInWithPhoneNumber(formatPhoneNumber(phoneNumber), appVerifier);
        window.confirmationResult = confirmationResult;
        setConfirmationResult(confirmationResult);
      } catch (error) {
        console.log("loi roi dcm: " + error);
      }
    };
    signInWithPhoneNumber();
  }, [phoneNumber]);

  const verifyPhoneNumber = async (values: IVerifyCode) => {
    confirmationResult
      .confirm(values.verifyCode)
      .then(async (result: any) => {
        const phoneConfirmApi = await userAPI.phoneConfirm(phoneNumber);
        console.log(phoneConfirmApi);
        alert("X??c th???c s??t th??nh c??ng");

        dispatch(comfirmPhone(true));

        history.push("/");
      })
      .catch((error: any) => {
        alert("M?? OTP sai");
        console.log(error);
      });
  };

  return (
    <main id="main">
      <div className="container">
        <section className="phone-confirm">
          <div className="header-section">
            <span className="title">X??c th???c s??? ??i???n tho???i</span>
          </div>
          <div className="content-section">
            <Formik
              initialValues={initialValues}
              onSubmit={(values: IVerifyCode) => {
                verifyPhoneNumber(values);
              }}>
              {() => {
                return (
                  <Form className="confirm-form">
                    <div id="recaptcha-container"></div>
                    <p>
                      M?? x??c nh???n ???? ???????c g???i ?????n <b>{phoneNumber}</b>. Vui l??ng
                      nh???p m?? v??o b??n d?????i ????? ti???p t???c
                    </p>
                    <FastField
                      name="verifyCode"
                      component={InputField}
                      type="text"
                      label="M?? x??c th???c"
                      placeholder="Nh???p m?? x??c th???c"
                    />
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn submit-btn btn-success">
                        X??c th???c t??i kho???n, mi???n ph??
                      </button>
                    </div>
                    <p>B???n v???n ch??a nh???n ???????c m?? x??c th???c?</p>
                    <div className="form-group">
                      <button
                        className="btn submit-btn btn-normal"
                        type="button"
                        onClick={() => {
                          console.log("gui lai ma cho t");
                        }}>
                        G???i l???i m??
                      </button>
                    </div>
                    <p>
                      B???n g???p kh?? kh??n trong qu?? tr??nh x??c th???c t??i kho???n? Vui
                      l??ng g???i <b className="hotline">0964 564 273</b> ????? ch??ng
                      t??i h??? tr??? b???n
                    </p>
                    <div className="form-group">
                      <button
                        type="button"
                        className="btn submit-btn btn-normal">
                        ????ng xu???t
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PhoneConfirm;
