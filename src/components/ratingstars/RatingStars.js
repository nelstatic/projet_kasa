import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingStars=({rating})=>{
    const stars = Array(5).fill(0).map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className={i < rating ? 'star-filled' : 'star'}/>
    ));

    return(
        <div className="rating-stars">
            {stars}
        </div>
    );
}

export default RatingStars;