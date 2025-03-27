import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const customConfigTheme  = extendTheme({
    theme: {
      fonts: {
        text: { value: "inter, sans-serif" },
      },
      fontSizes: {
        textxl: { value: "24px" },
        textlg: { value: "20px" },
        textmd: { value: "16px" },
        textsm: { value: "14px" },
        textxs: { value: "12px" },
      },
      fontWeights: {
        bold: { value: "700" },
        semibold: { value: "500" },
        medium: { value: "400" },
        regular: { value: "200" },
      },
      colors: {
            text: {
                  black900: "0E121B",
                  black950: "0E121B",
                  black800: "232530",
                  black700: "2B303B",
                  blue: "2547D0",
                  indigo: "335CFF",
                  green: "21C16B",
                  lightGreen: "D1FBE9",
                  grey600: "525866",
                  grey500: "717784",
                  grey400: "99A0AE",
                  grey300: "CACFD8",
                  grey200: "E0E4EA",
                  grey100: "EBF1FF",
                  grey50: "F3F5F8",
                  grey: "F5F7FA",
                  white: "FFFFFF",
                  red: "FB3748",
                  coral: "FFD5D8"
            }

      },
      components: {
            Button: {
              // 1. We can update the base styles
              baseStyle: {
                fontWeight: 'bold', // Normally, it is "semibold"
              },
              // 2. We can add a new button size or extend existing
              sizes: {
                xl: {
                  h: '56px',
                  fontSize: 'lg',
                  px: '32px',
                },
              },
              // 3. We can add a new visual variant
              variants: {
                'with-shadow': {
                  bg: 'red.400',
                  boxShadow: '0 0 2px 2px #efdfde',
                },
                // 4. We can override existing variants
                solid: (props: StyleFunctionProps) => ({
                  bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
                }),
                // 5. We can add responsive variants
                sm: {
                  bg: 'teal.500',
                  fontSize: 'md',
                },
              },
              // 6. We can overwrite defaultProps
              defaultProps: {
                size: 'lg', // default is md
                variant: 'sm', // default is solid
                colorScheme: 'green', // default is gray
              },
            },
      },
      spacing: {
        "sp0": { value: "0px" },
        "sp025": { value: "2px" },
        "sp050": { value: "4px" },
        "sp075": { value: "6px" },
        "sp100": { value: "8px" },
        "sp150": { value: "12px" },
        "sp200": { value: "16px" },
        "sp250": { value: "20px" },
        "sp300": { value: "24px" },
        "sp400": { value: "32px" },
        "sp500": { value: "40px" },
        "sp600": { value: "48px" },
        "sp800": { value: "64px" },
        "sp1000": { value: "80px" },
        // "144": { value: "36rem" },
      },
      redius: {
        "r0": { value: "0px" },
        "r4": { value: "4px" },
        "r6": { value: "6px" },
        "r8": { value: "8px" },
        "r10": { value: "10px" },
        "r12": { value: "12px" },
        "r16": { value: "16px" },
        "r20": { value: "20px" },
        "r24": { value: "24px" },
        "rfull": { value: "999px" },
      }
    }
})

export default customConfigTheme;