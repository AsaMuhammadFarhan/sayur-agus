import { extendTheme } from "@chakra-ui/react";
import colors from "./colorTheme";
import fonts from "./fontStyle";
import buttonTheme from "./buttonTheme";

const components = {
  Button: buttonTheme,
};

const theme = extendTheme({
  colors,
  fonts,
  components,
});

export default theme;
