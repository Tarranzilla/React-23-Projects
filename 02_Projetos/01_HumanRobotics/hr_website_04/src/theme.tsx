export const colorTokens = {
    grey: {
        50: "#f9f9f9",
        100: "#f2f2f2",
        200: "#e8e8e8",
        300: "#d8d8d8",
        400: "#b4b4b4",
        500: "#949494", // Harmonic ?
        600: "#6c6c6c",
        700: "#585858",
        800: "#3a3a3a",
        900: "#1a1a1a",
    },

    primary: {
        50: "#efe6fa",
        100: "#d4c3f2",
        200: "#b89aea",
        300: "#9b70e2",
        400: "#844edb", // Harmonic
        500: "#6c2bd4",
        600: "#6226cd",
        700: "#521dc5",
        800: "#4316be",
        900: "#2805b0",
    },

    analogous1: {
        50: "#e7e8fa",
        100: "#c4c6f2",
        200: "#9ba1ea",
        300: "#707ce2",
        400: "#4e5fdb", // Harmonic
        500: "#2541d3",
        600: "#2039c8",
        700: "#112ebc",
        800: "#0022b1",
        900: "#000899",
    },

    analogous2: {
        50: "#f7e3f8",
        100: "#e9b8ef",
        200: "#da86e5",
        300: "#cb4edb", // Harmonic
        400: "#be00d3",
        500: "#ae00c6",
        600: "#9e00c1",
        700: "#8700bb",
        800: "#7300b5",
        900: "#4900a9",
    },

    triadic1: {
        50: "#f7e1f0",
        100: "#ecb5d9",
        200: "#e284bf",
        300: "#db4ea5", // Harmonic
        400: "#d81590",
        500: "#d50078",
        600: "#c40074",
        700: "#ae006c",
        800: "#980066",
        900: "#70005a",
    },

    triadic2: {
        50: "#fffceb",
        100: "#fff6cd",
        200: "#fef0ae",
        300: "#feea91",
        400: "#fde57d",
        500: "#fbdf6d",
        600: "#f7d169",
        700: "#f0bb62",
        800: "#e8a65b",
        900: "#db844e", // Harmonic
    },

    complementary: {
        50: "#f3fae7",
        100: "#e1f3c4",
        200: "#cdea9d",
        300: "#b7e272",
        400: "#a5db4e", // Harmonic
        500: "#94d425",
        600: "#83c41b",
        700: "#6daf0d",
        800: "#569b00",
        900: "#2d7900",
    },
};

//mui theme settings

export const themeSettings = (mode: any) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      // values for dark mode
                      primary: {
                          dark: colorTokens.complementary[800],
                          main: colorTokens.complementary[400],
                          light: colorTokens.complementary[100],
                      },
                      neutral: {
                          dark: colorTokens.grey[800],
                          main: colorTokens.grey[500],
                          light: colorTokens.grey[100],
                      },
                      background: {
                          default: colorTokens.grey[900],
                          alt: colorTokens.grey[800],
                      },
                  }
                : {
                      // values for light mode
                      primary: {
                          dark: colorTokens.primary[800],
                          main: colorTokens.primary[400],
                          light: colorTokens.primary[100],
                      },
                      neutral: {
                          dark: colorTokens.grey[100],
                          main: colorTokens.grey[500],
                          light: colorTokens.grey[800],
                      },
                      background: {
                          default: colorTokens.grey[50],
                          alt: colorTokens.grey[100],
                      },
                  }),
        },
        typography: {
            fontFamily: ["'Poppins'", "sans-serif"].join(","),
            fontSize: 14,

            h1: {
                fontFamily: ["'Poppins'", "sans-serif"].join(","),
                fontWeight: 700,
                fontSize: "3.5rem",
            },
            h2: {
                fontFamily: ["'Poppins'", "sans-serif"].join(","),
                fontWeight: 700,
                fontSize: "2.5rem",
            },
            h3: {
                fontFamily: ["'Poppins'", "sans-serif"].join(","),
                fontWeight: 700,
                fontSize: "2rem",
            },
            h4: {
                fontFamily: ["'Poppins'", "sans-serif"].join(","),
                fontWeight: 500,
                fontSize: "1.5rem",
            },
            h5: {
                fontFamily: ["'Poppins'", "sans-serif"].join(","),
                fontWeight: 700,
                fontSize: "1.25rem",
            },
            h6: {
                fontFamily: ["'Poppins'", "sans-serif"].join(","),
                fontWeight: 700,
                fontSize: "1rem",
            },
        },
    };
};
