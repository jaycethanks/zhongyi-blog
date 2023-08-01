import React from 'react';

interface IconProps {
  className?: string
}
export default ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="15151"
      width="16"
      height="16"
    >
      <path
        className={className}
        d="M448 633.88v313.38l44.04 66.04c9.5 14.24 30.44 14.24 39.94 0L576 947.26V633.88c-20.78 3.84-42.12 6.12-64 6.12s-43.22-2.28-64-6.12zM512 0C352.94 0 224 128.94 224 288s128.94 288 288 288 288-128.94 288-288S671.06 0 512 0z m0 152c-75 0-136 61-136 136 0 13.24-10.76 24-24 24s-24-10.76-24-24c0-101.46 82.56-184 184-184 13.24 0 24 10.76 24 24s-10.76 24-24 24z"
        p-id="15152"
      ></path>
    </svg>
  );
};
