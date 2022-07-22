import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Image, Input} from "@chakra-ui/react";
import { Link } from "react-router-dom";



export default function SearchBar(){

    return(
        <>
        <Image position={'absolute'} m={'Auto'} w={'100%'} h='30rem' opacity={'95%'} src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg" alt="Tripvillas"/>
        <Box color={'white'} m={'auto'} w={'60%'} pt='10rem'   position={'relative'}>
            <Box  fontWeight={'800'} p={'0 0 0 4rem'} fontSize={'2xl'} textAlign={'left'} >Book <strike>Hotels</strike> Vacation Rentals</Box>
            <Box  p={'0 0 0 4rem'} fontSize={'2xl'} fontWeight={'800'} textAlign={'left'}  >Top Holiday Homes - Villas, Apartments & Homestays</Box>
                <Box bg={'white'} borderRadius={'15'} color={'blackAlpha.600'} h={'3rem'} p={'5px'} display={'flex'} w='100%' border={'1px solid white'}>
                <SearchIcon h={'40px'} /><Input w={'18%'} placeholder="Location"/>
                <ChevronRightIcon h={'40px'}/><Input type={'date'} w={'25%'} placeholder="Check In"/>
                <ChevronLeftIcon h={'40px'}/><Input type={'date'} w={'25%'} placeholder="Check Out"/>
                <select >
                    <option value="">Select guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Person</option>
                    <option value="3">3 Person</option>
                    <option value="4">4 Person</option>
                    <option value="5">5 Person</option>
                    <option value="6">6 Person</option>
                    <option value="7">7 Person</option>
                    <option value="8">8 Person</option>
                </select>
                <Link to={'/Home/Goa'}><Input ml={'20px'} w={'100px'} bg={"Blue"} type={'submit'} color='white' cursor={'pointer'} value={'Search'}/></Link>
                </Box>
        </Box>
        </>
    )
} 