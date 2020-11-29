import React, { Component } from "react";
import Child from "./Child";
import LangControls from "./LangControls";
import LanguageContext from "./LanguageContext";

export default class App extends Component {
  state = {
    lang: window.navigator.language,
  };
  //value stored in state enables use of callback props,
  //passed into the LangControls component to be triggered
  // when user clicks button
  handleSetLang = (lang) => {
    this.setState({ lang });
  };
  render() {
    const contextValue = {
      lang: this.state.lang,
    };
    return (
      <LanguageContext.Provider value={contextValue}>
        <main className="App">
          <Child />
          <LangControls onSetLang={this.handleSetLang} />
        </main>
      </LanguageContext.Provider>
    );
  }
}
