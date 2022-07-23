import Footer from "./Footer/Footer"
import VarticalStack from "./HomeBottom/VarticalStack"
import Navbar from "./Navbar/Navbar"
import SearchBar from "./Search/SearchBar"
import Sliding from "./Sliding/Sliding"
import SlidingVacation from "./Sliding/Sliding copy"


export function Home(){

    return(
        <>
       <Navbar/>
       <SearchBar/>
       <Sliding/>
       <VarticalStack/>
       <SlidingVacation/>
       <Footer/>
        </>
    )
}