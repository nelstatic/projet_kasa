const LandlordInfo = ({name, picture}) =>{
    return(
        <div className="landlord-info">
            <p>{name}</p>
            <img src={picture} alt=""/>            
        </div>
    );
}

export default LandlordInfo;