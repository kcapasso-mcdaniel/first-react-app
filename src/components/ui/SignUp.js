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
      };
   }

   displayTheInputs() {
      this.setState({ isDisplayingSignUpForm: true });
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

      const lowerCaseEmailInput = signUpUserEmailInput.toLowerCase();
      //   check that email address is valid with regex
      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //   if user input is blank set the state to display the error message
      if (signUpUserEmailInput === "")
         this.setState({ emailError: "Please enter your email address." });
      //  if the email input does not contain any regex expression comparisions set the state to the error message
      else if (emailRegex.test(lowerCaseEmailInput) === false) {
         this.setState({ emailError: "Please enter a valid email address" });
      } else {
         this.setState({ emailError: "" });
      }
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
                              "is-invalid": this.state.emailError,
                           })}
                           id="signup-user-email-input"
                        />
                        <p className="text-danger">{this.state.emailError}</p>
                        <label htmlFor="signup-user-password-input">
                           Password
                        </label>
                        <input
                           type="password"
                           className="form-control"
                           id="signup-user-password-input"
                        />
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
