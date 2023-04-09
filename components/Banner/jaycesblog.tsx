import React from 'react';

type IconProps = {
  pathClassName?: string;
  svgClassName?: string;
};
export default ({ pathClassName, svgClassName = "w-12 h-12" }: IconProps) => {
  return (
    <svg
      viewBox="0 180.809 505.875 124.021"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="15151"
      className={svgClassName}
    >
        <path 
        className={pathClassName}
        d="M 56.846 203.491 L 56.846 203.705 Q 55.776 205.738 55.776 206.594 Q 55.669 206.701 55.669 207.129 L 55.776 207.129 L 55.776 256.991 Q 55.776 259.773 53.208 263.732 Q 48.5 270.901 35.66 272.613 Q 33.413 272.934 32.022 272.934 L 29.989 272.934 Q 24.532 272.934 19.289 270.687 Q 13.19 268.119 11.05 263.732 Q 9.766 261.164 9.766 257.847 Q 9.766 253.781 12.227 250.892 Q 14.688 248.003 18.54 248.003 Q 20.038 248.003 21.483 248.645 Q 22.927 249.287 24.051 250.411 Q 25.174 251.534 25.816 252.925 Q 26.458 254.316 26.458 255.814 Q 26.458 258.489 24.532 260.522 Q 22.606 262.555 20.038 262.555 Q 18.861 262.555 17.898 262.234 Q 18.968 264.909 22.071 266.621 Q 24.746 268.226 29.026 268.226 L 29.24 268.333 L 29.668 268.333 Q 35.018 268.333 39.191 265.444 Q 43.685 262.448 43.685 257.205 L 43.685 213.977 Q 43.685 209.055 55.562 202.956 Q 55.776 202.849 56.044 202.796 Q 56.311 202.742 56.739 202.528 L 57.06 203.277 Z M 42.08 212.479 Q 41.224 214.191 40.85 215.796 Q 40.475 217.401 40.475 219.22 L 40.475 256.456 Q 40.475 256.67 40.422 256.831 Q 40.368 256.991 40.368 257.098 Q 40.261 257.312 40.261 257.526 L 40.154 257.633 L 40.154 257.74 Q 39.405 259.345 37.961 260.79 Q 36.516 262.234 34.483 263.625 Q 30.203 266.086 25.816 266.086 Q 28.919 262.341 28.919 259.987 L 28.919 241.048 L 28.812 240.941 L 28.705 240.834 L 28.812 240.834 Q 28.17 240.62 28.01 240.567 Q 27.849 240.513 27.635 240.406 L 27.528 240.406 L 27.421 240.299 L 26.993 240.299 L 26.779 240.192 Q 25.602 240.299 24.746 240.995 Q 23.89 241.69 23.783 242.76 L 23.89 242.867 L 23.89 243.83 Q 17.684 242.653 17.684 237.196 Q 17.684 233.451 20.306 231.204 Q 22.927 228.957 26.993 228.957 L 27.742 228.957 L 27.956 229.064 L 28.598 229.064 L 28.705 229.171 L 28.919 229.171 L 28.919 222.537 Q 28.919 218.685 36.516 214.512 L 36.516 214.619 Q 36.944 214.405 37.586 214.031 Q 38.228 213.656 39.084 213.121 L 39.084 213.228 Q 39.512 213.014 40.047 212.693 Q 40.582 212.372 41.117 212.051 L 41.331 211.837 L 41.652 211.837 Z M 44.22 203.277 Q 44.006 207.664 40.154 210.874 Q 36.195 214.191 32.022 214.191 Q 31.808 214.298 30.845 214.298 Q 28.17 214.298 23.355 212.907 Q 21.001 212.158 19.236 211.837 Q 17.47 211.516 16.293 211.516 L 16.079 211.516 Q 15.223 211.837 14.688 211.837 Q 13.832 212.265 12.816 212.854 Q 11.799 213.442 10.515 214.405 L 10.515 213.442 Q 10.515 207.022 17.898 203.277 Q 19.075 202.742 20.199 202.421 Q 21.322 202.1 22.178 201.886 Q 22.392 201.886 22.713 201.779 L 24.318 201.779 Q 26.137 201.779 28.117 202.047 Q 30.096 202.314 32.343 202.956 Q 37.693 204.454 38.656 204.454 Q 39.94 204.454 41.117 204.08 Q 42.294 203.705 43.578 202.956 Z M 59.661 264.267 Q 59.447 264.588 59.447 264.695 Q 59.554 264.695 59.768 264.374 Z M 95.292 259.773 L 95.292 227.887 Q 86.304 224.998 77.53 221.895 Q 69.184 226.817 60.303 229.599 L 60.303 229.813 Q 60.303 230.99 61.908 233.13 L 61.908 261.378 L 60.731 263.09 Q 60.41 263.518 60.089 263.839 L 59.768 264.374 Q 68.649 265.444 78.493 275.074 L 85.662 267.477 L 93.794 275.074 L 103.317 264.267 L 99.358 263.732 Q 96.469 263.304 95.292 259.773 Z M 82.773 262.876 Q 79.028 259.987 73.785 257.419 L 73.785 230.241 L 73.357 229.92 L 73.357 229.813 Q 73.999 229.813 82.773 233.665 Z M 147.432 229.385 L 147.432 229.92 L 147.325 230.027 Q 147.325 230.776 146.844 231.686 Q 146.362 232.595 145.72 233.451 Q 145.078 234.307 144.222 235.003 Q 143.366 235.698 142.617 236.019 L 142.617 264.588 Q 142.617 270.152 133.308 272.292 Q 132.024 272.506 130.901 272.667 Q 129.777 272.827 128.921 272.827 L 128.279 272.827 Q 128.172 272.827 127.316 272.934 Q 115.974 273.79 115.974 278.07 Q 115.974 279.675 118.007 279.675 Q 118.97 279.675 124.534 276.572 Q 129.884 273.576 134.164 273.576 Q 137.909 273.576 140.584 275.93 Q 143.259 278.284 143.259 281.815 Q 143.259 284.918 140.959 286.951 Q 138.658 288.984 135.341 288.984 Q 132.345 288.984 131.489 288.128 L 131.489 284.49 Q 133.201 285.453 134.806 285.453 L 134.913 285.453 L 135.127 285.346 L 135.448 285.346 Q 136.09 285.346 136.946 284.811 Q 137.802 284.276 137.802 283.634 Q 137.802 282.564 136.411 282.564 L 136.197 282.457 L 136.09 282.457 Q 133.629 282.457 129.456 285.025 Q 126.995 286.63 125.23 287.486 Q 123.464 288.342 122.501 288.556 Q 121.966 288.663 121.217 288.717 Q 120.468 288.77 119.291 288.77 Q 117.472 288.77 115.76 288.075 Q 114.048 287.379 112.764 286.202 Q 111.48 285.025 110.678 283.474 Q 109.875 281.922 109.875 280.103 L 109.875 279.568 L 109.982 279.568 Q 110.196 274.111 115.439 271.543 Q 113.299 270.58 111.587 268.868 Q 109.019 266.514 109.019 264.053 L 109.019 236.126 Q 109.019 233.665 103.883 233.13 L 103.883 232.381 L 115.332 223.393 Q 116.081 223.821 116.937 224.57 Q 117.793 225.319 118.542 226.282 Q 120.361 228.743 120.361 229.92 L 120.468 230.134 L 120.468 230.776 L 120.575 230.883 L 120.575 235.056 L 136.625 224.249 Q 139.942 228.743 143.901 228.743 L 144.115 228.743 L 144.222 228.636 Q 146.041 228.636 147.539 227.459 L 147.539 229.171 Z M 130.847 266.3 L 130.847 237.089 Q 130.419 236.982 129.991 236.768 Q 129.563 236.554 129.028 236.34 L 127.209 235.484 L 120.682 239.978 L 120.682 265.658 Q 120.682 267.798 124.427 268.547 L 124.855 268.547 Q 124.962 268.547 125.069 268.601 Q 125.176 268.654 125.39 268.654 Q 125.497 268.654 125.551 268.708 Q 125.604 268.761 125.711 268.761 L 126.353 268.761 L 126.567 268.654 Q 128.065 268.654 129.456 268.066 Q 130.847 267.477 130.847 266.3 Z M 182.991 227.887 Q 182.777 231.632 179.941 234.147 Q 177.106 236.661 173.361 236.661 Q 168.439 236.661 166.406 233.665 L 166.406 258.489 Q 167.369 259.024 168.867 259.024 Q 168.974 259.131 169.883 259.399 Q 170.793 259.666 172.612 260.308 Q 173.682 260.736 174.484 261.218 Q 175.287 261.699 175.822 262.341 L 178.604 259.024 L 181.172 261.057 L 171.435 273.041 Q 164.052 266.835 155.171 266.835 Q 152.175 266.835 150.463 268.761 Q 151.533 263.625 155.278 261.057 L 155.278 236.661 Q 155.278 236.34 155.224 235.912 Q 155.171 235.484 155.171 234.842 Q 154.85 234.2 154.85 233.023 Q 154.315 231.739 154.315 231.204 Q 154.208 231.097 153.994 230.134 L 153.994 228.743 L 154.957 229.706 Q 155.171 229.92 156.99 229.92 Q 160.949 229.92 164.694 228.101 Q 168.439 226.282 170.793 223.072 Q 175.394 229.064 179.246 229.064 Q 179.995 229.064 182.349 227.566 Z M 219.834 240.727 Q 218.55 241.369 214.751 243.563 Q 210.953 245.756 204.426 249.608 Q 203.463 250.143 202.286 250.999 L 202.286 259.024 Q 205.603 259.559 208.438 260.415 Q 211.274 261.271 213.735 262.448 L 216.303 259.773 L 218.978 262.234 L 209.241 272.934 L 208.171 272.399 Q 205.924 271.222 203.784 270.206 Q 201.644 269.189 198.862 268.654 Q 194.154 267.691 190.73 267.691 Q 189.446 267.691 188.162 267.852 Q 186.878 268.012 185.594 268.226 Q 185.808 267.691 186.022 267.317 Q 186.236 266.942 186.45 266.728 L 186.45 266.835 Q 187.199 265.658 187.68 264.909 Q 188.162 264.16 188.269 264.053 Q 189.018 263.09 191.158 261.485 L 191.158 235.591 Q 191.158 233.986 189.446 230.241 L 189.446 228.743 L 190.409 229.706 L 191.051 229.706 L 191.158 229.813 L 191.479 229.813 L 191.8 229.92 L 192.228 229.92 Q 200.681 229.92 211.274 222.858 Q 211.809 224.784 212.665 227.031 Q 213.521 229.278 215.019 232.06 Q 216.41 234.521 217.64 236.608 Q 218.871 238.694 219.941 240.192 Z M 203.142 232.274 L 202.286 232.488 L 202.286 246.184 L 208.064 242.439 Q 207.636 241.797 207.047 240.781 Q 206.459 239.764 205.71 238.159 Q 204.961 236.768 204.319 235.27 Q 203.677 233.772 203.142 232.274 Z M 238.381 213.763 L 238.381 214.619 Q 238.274 214.726 238.274 214.94 Q 238.06 216.438 236.883 218.578 Q 233.138 224.677 225.755 224.677 L 225.113 224.677 L 225.113 224.57 L 224.15 224.57 Q 228.216 221.36 228.216 219.006 Q 228.216 217.294 226.183 215.261 L 226.076 215.261 L 225.541 214.726 L 225.648 214.726 Q 225.113 214.298 224.418 213.924 Q 223.722 213.549 223.08 213.121 L 223.08 212.479 L 230.891 204.347 Q 238.488 205.738 238.488 213.121 L 238.488 213.442 Z M 282.185 224.998 Q 279.403 233.558 270.415 242.76 L 280.473 242.546 Q 280.473 242.653 280.42 242.974 Q 280.366 243.295 280.366 243.402 Q 280.259 243.616 280.259 243.937 L 280.152 244.044 L 280.152 244.258 L 279.938 244.472 L 279.938 244.686 L 279.831 244.9 Q 279.831 245.114 279.778 245.221 Q 279.724 245.328 279.724 245.435 L 279.724 245.328 Q 279.617 245.649 279.51 246.077 L 279.403 246.505 L 279.403 264.695 Q 279.403 264.909 279.51 265.016 L 279.51 265.337 L 279.617 265.551 L 279.617 265.444 Q 279.724 265.551 279.724 265.658 L 279.831 266.193 L 279.724 265.979 L 279.617 265.872 Q 279.617 265.979 279.831 266.3 Q 280.152 266.835 280.473 267.37 L 280.901 268.226 Q 279.724 268.226 279.51 268.119 L 279.617 268.119 Q 279.51 268.012 279.296 268.012 Q 278.012 268.012 277.156 267.959 Q 276.3 267.905 275.765 267.584 Q 274.16 267.584 273.839 267.477 L 273.197 267.477 Q 265.065 267.477 259.822 273.041 L 256.719 269.938 Q 255.863 269.189 255.114 268.815 Q 254.365 268.44 253.402 268.44 Q 252.76 268.119 251.583 268.119 Q 246.661 268.119 244.735 272.827 L 241.632 272.827 Q 242.488 269.082 244.628 265.177 Q 246.768 261.271 250.406 256.777 L 250.834 256.349 Q 251.155 256.028 251.637 255.493 Q 252.118 254.958 252.76 254.316 L 245.698 253.995 L 246.447 253.246 L 246.34 253.567 Q 247.303 252.283 247.303 250.892 L 247.41 250.678 L 247.303 232.06 Q 247.303 231.953 247.25 231.9 Q 247.196 231.846 247.196 231.739 L 247.196 231.846 Q 247.089 231.739 247.089 231.311 L 246.768 230.562 L 246.768 230.455 Q 246.554 230.241 246.554 229.813 L 246.554 228.85 Q 247.624 229.813 248.801 229.813 Q 249.55 230.241 252.546 230.241 Q 252.653 230.348 253.616 230.348 Q 258.538 230.348 263.139 227.887 Q 263.567 227.673 267.419 223.821 Q 270.843 227.78 273.839 227.78 Q 276.942 227.78 278.868 224.677 L 281.757 224.463 Z M 268.382 263.839 L 268.382 250.357 L 268.168 250.143 L 262.711 250.143 L 257.147 255.707 Q 256.398 256.456 255.435 257.58 Q 254.472 258.703 253.081 260.094 Q 254.365 259.88 255.328 259.72 Q 256.291 259.559 256.826 259.559 Q 262.39 259.559 266.349 264.481 L 266.777 264.267 L 267.098 264.16 Q 267.312 264.16 267.847 263.946 L 268.275 263.946 Z M 271.913 235.484 Q 270.094 236.233 268.061 236.233 Q 264.958 236.233 260.999 233.13 Q 260.678 233.237 260.571 233.344 L 260.143 233.344 Q 259.501 233.665 258.966 233.665 L 258.966 247.147 L 260.143 247.147 Q 260.999 246.612 262.551 245.114 Q 264.102 243.616 266.563 241.155 Q 270.201 237.303 271.913 235.484 Z M 376.58 265.123 L 375.51 263.304 Q 375.189 262.662 375.189 261.378 L 375.189 237.624 Q 375.189 234.093 370.16 231.846 Q 369.625 231.632 368.716 231.472 Q 367.806 231.311 367.164 231.204 Q 367.057 231.204 366.95 231.151 Q 366.843 231.097 366.736 231.097 L 366.415 231.097 Q 367.164 230.562 367.967 229.599 Q 368.769 228.636 369.839 227.352 Q 374.012 221.253 374.761 216.331 Q 374.868 215.903 374.868 214.726 L 374.868 214.298 Q 374.868 203.812 365.131 200.174 L 342.982 215.368 L 342.982 215.475 Q 341.912 216.224 341.27 217.508 L 341.377 217.187 Q 341.377 217.08 341.163 217.722 Q 340.735 218.685 340.521 219.327 L 340.521 251.962 L 340.414 252.176 L 340.307 252.604 Q 340.2 253.139 340.093 253.567 Q 339.879 254.423 339.879 254.744 Q 339.237 255.493 339.023 255.707 L 338.809 256.028 L 339.13 256.884 Q 342.982 256.884 347.69 253.353 Q 352.077 249.501 352.077 245.863 L 352.077 213.977 L 358.176 209.804 Q 364.703 213.014 364.703 221.574 L 364.703 221.895 Q 364.596 222.43 364.596 222.858 Q 364.596 223.179 364.489 223.5 Q 364.382 223.821 364.329 224.035 Q 364.275 224.249 364.275 224.463 Q 362.67 230.562 358.925 231.739 L 358.925 228.743 L 354.966 228.743 L 354.966 258.382 Q 351.863 256.991 347.155 256.991 Q 339.665 256.991 332.71 261.271 Q 325.648 265.337 322.331 273.148 Q 329.928 268.226 338.809 268.226 L 340.2 268.226 Q 340.628 268.226 341.163 268.333 Q 341.698 268.333 342.18 268.387 Q 342.661 268.44 342.875 268.44 Q 346.299 268.44 353.896 273.041 Q 358.711 268.654 365.238 266.514 Q 366.629 266.3 367.646 266.086 Q 368.662 265.872 369.304 265.658 Q 369.625 265.551 369.839 265.444 L 370.053 265.444 Q 371.23 265.444 371.444 265.337 L 373.049 265.337 Q 373.37 265.444 373.852 265.498 Q 374.333 265.551 375.189 265.551 Q 375.296 265.551 375.35 265.605 Q 375.403 265.658 375.51 265.658 L 375.403 265.658 Q 375.724 265.765 376.152 265.765 Z M 339.986 214.405 Q 336.883 214.94 334.476 216.171 Q 332.068 217.401 330.142 219.22 Q 325.755 223.286 325.755 229.171 L 325.755 229.706 L 325.862 229.813 L 325.862 230.455 Q 318.479 231.418 318.479 238.48 Q 318.479 242.867 320.405 244.472 L 320.405 244.365 Q 320.833 244.686 321.529 245.328 Q 322.224 245.97 322.866 246.612 Q 322.866 243.081 325.434 243.081 L 325.648 242.974 L 325.969 242.974 L 325.969 260.736 Q 325.541 261.913 325.541 262.769 L 325.541 262.662 L 325.434 262.876 L 325.541 262.769 Q 325.327 262.983 325.327 263.197 L 324.685 263.946 L 326.076 263.946 L 326.29 263.839 L 326.504 263.839 L 326.611 263.732 Q 328.109 263.732 330.677 261.913 Q 338.167 256.884 338.167 250.464 L 338.167 219.434 Q 338.167 216.545 340.307 215.154 L 339.986 214.405 Q 340.2 214.405 340.842 214.191 Q 342.875 213.656 344.801 212.8 Q 346.727 211.944 348.439 210.553 Q 352.719 207.557 352.933 203.598 L 352.291 203.277 Q 349.723 205.203 346.834 205.203 Q 345.336 205.203 341.484 203.919 Q 333.887 201.351 328.965 201.351 Q 325.327 201.351 321.689 203.277 Q 318.051 205.31 316.66 207.985 Q 315.269 210.66 315.269 212.372 L 315.269 213.656 Q 317.944 210.981 320.512 210.981 Q 322.01 210.981 324.899 211.837 Q 332.389 214.405 337.204 214.405 L 337.311 214.512 L 338.809 214.512 Q 339.451 214.512 339.986 214.405 Z M 359.353 260.522 Q 359.139 260.415 358.925 260.201 L 358.925 253.995 L 359.139 253.888 L 359.353 253.888 L 359.567 253.674 L 359.888 253.674 L 360.102 253.567 L 360.637 253.567 L 360.744 253.46 L 361.172 253.46 L 361.386 253.567 L 361.6 253.567 Q 361.814 253.674 362.67 253.674 L 362.884 253.674 Q 362.991 253.781 363.098 253.888 L 363.098 262.983 Q 361.6 261.913 360.691 261.378 Q 359.781 260.843 359.353 260.522 Z M 362.67 240.62 L 362.563 240.727 L 362.456 240.727 Q 362.242 240.834 362.135 240.834 Q 361.814 240.834 361.707 240.941 L 360.423 240.941 Q 359.674 240.941 359.246 240.62 L 359.139 240.62 L 359.032 240.513 Q 358.925 240.513 358.925 240.62 L 358.925 235.591 L 360.102 235.591 L 360.209 235.912 Q 363.098 235.912 363.098 237.731 L 363.098 240.513 Q 362.991 240.62 362.67 240.62 Z M 361.921 249.501 Q 361.707 249.501 361.6 249.448 Q 361.493 249.394 361.386 249.394 L 360.102 249.394 L 359.888 249.501 L 359.781 249.501 Q 359.353 249.608 358.925 249.822 L 358.925 244.579 L 359.246 244.579 Q 359.674 244.9 360.423 244.9 L 362.135 244.9 L 362.242 244.793 L 362.777 244.793 L 362.991 244.579 L 363.098 244.579 L 363.098 249.822 Q 362.563 249.715 361.921 249.501 Z M 320.512 244.579 L 320.619 244.579 Q 320.512 244.579 320.512 244.472 L 320.405 244.472 Z M 392.772 272.934 Q 387.208 268.119 379.611 266.3 Q 382.072 262.341 384.747 260.95 L 384.747 217.294 L 384.105 213.977 Q 384.105 213.87 384.051 213.817 Q 383.998 213.763 383.998 213.656 L 383.998 213.763 Q 383.891 213.549 383.891 213.014 L 383.677 212.693 L 383.57 212.586 Q 383.57 212.265 383.463 212.051 L 383.356 211.837 L 383.356 210.446 Q 383.998 210.767 384.319 210.821 Q 384.64 210.874 384.961 210.874 Q 388.706 210.874 396.731 204.454 L 397.266 204.882 Q 396.838 205.738 396.517 206.915 Q 396.196 208.092 395.768 209.59 Q 395.019 212.586 395.019 214.191 L 395.019 259.88 Q 396.303 260.522 398.443 262.127 L 398.336 262.02 L 398.443 262.02 L 398.657 262.127 Q 399.192 262.662 399.299 262.876 L 399.62 263.197 L 401.225 261.699 L 403.365 264.481 Z M 443.629 260.736 Q 444.271 263.839 446.09 264.695 Q 434.534 266.407 427.579 274.004 Q 421.373 267.584 405.965 265.979 Q 405.537 265.979 405.537 265.658 Q 405.537 265.016 406.821 263.411 Q 408.64 260.95 409.496 260.094 L 409.496 233.023 Q 407.784 230.883 407.784 229.599 L 407.784 229.492 Q 418.912 228.85 425.76 223.072 Q 438.065 229.171 445.662 229.92 Q 443.629 232.274 443.629 233.237 Z M 431.11 234.735 Q 422.443 231.097 421.373 231.097 Q 421.159 231.097 421.159 231.204 L 421.159 259.345 Q 422.871 261.164 431.11 262.876 Z M 490.313 273.041 Q 488.922 274.86 483.893 278.498 Q 483.679 278.605 483.465 278.819 Q 480.897 280.638 479.292 281.762 Q 477.687 282.885 477.045 283.634 Q 475.868 284.704 474.423 286.095 Q 472.979 287.486 471.481 288.984 Q 470.732 288.663 470.571 288.449 Q 470.411 288.235 469.876 287.807 L 469.983 287.807 Q 469.555 287.486 469.02 287.112 Q 468.485 286.737 467.95 286.202 L 468.057 286.202 Q 467.843 285.988 467.682 285.935 Q 467.522 285.881 466.987 285.56 Q 464.633 283.741 460.246 283.741 Q 456.394 283.741 451.579 286.63 Q 453.505 280.959 458.534 278.177 Q 463.028 275.609 468.164 275.609 Q 474.37 275.609 477.687 277.963 Q 481.539 274.432 481.539 272.399 Q 481.539 271.115 479.185 268.761 Q 476.938 266.942 476.403 263.946 Q 469.769 267.37 465.168 273.041 Q 460.139 266.514 455.11 266.514 Q 454.575 266.514 454.468 266.621 Q 453.505 266.621 450.937 267.37 Q 450.723 267.477 449.76 267.477 Q 449.76 265.765 451.472 263.411 Q 452.328 262.234 452.97 261.592 Q 453.612 260.95 454.147 260.736 L 454.147 233.023 Q 454.04 232.809 453.933 232.381 Q 453.826 232.167 453.772 231.953 Q 453.719 231.739 453.612 231.418 Q 453.077 230.027 452.863 229.706 L 452.863 228.529 Q 454.361 229.599 456.822 229.599 L 457.143 229.706 L 457.678 229.706 Q 464.954 229.706 473.3 225.747 Q 473.942 225.426 475.44 224.677 Q 476.938 223.928 478.864 222.751 Q 482.609 229.064 487.638 229.064 L 487.959 229.064 Q 488.815 228.636 490.045 228.048 Q 491.276 227.459 492.132 226.924 Q 491.918 229.813 490.634 231.9 Q 489.35 233.986 487.21 235.377 L 487.21 257.312 Q 487.21 260.308 489.778 263.625 L 489.885 263.839 L 489.778 263.839 L 490.313 264.267 L 490.42 264.481 L 490.313 264.481 Q 492.132 266.942 492.132 268.654 Q 492.132 270.794 490.313 273.041 Z M 476.082 259.666 L 476.082 236.447 Q 473.193 236.447 470.946 233.344 Q 470.732 233.13 470.464 232.649 Q 470.197 232.167 469.769 231.632 L 469.769 231.739 L 469.662 231.739 L 469.662 231.632 Q 468.378 232.274 467.415 232.274 Q 466.987 232.488 466.559 232.702 Q 466.131 232.916 465.382 232.916 L 465.382 259.131 Q 466.024 259.345 466.773 259.345 Q 469.769 259.88 472.016 262.127 L 472.123 262.02 L 472.551 261.806 L 472.444 261.913 Q 472.872 261.699 473.888 261.004 Q 474.905 260.308 475.761 259.773 Q 475.975 259.773 476.082 259.666 Z" ></path>

    </svg>
  );
};