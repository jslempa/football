import SearchBar from './SearchBar'
import CarouselThing from './CarouselThing'
import Nav from './Nav'

const HomePage = (props) => {

    console.log('props', props)

    

    return (
        <div className='home'>
            <SearchBar />
            {/* <h1>Hello {props.user[0].username}!</h1>   */}
            {/* <CarouselThing />       */}
            {/* <CarouselThing />  */}
            {/* <CarouselThing />  */}
            <Nav />
        </div>
    )
}

export default HomePage