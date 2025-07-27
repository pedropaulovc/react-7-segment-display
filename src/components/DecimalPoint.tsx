import React from "react";

type DecimalPointType = {
    active: boolean;
    color: string;
    size: number;
    skew?: boolean;
};

const DecimalPoint = ({ active, color, size, skew = false }: DecimalPointType) => {
    const outerStyle = {
        filter: active
            ? `drop-shadow(0px 0px ${size * 0.3}px ${color})`
            : "none",
        padding: size * 0.1,
        width: "fit-content",
        position: "relative",
        display: "inline-block",
        zIndex: "2",
    } as React.CSSProperties;

    const innerStyle = {
        backgroundColor: color,
        filter: active
            ? "opacity(1) grayscale(0)"
            : "opacity(0.3) grayscale(0.7)",
        height: `${size * 0.38}px`,
        width: `${size * 0.38}px`,
        borderRadius: "50%",
        transform: skew ? "skewX(-10deg)" : "none",
    } as React.CSSProperties;

    return (
        <div style={outerStyle}>
            <div style={innerStyle}></div>
        </div>
    );
};

export default DecimalPoint;