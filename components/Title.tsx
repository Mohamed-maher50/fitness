import React from "react";

const Title = ({
  title,
  customStyle,
}: {
  title: string;
  customStyle?: string;
}) => {
  return (
    <h1
      className={`text-3xl underline  underline-offset-3 text-primary ${customStyle} `}
    >
      {title}
    </h1>
  );
};

export default Title;
