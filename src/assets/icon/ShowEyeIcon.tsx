import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export const ShowEyeIcon = React.memo((props?: any) => {
    return (
        <Svg
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Path
            d="M11.813 9a2.812 2.812 0 11-5.625 0 2.812 2.812 0 015.625 0z"
            fill="url(#paint0_linear_26_11)"
          />
          <Path
            d="M0 9s3.375-6.188 9-6.188S18 9 18 9s-3.375 6.188-9 6.188S0 9 0 9zm9 3.938a3.937 3.937 0 100-7.875 3.937 3.937 0 000 7.875z"
            fill="url(#paint1_linear_26_11)"
          />
          <Defs>
            <LinearGradient
              id="paint0_linear_26_11"
              x1={9}
              y1={6.1875}
              x2={9}
              y2={11.8125}
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#292739" />
              <Stop offset={1} />
            </LinearGradient>
            <LinearGradient
              id="paint1_linear_26_11"
              x1={9}
              y1={2.8125}
              x2={9}
              y2={15.1875}
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#292739" />
              <Stop offset={1} />
            </LinearGradient>
          </Defs>
        </Svg>
      )
})
