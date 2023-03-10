import { TypographyOptions } from "@mui/material/styles/createTypography";
import { myColor } from "../../components/constants/myColor";

export const configMuiTypography: TypographyOptions = {
  fontFamily: ["SpoqaHanSansNeo-Regular", "sans-serif"].join(","),
  h1: { fontSize: 80, color: myColor.primary, fontFamily: "Jua" },
  h2: { fontSize: 26, color: myColor.primary, fontFamily: "Jua" },
  body1: {
    fontSize: 16,
    letterSpacing: "2px",
  },
  body2: { fontSize: 16, fontWeight: 500 },
  button: { fontFamily: "Jua", fontSize: 26, letterSpacing: "2px" },
};
