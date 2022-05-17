import { forwardRef } from "react";
import { Link } from "react-router-dom";

import "./button.scss";

const ElBtn = forwardRef((props, ref) => <button ref={ref} {...props}></button>);

const Button = forwardRef((properties, ref) => {
  const { to, className = "", ...props } = properties;

  const Component = to ? Link : ElBtn;

  return (
    <>
      <Component ref={ref} to={to} {...props} className={`button ${className}`} />
    </>
  );
})

export default Button;