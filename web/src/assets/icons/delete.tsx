import type { SVGAttributes } from "react";

export const DeleteIcon = (props: SVGAttributes<HTMLOrSVGElement>) => {
  const { fill = "currentcolor", ...restProps } = props;

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.000000 512.000000"
      {...restProps}
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={fill}
      >
        <path
          d="M1705 4980 l-140 -140 -497 0 -498 0 0 -285 0 -285 1990 0 1990 0 0
285 0 285 -498 0 -497 0 -140 140 -140 140 -715 0 -715 0 -140 -140z"
        />
        <path
          d="M852 2223 l3 -1758 23 -65 c68 -189 193 -312 382 -376 53 -18 110
-19 1300 -19 1190 0 1247 1 1300 19 189 64 314 187 382 376 l23 65 3 1758 2
1757 -1710 0 -1710 0 2 -1757z"
        />
      </g>
    </svg>
  );
};
