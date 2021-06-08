import { IButtonStyles } from "@fluentui/react";
import { 
  teamsPurplePrimary, teamsPurpleShade10 
} from "./teams-colors";

export const purpleButtonStyle: IButtonStyles = {
  root: {
    backgroundColor: teamsPurplePrimary,
    color: "white",
  },
  rootHovered: {
    backgroundColor: teamsPurpleShade10,
    color: "white",
  },
  rootFocused: {
    backgroundColor: teamsPurpleShade10,
    border: "white",
  },
  rootDisabled: {
    backgroundColor: "rgb(243, 242, 241)",
    color: "rgb(161, 159, 157)",
  },
};

export const whiteButtonStyle: IButtonStyles = {
  root: {
    backgroundColor: '#fff',
    color: "black",
  },
  rootHovered: {
    backgroundColor: "#464775",
    color: "white",
  },
};

export const smallButtonStyle: IButtonStyles = {
  root: {
    color: "black",
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "40px",
  },
  rootHovered: {
    color: "#464775",
  },
};
