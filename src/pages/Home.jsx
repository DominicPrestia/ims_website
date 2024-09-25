import logo from '../assets/Logo.png'

const Home = () => {
    return (
        <div id='home' className="homewrapper">
            <div className='logowrapper'>
                <img className='logo' src={logo} alt='logo'></img>
            </div>
            <div className='homebackground'></div>
        </div>
    )
}

export default Home