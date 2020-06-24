import React from "react";
import classnames from "classnames";

export default class SignUp extends React.Component {
   constructor(props) {
      super(props);
      console.log("In a new class component");
      this.state = {
         isDisplayingSignUpForm: false,
         firstNameError: "",
         lastNameError: "",
         emailError: "",
         passwordError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }

   displayTheInputs() {
      this.setState({ isDisplayingSignUpForm: true });
   }

   setEmailIsValidState(signUpUserEmailInput) {
      const lowerCaseEmailInput = signUpUserEmailInput.toLowerCase();

      //   check that email address is valid with regex
      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (signUpUserEmailInput === "")
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

   checkForLocalPart(signUpUserPasswordInput, signUpUserEmailInput) {
      const localPart = signUpUserEmailInput.split("@")[0];
      if (localPart.length < 4) return false;
      else return signUpUserPasswordInput.includes(localPart);
   }

   setPasswordIsValidState(signUpUserPasswordInput, signUpUserEmailInput) {
      console.log(signUpUserPasswordInput);
      const uniqPasswordInputChars = [...new Set(signUpUserPasswordInput)];
      console.log(uniqPasswordInputChars);
      if (signUpUserPasswordInput === "") {
         this.setState({
            passwordError: "Please create a password",
            hasPasswordError: true,
         });
      } else if (signUpUserPasswordInput.length < 9) {
         this.setState({
            passwordError: "Your password must be at least 9 characters.",
            hasPasswordError: true,
         });
      } else if (
         this.checkForLocalPart(signUpUserPasswordInput, signUpUserEmailInput)
      ) {
         this.setState({
            passwordError:
               "Your password cannot contain the local part of the email",
            hasPasswordError: true,
         });
      } else if (uniqPasswordInputChars.length < 3) {
         this.setState({
            passwordError:
               "Password must contain at least 3 unique characters.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   createAndValidateUser() {
      //    get the value of the first name
      const userFirstName = document.getElementById("user-first-name").value;
      console.log(userFirstName);
      if (userFirstName === "")
         this.setState({ firstNameError: "Field cannot be left blank" });
      else {
         this.setState({ firstNameError: "" });
      }
      //    get the value of the last name
      const userLastName = document.getElementById("user-last-name").value;
      console.log(userLastName);
      if (userLastName === "")
         this.setState({ lastNameError: "Field cannot be left blank" });
      else {
         this.setState({ lastNameError: "" });
      }
      //   get the value of the user email input
      const signUpUserEmailInput = document.getElementById(
         "signup-user-email-input"
      ).value;
      console.log(signUpUserEmailInput);

      // get the value of the user password input
      const signUpUserPasswordInput = document.getElementById(
         "signup-user-password-input"
      ).value;
      console.log(signUpUserPasswordInput);
      this.setEmailIsValidState(signUpUserEmailInput);
      this.setPasswordIsValidState(
         signUpUserPasswordInput,
         signUpUserEmailInput
      );
   }

   render() {
      return (
         <div className="col-xl-5 col-sm-6 col-12">
            <div className="card">
               <div className="card-body">
                  <h2 className="card-title">Welcome to the Team!</h2>
                  <h3>Click below to sign up!</h3>

                  {this.state.isDisplayingSignUpForm && (
                     <div className="sign-up-form">
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
                        <label htmlFor="signup-user-email-input">
                           Email Address
                        </label>
                        <input
                           type="email"
                           className={classnames({
                              "form-control": true,
                              "is-invalid": this.state.hasEmailError,
                           })}
                           id="signup-user-email-input"
                        />
                        <p className="text-danger">{this.state.emailError}</p>

                        <label htmlFor="signup-user-password-input">
                           Password
                        </label>
                        <input
                           type="password"
                           className={classnames({
                              "form-control": true,
                              "is-invalid": this.state.hasPasswordError,
                           })}
                           id="signup-user-password-input"
                        />
                        <p className="text-danger">
                           {this.state.passwordError}
                        </p>
                        <button
                           type="submit"
                           className="form-control btn btn-primary mt-2"
                           id="go-time-button"
                           onClick={() => {
                              this.createAndValidateUser();
                           }}
                        >
                           It's go time!
                        </button>
                     </div>
                  )}

                  {!this.state.isDisplayingSignUpForm && (
                     <button
                        type="button"
                        className="form-control btn btn-primary mt-2"
                        id="sign-up-button"
                        onClick={() => {
                           this.displayTheInputs();
                        }}
                     >
                        Sign up
                     </button>
                  )}
               </div>
            </div>
         </div>
      );
   }
}
