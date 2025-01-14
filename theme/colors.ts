export const presets = (brand: string) => {
  
  const colors = {
    default: {
      50: "#ecefff",
      100: "#cbceeb",
      200: "#a9aed6",
      300: "#888ec5",
      400: "#666db3",
      500: "#4d5499",
      600: "#3c4178",
      700: "#2a2f57",
      800: "#181c37",
      900: "#080819",
       
    },
    red: {
      50: "#ffe1e1",
      100: "#ffb1b1",
      200: "#ff7f7f",
      300: "#ff4c4c",
      400: "#ff1a1a",
      500: "#e60000",
      600: "#b40000",
      700: "#810000",
      800: "#500000",
      900: "#210000",
    },
    pink: {
      50: "#ffe3ea",
      100: "#ffb3c0",
      200: "#fd8196",
      300: "#fc516d",
      400: "#fc2544",
      500: "#e3132a",
      600: "#b10b21",
      700: "#7f0517",
      800: "#4d000d",
      900: "#1e0003",
    },
    grape: {
      50: "#fce7ff",
      100: "#ecbbf8",
      200: "#dd8ff0",
      300: "#ce63e9",
      400: "#c037e1",
      500: "#a61fc8",
      600: "#81169c",
      700: "#5c0f71",
      800: "#380845",
      900: "#15001b",
    },
    violet: {
      50: "#ffe7ff",
      100: "#f7bbf8",
      200: "#f08ff0",
      300: "#e963e9",
      400: "#e338e3",
      500: "#c920c9",
      600: "#9c179c",
      700: "#700f70",
      800: "#440744",
      900: "#190119",
    },
    indigo: {
      50: "#f7e3ff",
      100: "#e0b2ff",
      200: "#c980ff",
      300: "#b34efe",
      400: "#9e1dfd",
      500: "#8405e4",
      600: "#6702b2",
      700: "#4a0080",
      800: "#2c004e",
      900: "#11001e",
    },
    blue: {
      50: "#ecefff",
      100: "#cbceeb",
      200: "#a9aed6",
      300: "#888ec5",
      400: "#666db3",
      500: "#4d5499",
      600: "#3c4178",
      700: "#2a2f57",
      800: "#181c37",
      900: "#080819",
    },
    cyan: {
      50: "#d6ffff",
      100: "#aaffff",
      200: "#7affff",
      300: "#47ffff",
      400: "#1affff",
      500: "#00e5e6",
      600: "#00b2b3",
      700: "#008081",
      800: "#004d4e",
      900: "#001b1d",
    },
    teal: {
      50: "#daffff",
      100: "#afffff",
      200: "#80ffff",
      300: "#52ffff",
      400: "#31fefe",
      500: "#24e4e5",
      600: "#12b2b3",
      700: "#007f80",
      800: "#004c4e",
      900: "#001b1c",
    },
    green: {
      50: "#e0ffe0",
      100: "#b1ffb1",
      200: "#80ff80",
      300: "#4fff4e",
      400: "#25ff20",
      500: "#14e60c",
      600: "#08b304",
      700: "#008000",
      800: "#004d00",
      900: "#001b00",
    },
    lime: {
      50: "#deffde",
      100: "#afffaf",
      200: "#7dff7e",
      300: "#4bff4c",
      400: "#1aff1a",
      500: "#00e600",
      600: "#00b300",
      700: "#008000",
      800: "#004e00",
      900: "#001c00",
    },
    yellow: {
      50: "#ffffda",
      100: "#ffffad",
      200: "#ffff7d",
      300: "#ffff4b",
      400: "#ffff1a",
      500: "#e5e600",
      600: "#b2b300",
      700: "#7f8000",
      800: "#4c4d00",
      900: "#191b00",
    },
    orange: {
      50: "#fff6da",
      100: "#ffe4ad",
      200: "#ffd27d",
      300: "#ffc04b",
      400: "#ffae1a",
      500: "#e69500",
      600: "#b37300",
      700: "#815300",
      800: "#4e3200",
      900: "#1e1000",
    },
  };
  return brand ? colors[brand] : colors;
};
