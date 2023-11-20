import * as React from 'react';
import { SVGProps } from 'react';
const UndoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={22}
    height={22}
    fill='none'
    {...props}
  >
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.152}
      d='m4.428 8.782 1.76-1.767C7.456 5.742 7.954 5.058 8.64 5.3c.857.301.575 2.206.575 2.849 1.331 0 2.716-.119 4.028.128 4.333.814 5.687 4.333 5.687 8.17-1.226-.868-2.45-1.793-3.925-2.196-1.84-.503-3.894-.263-5.79-.263 0 .643.282 2.547-.575 2.85-.778.274-1.184-.443-2.452-1.716l-1.76-1.767c-1.08-1.083-1.62-1.625-1.62-2.287 0-.661.54-1.203 1.62-2.286Z'
    />
  </svg>
);
export default UndoIcon;
