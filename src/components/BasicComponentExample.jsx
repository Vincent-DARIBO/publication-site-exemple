import React from "react";

const Example = ({children, title = "add a title"}) => {
  return (
    <div>
      <h3>{title}</h3>
     {children}
    </div>
  );
};

export default Example