import { jsx as _jsx } from "./core/jsx-runtime";
export const Button = ({
  children,
  onClick
}) => _jsx("button", {
  onClick: onClick,
  children: children
});