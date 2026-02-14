import React from 'react'

export default function GridBackGround({
  width = 80,
    height = 80,
    x = -1,
    y = -1,
    strokeDasharray = "0",
    squares,
    className = "",
    style = {},
    ...props
  }) {
    const id = React.useId();
  
    return (
      <svg
        aria-hidden="true"
        className={className}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          ...style,
        }}
        {...props}
      >
        <defs>
          <pattern
            id={id}
            patternUnits="userSpaceOnUse"
            width={width}
            height={height}
            x={x}
            y={y}
          >
            <path
              d={`M.5 ${height}V.5H${width}`}
              fill="none"
              stroke="rgba(175, 168, 156, 0.13)"
              strokeDasharray={strokeDasharray}
            />
          </pattern>
        </defs>
  
        <rect width="100%" height="100%" fill={`url(#${id})`} />
  
        {squares && (
          <svg role="img" aria-label="Grid squares" x={x} y={y} style={{ overflow: "visible" }}>
            {squares.map(([sx, sy], index) => (
              <rect
                key={`${sx}-${sy}-${index}`}
                x={sx * width + 1}
                y={sy * height + 1}
                width={width - 1}
                height={height - 1}
                fill="rgba(156,163,175,0.25)"
                strokeWidth="0"
              />
            ))}
          </svg>
        )}
      </svg>
    );
}

