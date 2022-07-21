import { Box, Image, Input, SearchIcon, VStack } from "@chakra-ui/react";



export default function SearchBar(){

    return(
        <>
        <Image position={'absolute'} m={'Auto'} w={'100%'} h='30rem' opacity={'95%'} src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg" alt="Tripvillas"/>
        <Box color={'white'} m={'auto'} w={'60%'} pt='10rem'   position={'relative'}>
            <Box  fontWeight={'800'} p={'0 0 0 4rem'} fontSize={'2xl'} textAlign={'left'} >Book <strike>Hotels</strike> Vacation Rentals</Box>
            <Box p={'0 0 0 4rem'} fontSize={'2xl'} fontWeight={'800'} textAlign={'left'}  >Top Holiday Homes - Villas, Apartments & Homestays</Box>
            <VStack>
                <Box><SearchIcon/><Input placeholder="Location"/></Box>
            </VStack>

        </Box>
        </>
    )
} 