import React from 'react';
import { useFormik } from 'formik';
import { Box, Input, Button , Text, Flex, VStack, FormControl, FormLabel} from "@chakra-ui/react";

interface FormProps {
    email: string, 
    password: string, 
    subtitle : string

}

const AuthForm: React.FC<FormProps> = (props) => {

    const formik = useFormik({
        initialValues: {
          email: props.email,
          password: props.password
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2))
        },
      })
      return (
        <Flex bg="gray.100" align="center" justify="center" h="100vh" direction="column">
                <Text>Welcome to Notes</Text>
                <Text>{props.subtitle}</Text>
            <Box bg="white" p={6} rounded="md">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      )
    }

export default AuthForm;