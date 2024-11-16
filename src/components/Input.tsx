import React from "react";

interface InputProps {
  isDisabled: boolean;
  onChange?(): void;
}

export default function Input(props: InputProps) {
  let maxLength = 0;
  if (!props.isDisabled) {
    maxLength = 1;
  }
  return (
    <>
      <input
        type="text"
        disabled={props.isDisabled}
        maxLength={maxLength}
        onChange={props.onChange}
        id="input-wordplay"
      />
    </>
  );
}
