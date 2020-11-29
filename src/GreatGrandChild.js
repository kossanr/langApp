import React, { Component } from "react";
import languageSpecificCopy from "./langSpecificCopy";
import LanguageContext from "./LanguageContext";

export default class GreatGrandChild extends Component {
  //assig context to a static property called contextType
  //gives new instance property this.context
  static contextType = LanguageContext;
  render() {
    const copy = languageSpecificCopy[this.context.lang] || {};
    return (
      <section>
        <h2>{copy.title}</h2>
        <p> {copy.body}</p>
      </section>
    );
  }
}
