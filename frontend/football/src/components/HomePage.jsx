import SearchBar from './SearchBar'
import CarouselThing from './CarouselThing'
import Nav from './Nav'

const HomePage = () => {

    return (
        <div className='home'>
            <SearchBar />
            <h1>Home</h1>  
            <CarouselThing />      
            <CarouselThing /> 
            <CarouselThing /> 
            <Nav />
        </div>
    )
}

export default HomePage