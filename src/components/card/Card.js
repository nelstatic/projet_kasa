const Card=({id, title, cover})=>{

    return(
        <div className='card'>
                <div className="overlay"></div>
                <img src={cover} alt=""/>
                <h3>{title}</h3>
        </div>
    );
}

export default Card;