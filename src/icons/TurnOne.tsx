import * as React from 'react';
import { SVGProps } from 'react';

const TurnOne = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={25}
    fill='none'
    {...props}
  >
    <rect
      width={15.741}
      height={22.8}
      x={1.428}
      y={0.826}
      fill='#6E4197'
      rx={1.8}
    />
    <rect
      width={15.741}
      height={22.8}
      x={1.428}
      y={0.826}
      stroke='#000'
      strokeWidth={1.2}
      rx={1.8}
    />
  </svg>
);
export default TurnOne;
