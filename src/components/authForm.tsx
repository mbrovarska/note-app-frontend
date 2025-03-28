import React from 'react';
import { useFormik } from 'formik';
import { Box, Button , Text, Flex, VStack, Image} from "@chakra-ui/react";
import FormField from "./formField";
import Logo from "../assets/icons/logo.svg";

interface FormProps {
    subtitle : string
}

const AuthForm: React.FC<FormProps> = (props) => {

    const formik = useFormik({
        initialValues: {
          username: "",
          email: "",
          password: ""
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2))
        },
      })
      return (
        <Flex bg="white" align="center" justify="center" h="100vh" direction="column">
            <Box bg="white" p={6} rounded="md"  w="50vh"  borderRadius="md" 
                borderColor="grey200" borderWidth="1px">
                <Image src={Logo}/>
                <Text fontSize="textxl" fontWeight={"bold"}>Welcome to Notes</Text>
                <Text fontSize="textlg" fontWeight={"semibold"}>{props.subtitle}</Text>
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
              <FormField id="username"
                          name="username"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.username}
                          label="Username"   
                                />

                <FormField id="email"
                          name="email"
                          type="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          label="Email Address"               />

                <FormField id="password"
                          name="password"
                          type="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          label="Password"               />
        
                <Button type="submit" colorScheme="purple" width="full">
                  Sign Up
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      )
    }

export default AuthForm;