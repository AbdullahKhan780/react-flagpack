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
  const [FlagImg, setFlagImg] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch(`./flags/${size}/${code}.svg`, {method: "get"}).then((response)=> {
      console.log("response", response);
    })
  }, [size, code]);

  return (
    <>
      {FlagImg && (
        <div
          className={`flag
  ${gradient}
  size-${size}
  ${hasBorder ? "border" : ""}
  ${hasDropShadow ? "drop-shadow" : ""}
  ${hasBorderRadius ? "border-radius" : ""}
  ${className ? className.replace(/\s\s+/g, " ").trim() : ""}`}
        >
          <img src={FlagImg} />
        </div>
      )}
    </>
  );
};

export default Flag;
