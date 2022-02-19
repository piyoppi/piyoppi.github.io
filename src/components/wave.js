import React from "react"
import * as styles from './wave.module.css'

export default function Wave({width, amplitude, wavelength, color, colorBottom}) {
  const id = Math.floor(Math.random() * 10000000)
  return (
    <svg
      width={width}
      height={amplitude}
      className={styles.waveBoundary}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          patternUnits="userSpaceOnUse"
          preserveAspectRatio="none"
          id={id}
          x="0"
          y="0"
          width={wavelength}
          height={amplitude}
          viewBox="0 0 100 50"
        >
          <path
            fill={color}
            d="M 0 25 Q 25 -20, 50 25, 75 70, 100 25"
          />
          <path
            fill={colorBottom}
            transform="scale(1 -1) translate(-50 -50)"
            d="M 0 25 Q 25 -20, 50 25, 75 70, 100 25"
          />
        </pattern>
      </defs>
      <rect fill={`url(#${id})`} x="0" y="0" width={width} height={amplitude}/>
    </svg>
  )
}
