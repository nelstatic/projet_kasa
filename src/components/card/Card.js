const Card=({id, title, cover})=>{


    return(
        <div className='card'>
                <img src={cover} alt=""/>
                <h3>{title}</h3>
        </div>
    );
};

export default Card;