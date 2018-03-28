import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Radio,
  Checkbox,
  Button
} from "react-bootstrap";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import SimpleStorage, {
  clearStorage,
  resetParentState
} from "react-simple-storage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Initial Text",
      password: "",
      blacklist: ["password"],
      ignoreList: [],
      blacklistText: false,
      ignoreText: false,
      blacklistPassword: true,
      ignorePassword: false
    };

    this.initialState = this.state;
  }

  render() {
    const formattedBlacklist = JSON.stringify(this.state.blacklist);
    const formattedIgnorelist = JSON.stringify(this.state.ignoreList);

    const renderHeader = () => {
      return (
        <Row
          className="show-grid"
          style={{ backgroundColor: "#20232a", padding: 20 }}
        >
          <div style={{ maxWidth: 1000, margin: "auto", padding: "0px 50px" }}>
            <h3 style={{ color: "#61dafb", fontWeight: "bold" }}>
              React Simple Storage
            </h3>
            <p style={{ color: "#f2f2f2" }}>
              Simple drop-in component and helper functions for using
              localStorage with React.
            </p>
          </div>
        </Row>
      );
    };

    const renderContructor = () => {
      return (
        <Col
          xs={12}
          style={{
            border: "1px solid #d8d8d8",
            borderRadius: 3,
            padding: "20px 20px",
            backgroundColor: "#fcfcfc",
            marginBottom: 50
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-12px",
              left: "-20px",
              padding: "0px 5%"
            }}
          >
            <code
              style={{
                fontSize: "100%",
                color: "rgb(32, 35, 42)",
                backgroundColor: "#EFF4FF"
              }}
            >
              {`constructor(props) { \n`}
              <br />
            </code>
          </div>
          <Row>
            <Col xs={12} style={{ padding: "0px 5%" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h5 style={{ color: "rgb(32, 35, 42)" }}>this.state = {""}</h5>
                <pre
                  style={{
                    margin: "0px 5px",
                    padding: "2px 5px"
                  }}
                >
                  {`{ text: "${this.state.text}", password: "${
                    this.state.password
                  }" }`}
                </pre>
                <h5 style={{ color: "rgb(32, 35, 42)" }}>{``}</h5>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h5 style={{ color: "rgb(32, 35, 42)" }}>
                  this.initialState ={" "}
                </h5>
                <pre
                  style={{
                    margin: "0px 5px",
                    padding: "2px 5px"
                  }}
                >
                  {`{ text: "Initial Text", password: "" }`}
                </pre>
              </div>
            </Col>
          </Row>
          <div
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "-20px",
              padding: "0px 5%"
            }}
          >
            <code
              style={{
                fontSize: "100%",
                color: "rgb(32, 35, 42)",
                backgroundColor: "#EFF4FF"
              }}
            >
              {" }"}
            </code>
          </div>
        </Col>
      );
    };

    const renderStorageForm = () => {
      return (
        <Col
          xs={12}
          style={{
            border: "1px solid #d8d8d8",
            borderRadius: 3,
            padding: "20px 20px",
            backgroundColor: "#fcfcfc"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-12px",
              left: "-20px",
              padding: "0px 5%"
            }}
          >
            <code
              style={{
                fontSize: "100%",
                color: "rgb(32, 35, 42)",
                backgroundColor: "#EFF4FF"
              }}
            >
              {"<SimpleStorage "}
            </code>
          </div>
          <Row>
            <Col xs={12} style={{ padding: "0px 5%" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h5 style={{ color: "rgb(32, 35, 42)" }}>parent = {""}</h5>
                <pre
                  style={{
                    margin: "0px 5px",
                    padding: "2px 5px"
                  }}
                >
                  this
                </pre>
                <h5 style={{ color: "rgb(32, 35, 42)" }}>{``}</h5>
              </div>
              <div style={{ fontStyle: "italic", fontSize: 10 }}>
                <code>object</code>
                <span style={{ color: "#888888" }}>
                  {" "}
                  <strong>required:</strong> parent component's context. Gives
                  SimpleStorage the ability to access and update the parent's
                  state.{" "}
                </span>
              </div>
              <hr style={{ margin: "10px 0px 5px 0px" }} />
              <div style={{ display: "flex", alignItems: "center" }}>
                <h5 style={{ color: "rgb(32, 35, 42)" }}>prefix = </h5>
                <pre
                  style={{
                    margin: "0px 5px",
                    padding: "2px 5px"
                  }}
                >
                  "ParentComponent"
                </pre>
              </div>
              <div style={{ fontStyle: "italic", fontSize: 10 }}>
                <code>string</code>
                <span style={{ color: "#888888" }}>
                  {" "}
                  <strong>optional:</strong> prefix for localStorage keys
                  created and updated by this instance of SimpleStorage. Helps
                  avoid name conflicts.{" "}
                </span>
              </div>
              <hr style={{ margin: "10px 0px 5px 0px" }} />
              <div style={{ display: "flex", alignItems: "center" }}>
                <h5 style={{ color: "rgb(32, 35, 42)" }}>blacklist =</h5>
                <pre
                  style={{
                    margin: "0px 5px",
                    padding: "2px 5px"
                  }}
                >{`${formattedBlacklist}`}</pre>
              </div>
              <div style={{ fontStyle: "italic", fontSize: 10 }}>
                <code>array</code>
                <span style={{ color: "#888888" }}>
                  {" "}
                  <strong>optional:</strong> list of parent state property names
                  (<code>string</code>) to exclude from SimpleStorage.
                </span>
              </div>
              <hr style={{ margin: "10px 0px 5px 0px" }} />
            </Col>
          </Row>
          <div
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "-20px",
              padding: "0px 5%"
            }}
          >
            <code
              style={{
                fontSize: "100%",
                color: "rgb(32, 35, 42)",
                backgroundColor: "#EFF4FF"
              }}
            >
              {" />"}
            </code>
          </div>
        </Col>
      );
    };

    const code = `import React, { Component } from "react";
import SimpleStorage, { clearStorage, resetParentState } from "react-simple-storage";

class ParentComponent extends Component {
  constructor(props) { 
    super(props)
    this.state = {
      text: "Initial State",
      password: ""
    }
    // store the component's initial state to reset it
    this.initialState = this.state;
  }

  render() {
    return ( 
      <div>
        <SimpleStorage
          parent={this}
          prefix={ 'ParentComponent' }
          blacklist={ ['password'] }
        />

        <input
          type="text"
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
        />

        <input
          type="password"
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })}
        />

        <button onClick={() => resetParentState(this, this.initialState, ['password'])}>
					resetParentState
				</button>

        <button onClick={() => clearStorage('ParentComponent')}>
					clearStorage
				</button>
      </div>
    ) 
  }
}`;

    return (
      <div style={{ backgroundColor: "#f9f9f9" }}>
        {renderHeader()}
        <div style={{ maxWidth: 1000 }}>
          <SimpleStorage
            parent={this}
            prefix={"ParentComponent"}
            blacklist={this.state.blacklist}
          />
        </div>
        <Row
          className="show-grid"
          style={{
            padding: "30px 5%",
            backgroundColor: "#f9f9f9",
            margin: "auto",
            maxWidth: 1000
          }}
        >
          <Col
            xs={12}
            style={{
              border: "1px solid #e8e8e8",
              borderRadius: 3,
              padding: "20px 20px"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: "-20px",
                padding: "0px 5%"
              }}
            >
              <code
                style={{
                  fontSize: "100%",
                  color: "rgb(32, 35, 42)",
                  backgroundColor: "#EFF4FF"
                }}
              >
                {"class ParentComponent extends Component {"}
              </code>
            </div>
            <Row className="show-grid" style={{ padding: "20px 5%" }}>
              {/*  ================ Constructor ================ */}
              {renderContructor()}
              {/*  ================ SimpleStorage ================ */}
              {renderStorageForm()}
            </Row>
            <Row className="show-grid" style={{ padding: "20px 5%" }}>
              <Col xs={12} sm={12} style={{ padding: "0px 2%" }}>
                <FormGroup>
                  <ControlLabel
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <div>Text</div>
                    <FormGroup style={{ marginBottom: 2, fontSize: 12 }}>
                      <Checkbox
                        checked={this.state.blacklistText}
                        onChange={e => {
                          let blacklist = [...this.state.blacklist];
                          if (this.state.blacklistText) {
                            let newList = blacklist.filter(item => {
                              if (item === "text") {
                                return null;
                              } else {
                                return item;
                              }
                            });
                            this.setState({ blacklist: newList });
                          } else {
                            blacklist.push("text");
                            this.setState({ blacklist: blacklist });
                          }
                          this.setState({
                            blacklistText: !this.state.blacklistText
                          });
                        }}
                        inline
                      >
                        blacklist
                      </Checkbox>{" "}
                      <Checkbox
                        checked={this.state.ignoreText}
                        onChange={e => {
                          let ignoreList = [...this.state.ignoreList];
                          if (this.state.ignoreText) {
                            let newList = ignoreList.filter(item => {
                              if (item === "text") {
                                return null;
                              } else {
                                return item;
                              }
                            });
                            this.setState({ ignoreList: newList });
                          } else {
                            ignoreList.push("text");
                            this.setState({ ignoreList: ignoreList });
                          }
                          this.setState({
                            ignoreText: !this.state.ignoreText
                          });
                        }}
                        inline
                      >
                        ignore on reset
                      </Checkbox>
                    </FormGroup>
                  </ControlLabel>
                  <FormControl
                    type={"text"}
                    value={this.state.text}
                    placeholder={"Enter some text..."}
                    onChange={e => this.setState({ text: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <div>Password</div>
                    <FormGroup style={{ marginBottom: 2, fontSize: 12 }}>
                      <Checkbox
                        checked={this.state.blacklistPassword}
                        onChange={e => {
                          let blacklist = [...this.state.blacklist];
                          if (this.state.blacklistPassword) {
                            let newList = blacklist.filter(item => {
                              if (item === "password") {
                                return null;
                              } else {
                                return item;
                              }
                            });
                            this.setState({ blacklist: newList });
                          } else {
                            blacklist.push("password");
                            this.setState({ blacklist: blacklist });
                          }
                          this.setState({
                            blacklistPassword: !this.state.blacklistPassword
                          });
                        }}
                        inline
                      >
                        blacklist
                      </Checkbox>{" "}
                      <Checkbox
                        checked={this.state.ignorePassword}
                        onChange={e => {
                          let ignoreList = [...this.state.ignoreList];
                          if (this.state.ignorePassword) {
                            let newList = ignoreList.filter(item => {
                              if (item === "password") {
                                return null;
                              } else {
                                return item;
                              }
                            });
                            this.setState({ ignoreList: newList });
                          } else {
                            ignoreList.push("password");
                            this.setState({ ignoreList: ignoreList });
                          }
                          this.setState({
                            ignorePassword: !this.state.ignorePassword
                          });
                        }}
                        inline
                      >
                        ignore on reset
                      </Checkbox>
                    </FormGroup>
                  </ControlLabel>
                  <FormControl
                    type={"password"}
                    value={this.state.password}
                    placeholder={""}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} sm={12} style={{ padding: "0px 2%", marginTop: 20 }}>
                <FormGroup>
                  <Button
                    onClick={() =>
                      resetParentState(this, this.initialState, [
                        ...this.state.ignoreList,
                        ...[
                          "blacklist",
                          "ignoreList",
                          "blacklistText",
                          "ignoreText",
                          "blacklistPassword",
                          "ignorePassword"
                        ]
                      ])
                    }
                    style={{ width: "100%", backgroundColor: "#f9f2f4" }}
                  >
                    <code
                      style={{ whiteSpace: "normal" }}
                    >{`resetParentState(this, this.initialState, ${formattedIgnorelist})`}</code>
                  </Button>
                  <div
                    style={{
                      fontStyle: "italic",
                      fontSize: 10,
                      padding: "10px 0px"
                    }}
                  >
                    <code>
                      function(<strong>parent</strong>:string|required,{" "}
                      <strong>initialState</strong>:object|required,{" "}
                      <strong>keysToIgnore</strong>:array|optional)
                    </code>
                    <span style={{ color: "#888888" }}>
                      {" "}
                      resets the parent's state to given{" "}
                      <code>initialState</code>
                    </span>
                  </div>
                  <hr style={{ margin: "0px 0px 10px 0px" }} />
                </FormGroup>
                <FormGroup style={{ marginTop: 20 }}>
                  <Button
                    onClick={() => clearStorage("ParentComponent")}
                    style={{ width: "100%", backgroundColor: "#f9f2f4" }}
                  >
                    <code
                      style={{ whiteSpace: "normal" }}
                    >{`clearStorage("${"ParentComponent"}")`}</code>
                  </Button>
                  <div
                    style={{
                      fontStyle: "italic",
                      fontSize: 10,
                      padding: "10px 0px"
                    }}
                  >
                    <code>
                      function(<strong>prefix</strong>:string|optional)
                    </code>
                    <span style={{ color: "#888888" }}>
                      {" "}
                      removes all items from localStorage. If optional{" "}
                      <code>prefix</code> is provided, only removes localStorage
                      items with that prefix.
                    </span>
                  </div>
                  <hr style={{ margin: "0px 0px 10px 0px" }} />
                </FormGroup>
              </Col>
            </Row>
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "-20px",
                padding: "0px 5%"
              }}
            >
              <code
                style={{
                  fontSize: "100%",
                  color: "rgb(32, 35, 42)",
                  backgroundColor: "#EFF4FF"
                }}
              >
                {" } "}
              </code>
            </div>
          </Col>
        </Row>
        <Row style={{ padding: "50px 5%", maxWidth: 1000, margin: "auto" }}>
          <LiveProvider code={code}>
            <LiveEditor />
          </LiveProvider>
        </Row>
      </div>
    );
  }
}
