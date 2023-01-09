import type { SVGProps } from 'react';

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.334 10.154a9.5 9.5 0 1 0-19 0c0 4.742 3.474 8.672 8.015 9.385V12.9H5.937v-2.746h2.412V8.061c0-2.38 1.418-3.696 3.588-3.696 1.04 0 2.127.186 2.127.186v2.338h-1.198c-1.18 0-1.548.732-1.548 1.483v1.782h2.635L13.53 12.9h-2.213v6.639c4.542-.713 8.016-4.643 8.016-9.385Z"
      fill="#1877F2"
    />
  </svg>
);
export default SvgFacebook;
