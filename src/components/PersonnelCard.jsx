

const PersonnelCard = ({ name, title, headshot }) => {

    return (
        <div className='cardStructure'>
            <div className='cardwrapper'>
                <div className='imgwrapper'>
                    <img className='profilePic' src={headshot} alt="profile pic" />
                </div>
                <h3 className='titlewrapper'>{name}</h3>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default PersonnelCard