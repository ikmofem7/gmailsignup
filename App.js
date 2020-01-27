import React, { Component } from "react";
import "./App.css";
import Form from "./validation.js";
class App extends Component {
  state = {
    name: "",
    nameError: "",
    border: "border focus",
    lastName: "",
    lastNameError: "",
    lastNameBorder: "border focus",
    email: "",
    emailError: "",
    border1: "border focus",
    password: "",
    passwordError: "",
    passwordBorder: "border focus",
    confirmPassword: "",
    confirmPasswordError: "",
    confirmPasswordBorder: "border focus",
    gmailClass: "gmail",
    passwordShow:true,
    icon:true,
    // className:
  };
  //   componentDidMount(){
  //     this.name.focus();
  //  }
  nameVerify = (event, name) => {
    if (name === "name") {
      this.setState({
        name: event.target.value
        // nameError: "",
        // border: "border focus"
      });
    }
    if (name === "lastName") {
      this.setState({
        lastName: event.target.value
        // lastNameError: ""
        // lastNameBorder: "border focus"
      });
    }
    if (name === "email") {
      this.setState({
        email: event.target.value
        // emailError: ""
        // border1: "border focus"
      });
    }
    if (name === "password") {
      this.setState({
        password: event.target.value
        // passwordError: ""
        // passwordBorder: "border focus"
      });
    }
    if (name === "confirmPassword") {
      this.setState({
        confirmPassword: event.target.value
        // confirmPasswordError: ""
        // confirmPasswordborder: "border focus"
      });
    }
  };
  validateForm = () => {
    let status;
    let regex = /(\w)\1{2,}/;
    let alphaRegex = /^[A-Za-z]+$/;
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // console.log(regex.test(this.state.name));
    // first name
    if (!this.state.name) {
      this.setState({
        nameError: "Enter first name",
        border: "redBorder error"
      });
      status = false;
      // console.log(regex.test(this.state.name));
    } else if (
      this.state.name.length < 3 ||
      alphaRegex.test(this.state.name) === false ||
      regex.test(this.state.name) === false
    ) {
      this.setState({
        nameError: "Enter valid name",
        border: "redBorder error"
      });
      status = false;
    } else {
      console.log("ok");
      this.setState({
        nameError: "",
        border: "border focus"
      });
      console.log(this.state.border);
    }
    // Last name
    if (!this.state.lastName) {
      this.setState({
        lastNameError: "Enter last name",
        lastNameBorder: "redBorder error"
      });
      status = false;
      // console.log(regex.test(this.state.lastName));
    } else if (
      this.state.lastName.length < 3 ||
      alphaRegex.test(this.state.lastName) === false ||
      regex.test(this.state.lastName) === false
    ) {
      this.setState({
        lastNameError: "Enter valid name",
        lastNameBorder: "redBorder error"
      });
      status = false;
    } else {
      this.setState({
        lastNameError: "",
        lastNameBorder: "border focus"
      });
      // console.log(this.state.border);
    }
    // email error
    if (!this.state.email) {
      this.setState({
        emailError: "Choose a Gmail address",
        border1: "redBorder error",
        gmailClass: "gmail1"
      });
      status = false;
    } 
    // else if (this.state.email.length<3) {
    //   this.setState({
    //     emailError: "Enter valid email",
    //     border1: "redBorder error",
    //     gmailClass: "gmail1"
    //   });
    //   status = false;
    // }
     else {
      this.setState({
        emailError: "",
        border1: "border focus",
        gmailClass: "gmail"
      });
    }
    // password error
    if (this.state.password != "") {
      this.setState({
        passwordError: "",
        passwordBorder: "border focus"
      });
      console.log(this.state.password);
      console.log(reg.test(this.state.password));
      if (this.state.password.length > 8) {
        console.log("ok");
        this.setState({
          passwordError: "",
          passwordBorder: "border focus"
        });
      } else {
        this.setState({
          passwordError: "Use 8 characters or more for your password",
          passwordBorder: "redBorder error"
        });
        status = false;
      }
      if (this.state.confirmPassword != "") {
        this.setState({
          confirmPasswordError: "",
          confirmPasswordBorder: "border focus"
        });
        if (this.state.password === this.state.confirmPassword) {
          this.setState({
            confirmPasswordError: "",
            confirmPasswordBorder: "border focus"
          });
        } else {
          this.setState({
            confirmPasswordError: "Those passwords didn't match. Try again.",
            confirmPasswordBorder: "redBorder error"
          });
          status = false;
        }
      } else {
        this.setState({
          confirmPasswordError: "Confirm a password",
          confirmPasswordBorder: "redBorder error"
        });
        status = false;
      }
    } else {
      this.setState({
        passwordError: "Enter a password",
        passwordBorder: "redBorder error"
      });
      console.log(this.state.password);
      console.log(this.state.confirmPassword);
      status = false;
    }
    console.log(status);
    return status;
  };
  showPassword=()=> {
    this.setState({ passwordShow: !this.state.passwordShow,icon:!this.state.icon });
  }
  render() {
    const style = {
      color: "white",
      background: "#1a73e8",
      border: "none",
      cursor: "pointer",
      float: "right",
      marginTop: "-21px",
      padding: "8px 30px",
      borderRadius: "3px",
      letterspacing: ".25px"
    };
    const colorChange = { color: this.state.color };
    return (
      <React.Fragment>
        <div className="container">
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "16%" }}
          >
            <div className="col-md-9">
              <div className="card">
                <div className="row" style={{paddingBottom:"8%"}}>
                  <div className="col-md-7">
                    <div className="google">
                      <span style={{ color: " #4688f1" }} className="f-22">
                        G
                      </span>
                      <span style={{ color: " #e83d30" }}>o</span>
                      <span style={{ color: " #ffd400" }}>o</span>
                      <span style={{ color: " #4688f1" }}>g</span>
                      <span style={{ color: " #009900" }}>l</span>
                      <span style={{ color: " #e83d30" }}>e</span>
                    </div>
                    <form style={{ paddingLeft: "30px", paddingTop: "10px" }}>
                      <h1 className="head">Create your Google Account</h1>
                      {console.log(this.state.border)}
                      <div className="row">
                        <div className="col-md-6">
                          <Form
                            autoFocus={true}
                            className="input-container"
                            type="text"
                            id="label"
                            required="required"
                            value={this.state.name}
                            inputClassName={this.state.border}
                            onChange={e => this.nameVerify(e, "name")}
                            name="First name"
                            style={{ marginTop: "10%" }}
                            barClassName="bar"
                            color={{ color: "#d50000" }}
                            error={this.state.nameError}
                          />
                        </div>
                        <div className="col-md-6">
                          <Form
                            className="input-container "
                            type="text"
                            id="label"
                            required="required"
                            value={this.state.lastName}
                            inputClassName={this.state.lastNameBorder}
                            onChange={e => this.nameVerify(e, "lastName")}
                            name="Last name"
                            style={{ marginTop: "10%" }}
                            barClassName="bar"
                            color={{ color: "#d50000" }}
                            error={this.state.lastNameError}
                          />
                        </div>
                      </div>
                      <Form
                        style={{ marginTop: "32px" }}
                        className="input-container"
                        type="type"
                        id="label"
                        required="required"
                        value={this.state.email}
                        inputClassName={this.state.border1}
                        onChange={e => this.nameVerify(e, "email")}
                        name="Username"
                        barClassName="bar"
                        color={{ color: "#d50000" }}
                        error={this.state.emailError}
                      />
                      <span className={this.state.gmailClass}>@gmail.com</span>
                      <div className="fontBelow">
                        You can use letters, numbers & periods
                      </div>
                      <p className="blueColor">
                        Use my current email address instead
                      </p>

                      <div className="row" style={{ marginTop: "20px" }}>
                        <div className="col-md-5">
                          <Form
                            className="input-container"
                            type={this.state.passwordShow ? "password":"text"}
                            id="label"
                            required="required"
                            value={this.state.password}
                            inputClassName={this.state.passwordBorder}
                            onChange={e => this.nameVerify(e, "password")}
                            maxLength="14"
                            name="Password"
                            barClassName="bar"
                            color={{ color: "#d50000" }}
                            error={this.state.passwordError}
                          />
                        </div>
                        <div className="col-md-5">
                          <Form
                            className="input-container"
                            type={this.state.passwordShow ? "password":"text"}
                            id="label"
                            required="required"
                            value={this.state.confirmPassword}
                            inputClassName={this.state.confirmPasswordBorder}
                            onChange={e =>
                              this.nameVerify(e, "confirmPassword")
                            }
                            maxLength="14"
                            name="Confirm"
                            barClassName="bar"
                            color={{ color: "#d50000" }}
                            error={this.state.confirmPasswordError}
                          />
                        </div>
                        <i className={this.state.icon ? "fas fa-eye-slash":"fas fa-eye" } onClick={this.showPassword.bind(this)}></i>
                        {/* <i class="fas fa-eye"></i> */}
                      </div>
                      <div className="fontBelow">
                        {" "}
                        Use 8 or more characters with a mix of letters, numbers
                        & symbols
                      </div>
                      <div style={{ marginTop: "50px" }}>
                        <div className="blueColor">Sign in instead</div>
                        <button
                          type="button"
                          style={style}
                          onClick={this.validateForm}
                        >
                          Next
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-5">
                    <img src={require("./account.svg")} style={{marginTop:"34%"}} />
                    <p className="imgBottom">One account. All of Google working for you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
