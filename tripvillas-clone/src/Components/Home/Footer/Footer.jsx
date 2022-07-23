import { Box, VStack, Tab, TabList, TabPanel, TabPanels, Tabs, HStack } from "@chakra-ui/react";

export default function Footer(){

    return(
        <Box w={'80%'} m='auto'>
        <Tabs w={'90%'}>
            <TabList>
                <Tab>ASIA</Tab>
                <Tab>EUROPE</Tab>
                <Tab>NORTH AMERICA</Tab>
            </TabList>

            <TabPanels>
            <TabPanel>
                <HStack fontStyle={'normal'} justifyContent='space-evenly'>
                    <VStack  cursor={'pointer'} gap={3}>
                    <p>India</p>
                    <p>Georgia</p>
                    <p>Combodia</p>
                    <p>Oman</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Thailand</p>
                    <p>Turkey</p>
                    <p>Nepal</p>
                    <p>Bangaladesh</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Sri Lanka</p>
                    <p>Israel</p>
                    <p>Maldives</p>
                    <p>.</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Indonesia</p>
                    <p>Malaysia</p>
                    <p>Taiwan, province of china</p>
                    <p>.</p>
                    </VStack>

                </HStack>
            </TabPanel>
            <TabPanel>
            <HStack fontStyle={'normal'} justifyContent='space-evenly'>
                    <VStack  cursor={'pointer'} gap={3}>
                    <p>Croatia</p>
                    <p>Spain</p>
                    <p>Finland</p>
                    <p>Austria</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Swedan</p>
                    <p>Portugal</p>
                    <p>Poland</p>
                    <p>Siovenia</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Bulgaria</p>
                    <p>Albania</p>
                    <p>Denmark</p>
                    <p>France</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Germany</p>
                    <p>Greece</p>
                    <p>Norway</p>
                    <p>Belgium</p>
                    </VStack>
                </HStack>

            </TabPanel>
            <TabPanel>
            <HStack fontStyle={'normal'} justifyContent='space-evenly'>
                    <VStack  cursor={'pointer'} gap={3}>
                    <p>United State of America</p>
                    <p>Cuba</p>
                    <p>Jamaica</p>
                    <p>Saint Martin</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Panama</p>
                    <p>Mexico</p>
                    <p>Canada</p>
                    <p>Aruba</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Saint Martin</p>
                    <p>Curacao</p>
                    <p>Dominican Republic</p>
                    <p>.</p>
                    </VStack>
                    <VStack cursor={'pointer'} gap={3}>
                    <p>Costa Rico</p>
                    <p>Puerto Rico</p>
                    <p>Belize</p>
                    <p>.</p>
                    </VStack>
                </HStack>
            </TabPanel>
            </TabPanels>
        </Tabs>
        <Box h={'2rem'}>

        </Box>
        </Box>
    )
}