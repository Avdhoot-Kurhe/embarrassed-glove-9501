import { EditIcon } from "@chakra-ui/icons";
import { Box, HStack, Input, Select, VStack,Accordion,AccordionButton,AccordionIcon,AccordionItem,AccordionPanel, Checkbox, Button, Image } from "@chakra-ui/react";
import Navbar from "../Home/Navbar/Navbar";



export default function GoaPage(){
    const arr=[
        {
            id:1,
            image:'https://th.bing.com/th/id/OIP.TR4jNl0PWqUC_1Bvrj3IngHaFj?pid=ImgDet&rs=1',
            title:'2BHK Complex Villa',
            location:"Siolim, Goa, India",
            price: '₹85000.00',
            stay: '10 nights'
        },
        {
            id:2,
            image:'https://th.bing.com/th/id/OIP.mo2igQr7gWdU35ELDt-hTAHaDB?pid=ImgDet&rs=1',
            title:'Delux Room',
            location:"Siolim, Goa, India",
            price: '₹26000.00',
            stay: '10 nights'
        },
        {
            id:3,
            image:'https://th.bing.com/th/id/OIP.wN8EULDDCxDwCfYBgI593QHaE8?w=270&h=180&c=7&r=0&o=5&pid=1.7',
            title:'Classic Room',
            location:"Siolim, Goa, India",
            price: '₹24000.00',
            stay: '10 nights'
        },
        {
            id:4,
            image:'https://th.bing.com/th/id/OIP.BtSly698BmJM-h10Z3lqmAHaFL?w=248&h=180&c=7&r=0&o=5&pid=1.7',
            title:'Gardan View Eco House',
            location:"Siolim, Goa, India",
            price: '₹40000.00',
            stay: '10 nights'
        },
        {
            id:5,
            image:'https://th.bing.com/th/id/OIP.LN_WQepsbuODAcpnnPcLvQHaE7?w=265&h=180&c=7&r=0&o=5&pid=1.7',
            title:'1 Bedroom Appartment',
            location:"Siolim, Goa, India",
            price: '₹35000.00',
            stay: '10 nights'
        },
        {
            id:6,
            image:'https://th.bing.com/th/id/OIP.H9fOOhxpN3hs3TRkM8734QHaE8?pid=ImgDet&rs=1',
            title:'2BHK Villa',
            location:"Siolim, Goa, India",
            price: '₹50000.00',
            stay: '10 nights'
        },
        {
            id:7,
            image:'https://th.bing.com/th/id/OIP.42h1eH06uMCmZI5ynVcX8gHaE8?pid=ImgDet&rs=1',
            title:'4BHK Private Villa',
            location:"Siolim, Goa, India",
            price: '₹65000.00',
            stay: '10 nights'
        },
        {
            id:8,
            image:'https://th.bing.com/th/id/OIP._ct_h8Y7TscKZolSz6aw8QHaEH?w=294&h=180&c=7&r=0&o=5&pid=1.7',
            title:'1BHK Complex Villa',
            location:"Siolim, Goa, India",
            price: '₹37000.00',
            stay: '10 nights'
        },
    
    
    ]
function handleBook(){
    setTimeout(() => {
       alert('checking Details') 
    }, 3000);
    setTimeout(() => {
        alert('Taking Payment')
    }, 3000);
    setTimeout(() => {
        alert('Booking Succesfuly')
    }, 3000);
   
}

    return (
        <>
        <Navbar/>
        <Box  shadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} m={'auto'} mb={'2rem'}  mt={'2rem'}  w={'70rem'} p={'4rem'} >
            <VStack>
                <Box fontSize={'4xl'}>Goa Holiday Homes</Box>
                <Box fontSize={'3xl'}>We have 300 Vacation Rentals - search by dates for availability</Box>

                <HStack>
                    <Input type="date" /><Input type={'date'}/>
                    <Select placeholder="Select Guests">
                        <option>1 Person</option>
                        <option>2 Person</option>
                        <option>3 Person</option>
                        <option>4 Person</option>
                        <option>5 Person</option>
                        <option>6 Person</option>
                        <option>7 Person</option>
                        <option>8 Person</option>
                        <option>9 Person</option>
                        <option>10 Person</option>
                        <option>11 Person</option>
                    </Select>
                    <Input bg={'blue'} color={'white'} cursor={'pointer'} type={'Submit'} value="Search" />
                </HStack>
            </VStack>
        </Box>
        
        <HStack margin={0} w={'90%'} m='auto' >
            <Box w={'50%'}textAlign='left'>
                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                            <EditIcon/>Apply Filter
                            <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPan pb={2}>
                                <HStack>
                                    <VStack>
                                    <Box fontSize={'2xl'}>Features</Box>
                                    <Checkbox>Swimming Pool</Checkbox>
                                    <Checkbox>Air Conditioner</Checkbox>
                                    <Checkbox>Internet</Checkbox>
                                    <Checkbox>Television</Checkbox>
                                    <Checkbox>Parking</Checkbox>
                                    <Checkbox>Housekeeping</Checkbox>
                                    <Checkbox>Functional Kitchen</Checkbox>
                                    <Checkbox>Washing Machine</Checkbox>
                                    </VStack>
                                    <VStack>
                                    <Box fontSize={'2xl'}>Property Type</Box>
                                        <Checkbox>Luxury Yacht</Checkbox>
                                        <Checkbox>Camping Ground</Checkbox>
                                        <Checkbox>Farm</Checkbox>
                                        <Checkbox>Homestay</Checkbox>
                                        <Checkbox>Apartment</Checkbox>
                                        <Checkbox>Villa</Checkbox>
                                        <Checkbox>Hostel</Checkbox>
                                        <Checkbox>Serviced Apartment</Checkbox>

                                    </VStack>
                                    
                                    <VStack>
                                    <Box fontSize={'2xl'}>Bedrooms</Box>
                                    <HStack>
                                    <Checkbox>Any</Checkbox>
                                    </HStack>
                                    <HStack>
                                        <Checkbox>1+</Checkbox>
                                        <Checkbox>2+</Checkbox>
                                    </HStack>
                                    <HStack>
                                        <Checkbox>3+</Checkbox>
                                        <Checkbox>4+</Checkbox>
                                    </HStack>
                                    <HStack>
                                        <Checkbox>5+</Checkbox>
                                        <Checkbox>6+</Checkbox>
                                    </HStack>
                                    <Box fontSize={'2xl'}>Price Range</Box>
                                    <Input border={'none'} color={'blue'} type={'range'} min={'1000'} max={'10000'} />
                                    <HStack justifyContent={'space-between'} w={'100%'}>
                                        <Box>1000₹</Box>
                                        <Box>10000₹</Box>
                                    </HStack>
                            

                                    </VStack>
                                </HStack>
                                <HStack justifyContent={'end'}>
                                    <Button>Cancle</Button>
                                    <Button color={'white'} bg='Blue'>Apply</Button>
                                </HStack>
                        </AccordionPan>
                    </AccordionItem>
                </Accordion>
            <VStack>
                {
                    arr.map((el)=>(
                        <>
                        <HStack h={'200px'} w={'90%'} m={1} shadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} >
                            <Box p={2} w={'50%'}>
                                <Image w={'100%'} h={'100%'} src={el.image} alt="image"/>
                            </Box>
                            <VStack align={'normal'} >
                                <Box fontSize={'xl'}>{el.title}</Box>
                                <Box fontSize={'sm'}>{el.location}</Box>
                                <Box fontWeight={'700'}>{el.price}</Box>
                                <Box fontSize={'sm'}>{el.stay}</Box>
                                <Button onClick={handleBook} display={'flex'}>Request To Book</Button>
                            </VStack>
                            
                        </HStack>
                        
                        </>
                    ))
                }

            </VStack>

            </Box>
            <Box w={'50%'} >
                    <iframe width={'100%'} height={1700}
                        src='https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sgoa!6i13'
                        alt='demo'/>
        </Box>
        </HStack>
        </>
    )
}