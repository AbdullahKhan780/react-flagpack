import * as React from "react";
import type { Flags } from "flagpack-core";
import "./Flag.css";

interface Props {
  code: Flags;
  size?: string;
  gradient?: "" | "top-down" | "real-circular" | "real-linear";
  hasBorder?: boolean;
  hasDropShadow?: boolean;
  hasBorderRadius?: boolean;
  className?: string;
}

const Flag: React.FC<Props> = ({
  code = "NL",
  size = "l",
  gradient = "",
  hasBorder = true,
  hasDropShadow = false,
  hasBorderRadius = true,
  className,
}: Props) => {
  return (
    <div
      className={`flag
  ${gradient}
  size-${size}
  ${hasBorder ? "border" : ""}
  ${hasDropShadow ? "drop-shadow" : ""}
  ${hasBorderRadius ? "border-radius" : ""}
  ${className ? className.replace(/\s\s+/g, " ").trim() : ""}`}
    >
      <img src={new URL(`./flags/${size}/${code}.svg`, import.meta.url).href} />
    </div>
  );
};

export default Flag;
