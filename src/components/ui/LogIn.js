import React from "react";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";

export default class LogIn extends React.Component {
   constructor(props) {
      super(props);
      console.log("In a new class component");
      this.state = {
         isDisplayingSignInForm: false,
         firstNameError: "",
         lastNameError: "",
         emailError: "",
         passwordError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }
   displaySignInInputs() {
      this.setState({ isDisplayingSignInForm: true });
   }

   async setEmailIsValidState(logInUserEmailInput) {
      const lowerCaseEmailInput = logInUserEmailInput.toLowerCase();

      //   check that email address is valid with regex
      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (logInUserEmailInput === "")
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      else if (emailRegex.test(lowerCaseEmailInput) === false) {
         this.setState({
            emailError: "Please enter a valid email address",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   async setPasswordIsValidState(logInUserPasswordInput) {
      console.log(logInUserPasswordInput);
      const uniqPasswordInputChars = [...new Set(logInUserPasswordInput)];
      console.log(uniqPasswordInputChars);
      if (logInUserPasswordInput === "") {
         this.setState({
            passwordError: "Please create a password",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async createAndValidateUser() {
      //    get the value of the first name
      const userFirstNameInput = document.getElementById("user-first-name")
         .value;
      console.log(userFirstNameInput);
      if (userFirstNameInput === "")
         this.setState({ firstNameError: "Field cannot be left blank" });
      else {
         this.setState({ firstNameError: "" });
      }
      //    get the value of the last name
      const userLastNameInput = document.getElementById("user-last-name").value;
      console.log(userLastNameInput);
      if (userLastNameInput === "")
         this.setState({ lastNameError: "Field cannot be left blank" });
      else {
         this.setState({ lastNameError: "" });
      }
      //   get the value of the user email input
      const logInUserEmailInput = document.getElementById(
         "login-user-email-input"
      ).value;
      console.log(logInUserEmailInput);

      // get the value of the user password input
      const logInUserPasswordInput = document.getElementById(
         "login-user-password-input"
      ).value;
      console.log(logInUserPasswordInput);
      await this.setEmailIsValidState(logInUserEmailInput);
      await this.setPasswordIsValidState(
         logInUserPasswordInput,
         logInUserEmailInput
      );
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         const user = {
            createId: getUuid(),
            firstName: userFirstNameInput,
            lastName: userLastNameInput,
            userEmail: logInUserEmailInput,
            userPassword: hash(logInUserPasswordInput),
            createdOn: Date.now(),
         };
         console.log(user);
      }
   }

   render() {
      return (
         <div className="col-xl-5 col-sm-6 col-12 mt-2">
            <div className="card">
               <div className="card-body">
                  <h2 className="card-title">Welcome Back!</h2>

                  {this.state.isDisplayingSignInForm && (
                     <div className="sign-in-form">
                        <h3>Time to check your knowledge!</h3>
                        <label htmlFor="user-first-name">First Name</label>
                        <input
                           type="text"
                           className={classnames({
                              "form-control": true,
                              "is-invalid": this.state.firstNameError,
                           })}
                           id="user-first-name"
                        />
                        <p className="text-danger">
                           {this.state.firstNameError}
                        </p>
                        <label htmlFor="user-last-name">Last Name</label>
                        <input
                           type="text"
                           className={classnames({
                              "form-control": true,
                              "is-invalid": this.state.lastNameError,
                           })}
                           id="user-last-name"
                        />
                        <p className="text-danger">
                           {this.state.lastNameError}
                        </p>
                        <label htmlFor="login-user-email-input">
                           Email Address
                        </label>
                        <input
                           type="email"
                           className={classnames({
                              "form-control": true,
                              "is-invalid": this.state.hasEmailError,
                           })}
                           id="login-user-email-input"
                        />
                        {this.state.hasEmailError && (
                           <p className={"text-danger"}>
                              {this.state.emailError}
                           </p>
                        )}

                        <label htmlFor="login-user-password-input">
                           Password
                        </label>
                        <input
                           type="password"
                           className={classnames({
                              "form-control": true,
                              "is-invalid": this.state.hasPasswordError,
                           })}
                           id="login-user-password-input"
                        />
                        {this.state.hasPasswordError && (
                           <p className={"text-danger"}>
                              {this.state.passwordError}
                           </p>
                        )}
                        <button
                           type="submit"
                           className="form-control btn btn-primary mt-2"
                           onClick={() => {
                              this.createAndValidateUser();
                           }}
                        >
                           Log in
                        </button>
                     </div>
                  )}

                  {!this.state.isDisplayingSignInForm && (
                     <button
                        type="button"
                        className="form-control btn btn-primary mt-2"
                        onClick={() => {
                           this.displaySignInInputs();
                        }}
                     >
                        Sign in
                     </button>
                  )}
               </div>
            </div>
         </div>
      );
   }
}
