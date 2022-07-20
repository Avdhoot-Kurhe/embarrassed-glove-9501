import { Input,Box, Stack, NumberInputField,NumberInput, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";




export default function SignIn(){
        const format = (val) => `+` + val
        const parse = (val) => val.replace(/^\$/, '')
        const [value, setValue] = React.useState('91')
    return(
        <>
        <Navbar/>
        
        <Box bg={"whatsapp.100"} w={'26rem'} p={"1rem"} border="1px solid blue" m="Auto" mt={"3rem"}>
            <Box fontSize={"2xl"} p>Sign In Page</Box>
        <Stack shouldWrapChildren direction='row'>
            <NumberInput size='s' maxW={16} defaultValue={91} min={1}
                onChange={(valueString) => setValue(parse(valueString))}
                value={format(value)}
                max={375}>
                <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
                </NumberInput>
        <Input w={"15rem"} type='number' placeholder="Phone No"/>
        </Stack>
        <br/>
        <Stack shouldWrapChildren direction='row'><Text p={'0.5rem'}>Create Password:</Text><Input w={"15rem"} type='password' placeholder="Password"/></Stack>
        <br/>
        <Link to={'/'}>
        <Input w={"15rem"} bg="red.400" cursor="pointer" type='submit' value={'Sign In'}/></Link>
        </Box>
        
        </>
    )
}