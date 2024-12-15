import type { SVGAttributes } from "react";

export const ProfileIcon = (props: SVGAttributes<HTMLOrSVGElement>) => {
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
          d="M2380 5114 c-19 -2 -78 -9 -130 -15 -430 -48 -872 -227 -1238 -501
-119 -89 -339 -302 -437 -423 -237 -292 -430 -685 -509 -1040 -49 -218 -60
-325 -60 -575 0 -250 11 -357 60 -575 79 -355 272 -749 509 -1040 92 -114 274
-294 387 -384 287 -229 675 -417 1023 -495 209 -47 334 -60 575 -60 425 0 751
75 1125 259 417 204 750 496 1010 885 153 228 300 569 359 835 49 218 60 325
60 575 0 250 -11 357 -60 575 -79 355 -272 749 -509 1040 -92 114 -274 294
-387 384 -348 278 -777 465 -1220 532 -126 19 -471 33 -558 23z m355 -779
c269 -57 492 -241 603 -497 46 -108 64 -203 64 -338 -1 -236 -88 -437 -261
-602 -92 -89 -191 -150 -304 -189 -515 -177 -1061 171 -1117 713 -44 427 242
822 661 913 85 18 267 18 354 0z m530 -2113 c259 -72 454 -235 564 -474 100
-215 105 -423 14 -556 -75 -109 -342 -287 -578 -385 -422 -174 -955 -178
-1385 -10 -235 92 -540 291 -607 396 -78 123 -82 284 -14 484 101 294 371 515
686 562 33 5 326 8 650 7 576 -2 592 -2 670 -24z"
        />
      </g>
    </svg>
  );
};
