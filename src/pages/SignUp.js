import React from "react";
import "../assets/index.css";

const SignUp = () => {
  return (
    <div className="col col-md-9 col-lg-12  mt-5">
      <div className="row justify-content-center mt-5 mx-0">
        <div className="col col-md-5" id="lodin-reg-card">
          <div className="row text-center mt-md-2 mb-md-1">
            <h1 style={{ color: "#32B0C7" }}>إنشاء حساب</h1>
          </div>
          <form className="mb-5">
            {/* {<!-- First Name input -->} */}
            <div className="form-outline mb-4">
              <input type="text" id="firstName" class="form-control" />
              <label className="form-label" for="firstName">
                الأسم الأول
              </label>
            </div>
            {/* {<!-- Second Name input -->} */}
            <div className="form-outline mb-4">
              <input type="text" id="secondName" class="form-control" />
              <label className="form-label" for="secondName">
                اسم العائلة
              </label>
            </div>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <input type="email" id="email" class="form-control" />
              <label className="form-label" for="email">
                البريد الإلكتروني
              </label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              <input type="password" id="pass" class="form-control" />
              <label className="form-label" for="pass">
                الرقم السري
              </label>
            </div>

            {/* <!-- Confirm Password input --> */}
            <div className="form-outline mb-4">
              <input type="password" id="conPass" class="form-control" />
              <label className="form-label" for="ConPass">
                تأكيد الرقم السري
              </label>
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}

            {/* <!-- Submit button --> */}
            <div className="row px-5">
              <button
                type="button"
                id="signUp-btn"
                class="btn btn-block mb-4 login-btn"
              >
                أنشئ حساب
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
