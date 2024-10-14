const Card=({id, title, cover})=>{


    return(
        <div className='card'>
            <a href="#">
                <img src={cover}/>
                <h3>{title}</h3>
            </a>
        </div>
    );
};

export default Card;