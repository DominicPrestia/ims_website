import logo from '../assets/Logo.png'

const Footer = () => {
    return (
        <div className="footerwrapper">
            <div className='footer-left'>
                <img src={logo} alt='logo'></img>
                <p>&copy; Industrial Medical Solutions LLC. All Rights Reserved </p>
            </div>
            <div className='footer-right'>
                <h2>Contact:</h2>
                <h3>eddiegarcia10@hotmail.com</h3>
            </div>
        </div>
    )
}

export default Footer