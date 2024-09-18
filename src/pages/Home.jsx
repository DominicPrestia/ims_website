import logo from '../assets/Logo.png'

const Home = () => {
    return (
        <div className="homewrapper">
            <div className='logowrapper'>
                <img className='logo' src={logo} alt='logo'></img>
            </div>
        </div>
    )
}

export default Home