import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const textTheme = extendTheme({
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

})

export default textTheme;