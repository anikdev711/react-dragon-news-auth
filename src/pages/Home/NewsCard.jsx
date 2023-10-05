import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const NewsCard = ({ aNews }) => {
    // console.log(aNews);
    const {_id, image_url, title, details} = aNews;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-8">
                <figure><img src={image_url} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200 ? <p>{details.slice(0,200)} <Link className='text-blue-600 font-bold' to={`/news/${_id}`}>Read more...</Link></p>
                        : <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    aNews: PropTypes.object
}