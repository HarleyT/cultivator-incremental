import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// colour design tokens
export const tokens = (mode) => ({
    ...(mode === 'dark'
    ? {
        black: {
            100: "#d3d4d6",
            200: "#a7a9ad",
            300: "#7a7e83",
            400: "#4e535a",
            500: "#222831",
            600: "#1b2027",
            700: "#14181d",
            800: "#0e1014",
            900: "#07080a"
        },
        primary: {
            100: "#d7d8da",
            200: "#b0b2b5",
            300: "#888b90",
            400: "#61656b",
            500: "#393e46",
            600: "#2e3238",
            700: "#22252a",
            800: "#17191c",
            900: "#0b0c0e"
        },
        blueAccent: {
            100: "#cceff0",
            200: "#99dee1",
            300: "#66ced3",
            400: "#33bdc4",
            500: "#00adb5",
            600: "#008a91",
            700: "#00686d",
            800: "#004548",
            900: "#002324"
        },
        whiteAccent: {
            100: "#fcfcfc",
            200: "#f8f8f8",
            300: "#f5f5f5",
            400: "#f1f1f1",
            500: "#eeeeee",
            600: "#bebebe",
            700: "#8f8f8f",
            800: "#5f5f5f",
            900: "#303030"
        },
    }
    : {
        black: {
            100: "#07080a",
            200: "#0e1014",
            300: "#14181d",
            400: "#1b2027",
            500: "#222831",
            600: "#4e535a",
            700: "#7a7e83",
            800: "#a7a9ad",
            900: "#d3d4d6"
        },
        primary: {
            100: "#0b0c0e",
            200: "#17191c",
            300: "#22252a",
            400: "#2e3238",
            500: "#393e46",
            600: "#61656b",
            700: "#888b90",
            800: "#b0b2b5",
            900: "#d7d8da"
        },
        blueAccent: {
            100: "#002324",
            200: "#004548",
            300: "#00686d",
            400: "#008a91",
            500: "#00adb5",
            600: "#33bdc4",
            700: "#66ced3",
            800: "#99dee1",
            900: "#cceff0"
        },
        whiteAccent: {
            100: "#303030",
            200: "#5f5f5f",
            300: "#8f8f8f",
            400: "#bebebe",
            500: "#eeeeee",
            600: "#f1f1f1",
            700: "#f5f5f5",
            800: "#f8f8f8",
            900: "#fcfcfc"
        },
    }),
});

// mui theme settings
export const themeSettings = (mode) => {
    const colours = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
            ? {
                primary: {
                    main: colours.primary[500],
                },
                secondary: {
                    main: colours.blueAccent[500],
                },
                neutral: {
                    dark: colours.black[700],
                    main: colours.black[500],
                    light: colours.black[100]
                },
                background: {
                    default: colours.primary[500],
                }
            } : {
                primary: {
                    main: colours.primary[100],
                },
                secondary: {
                    main: colours.blueAccent[500],
                },
                neutral: {
                    dark: colours.black[700],
                    main: colours.black[500],
                    light: colours.black[100]
                },
                background: {
                    default: "#fcfcfc",
                },
            }),
        },
        typography: {
            fontFamily: ["Open Sans", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 14,
            }
        }
    };
};

// context for colour mode

export const ColourModeContext = createContext({
    toggleColourMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState('dark');

    const colourMode = useMemo(
        () => ({
            toggleColourMode: () =>
            setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colourMode];
}