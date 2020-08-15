const colors = {
  gray: "#eeeeee",
  white: "#ffffff",
  dark: "#110a18",
  blue: "##1890ff",
};

interface Theme {
  colors: {
    gray: string;
    white: string;
    dark: string;
    blue: string;
  };
}

export const theme: Theme = {
  colors,
};
