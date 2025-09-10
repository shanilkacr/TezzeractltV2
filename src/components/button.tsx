// import { HTMLAttributes } from "react";
import { HTMLAttributes } from "react";

// export default function Button(props: variant: "primary" | "secondary" }& HTMLAttributes<HTMLButtonElement>) {
//   const { variant = "primary", className, ...rest } = props;
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

// export default function Button(props: ButtonProps) {s