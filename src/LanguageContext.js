import React from "react";
//createContext makes context with 2 pieces: a value and an updater function
const LanguageContext = React.createContext({
  lang: window.navigator.language,
  setLang: () => {},
});

export default LanguageContext;

//context
