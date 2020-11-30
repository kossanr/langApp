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
      setLang: this.handleSetLang,
    };
    return (
      <LanguageContext.Provider value={contextValue}>
        <main className="App">
          <LangControls onSetLang={this.handleSetLang} />
          <Child />
        </main>
      </LanguageContext.Provider>
    );
  }
}
//For deeply nested components to update context values, a stateful provider component needs to implement the updater callback function using state.
