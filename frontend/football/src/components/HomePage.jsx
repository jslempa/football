import SearchBar from './SearchBar'
import Nav from './Nav'

const HomePage = () => {

    return (
        <div className='home'>
            <SearchBar />
            <h1>Home</h1>        
            <Nav />
        </div>
    )
}

export default HomePage