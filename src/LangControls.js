import React from "react";
//component that contains buttons to switch the current
import LanguageContext from "./LanguageContext";
console.log(LanguageContext);
export default function LangControls(props) {
  //JSX to be returned is in the return of the render prop
  return (
    <LanguageContext.Consumer>
      {(value) => {
        //to get value out of consumer,
        //accept it as an argument to the render prop
        //console.log(value) would log the object inside of context

        return (
          <>
            <button
              onClick={() => props.onSetLang("en-GB")}
              disabled={value.lang === "en-GB"}
            >
              British{" "}
              <span role="img" aria-label="en-GB">
                🇬🇧
              </span>
            </button>{" "}
            <button
              onClick={() => props.onSetLang("en-US")}
              disabled={value.lang === "en-US"}
            >
              American{" "}
              <span role="img" aria-label="en-US">
                🇺🇸
              </span>
            </button>{" "}
            <button
              onClick={() => props.onSetLang("ko")}
              disabled={value.lang === "ko"}
            >
              Korean{" "}
              <span role="img" aria-label="ko">
                🇰🇷
              </span>
            </button>
          </>
        );
      }}
    </LanguageContext.Consumer>
  );
}
