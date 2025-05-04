import React from "react";

const Toast = (props) => {
  return (
    <>
      <div
        className={
          props?.isError
            ? "bg-red-500 text-amber-50 p-2"
            : "bg-green-500 text-amber-50 p-2"
        }
      >
        {props?.msg}
      </div>
    </>
  );
};

export default Toast;
