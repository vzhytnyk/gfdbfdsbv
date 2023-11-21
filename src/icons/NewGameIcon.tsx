import * as React from 'react';
import { SVGProps } from 'react';

const NewGameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={26}
    fill='none'
    {...props}
  >
    <g strokeLinejoin='round' strokeWidth={1.152} clipPath='url(#a)'>
      <path
        stroke='#fff'
        d='M5.814 15.529c3.84 0 7.678-3.839 7.678-7.677 0 3.838 3.838 7.677 7.677 7.677-3.838 0-7.677 3.839-7.677 7.677 0-3.838-3.839-7.677-7.678-7.677Z'
      />
      <path
        stroke='#E7C92B'
        d='M.696 6.828c1.536 0 4.607-3.071 4.607-4.607 0 1.536 3.07 4.607 4.606 4.607-1.535 0-4.606 3.07-4.606 4.606 0-1.535-3.071-4.606-4.607-4.606Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M.44.942h24.567v24.567H.44z' />
      </clipPath>
    </defs>
  </svg>
);
export default NewGameIcon;
