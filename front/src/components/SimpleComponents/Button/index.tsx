import React from 'react';

const Button = (props: any) => {
  const { className, handler, title } = props;
  return (
    <button className = {className} onClick = {handler}>
      {title}
    </button>
  );
};

export default Button;