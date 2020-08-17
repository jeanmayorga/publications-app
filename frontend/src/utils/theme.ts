export interface Theme {
  colors: {
    gray: string;
    gray2: string;
    white: string;
    dark: string;
    blue: string;
  };
  titleSizes: {
    large: string;
    normal: string;
    mini: string;
  };
}

export const theme: Theme = {
  colors: {
    gray: "#eeeeee",
    gray2: "#ddd",
    white: "#ffffff",
    dark: "#110a18",
    blue: "#1890ff",
  },
  titleSizes: {
    large: "24px",
    normal: "20px",
    mini: "16px",
  },
};
