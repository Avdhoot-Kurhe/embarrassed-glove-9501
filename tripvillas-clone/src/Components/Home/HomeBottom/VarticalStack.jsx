import { Box, Button, HStack, Image, VStack } from "@chakra-ui/react";



export default function VarticalStack(){

    return(
        <>
        <Box display={'flex'} justifyContent={'space-evenly'}>
            <VStack>
                <Box>Holiday Home Investment Opportunities</Box>
                <HStack gap={10}>
                    <VStack w={'80px'}>
                    <Image w={'60px'} h={'40px'} src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/growth.svg"/>
                    <Box fontSize={'xx-small'} w={'80px'}>Low Cost High Appreciation</Box>
                    </VStack>
                    <VStack w={'80px'}>
                    <Image w={'60px'} h={'40px'} src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/maids.svg"/>
                    <Box fontSize={'xx-small'} w={'80px'}>Professionally Managed</Box>
                    </VStack>
                    <VStack w={'80px'}>
                    <Image w={'60px'} h={'40px'} src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/give-money.svg"/>
                    <Box fontSize={'xx-small'} w={'80px'}>Guaranteed To Produce Income</Box>
                    </VStack>
                    <VStack w={'80px'}>
                    <Image w={'60px'} h={'40px'} src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/plan.svg"/>
                    <Box fontSize={'xx-small'} w={'80px'}>We Designed Floor Plans</Box>
                    </VStack>  
                </HStack>
                
                <Box p={2}  cursor='pointer' color={'white'} bg={'blue'} fontSize={'xx-small'}>EXPLORE INVESTMENT OPPORTUNITIES</Box>
                </VStack>
            <VStack>
                <Box>Are You A Holiday Home Owner/Manager?</Box>
                <HStack gap={5}>
                    <VStack w={'80px'}>
                    <Image w={'60px'} h={'40px'} src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/network.svg"/>
                    <Box fontSize={'xx-small'} w={'80px'}>Get Bookings From 100+ Websites</Box>
                    </VStack>

                    <VStack w={'80px'}>
                    <Image w={'60px'} h={'40px'} src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/layout.svg"/>
                    <Box fontSize={'xx-small'} w={'80px'}>One Dashboard - Total Control</Box>
                    </VStack>
                    <VStack w={'80px'}>
                    <Image w={'60px'} h={'40px'} src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/flash.svg"/>
                    <Box fontSize={'xx-small'} w={'80px'}>Instant Book Or Request To Book</Box>
                    </VStack>
                    <VStack w={'80px'}>
                    <Image w={'60px'} h={'40px'} src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/smartphone-call.svg"/>
                    <Box fontSize={'xx-small'} w={'80px'}>Both iOS & Android App Available.</Box>
                    </VStack> 
                </HStack>
                <Box p={2}  cursor='pointer' color={'white'} bg={'blue'} fontSize={'xx-small'}>LIST YOUR PROPERTY</Box>
                
            </VStack>
        </Box>
        </>
    )
}