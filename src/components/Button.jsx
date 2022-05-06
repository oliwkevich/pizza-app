import classNames from "classnames";
import React from "react";

export const Button = ({onClick, children, className, outline}) => { //
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
};
