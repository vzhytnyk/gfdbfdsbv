import * as React from 'react';
import { SVGProps } from 'react';

const RestartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={22}
    fill='none'
    {...props}
  >
    <path
      stroke='#fff'
      strokeLinejoin='round'
      strokeWidth={1.152}
      d='m11.336 4.804-.989-1.384c-.368-.516-.552-.774-.435-1.013.116-.24.411-.253 1.002-.28a8.957 8.957 0 1 1-4.952 1.78'
    />
    <path
      stroke='#fff'
      strokeLinejoin='round'
      strokeWidth={1.152}
      d='M15.314 11.826c-.17.662-.971 1.13-2.574 2.064-1.55.904-2.325 1.356-2.95 1.175a1.554 1.554 0 0 1-.682-.415c-.46-.475-.46-1.397-.46-3.24 0-1.844 0-2.766.46-3.241.19-.197.425-.34.683-.415.624-.181 1.4.27 2.949 1.175 1.603.935 2.405 1.402 2.574 2.064.07.273.07.56 0 .833Z'
    />
  </svg>
);
export default RestartIcon;
