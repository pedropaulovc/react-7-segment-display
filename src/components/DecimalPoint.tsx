import React from "react";
import { decimalPointStyle, skewedDecimalPointStyle } from "../utils/decimalPointStyle";

type DecimalPointType = {
    active: boolean;
    color: string;
    size: number;
    skew?: boolean;
};

const DecimalPoint = ({ active, color, size, skew = false }: DecimalPointType) => {
    const dpStyle = skew ? skewedDecimalPointStyle : decimalPointStyle;

    const outerStyle = {
        filter: active
            ? `drop-shadow(0px 0px ${size * 0.3}px ${color})`
            : "none",
        padding: size * 0.1,
        width: "fit-content",
        position: "absolute",
        transform: dpStyle.transform,
        marginTop: `${size * 10.6}px`,
        left: `${size * 6.8}px`,
        zIndex: "2",
        border: "6px solid transparent",
    } as React.CSSProperties;

    const innerStyle = {
        backgroundColor: color,
        filter: active
            ? "opacity(1) grayscale(0)"
            : "opacity(0.3) grayscale(0.7)",
        height: `${size}px`,
        width: `${size}px`,
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