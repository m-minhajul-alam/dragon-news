

const NewsCard = ({ news }) => {
    const { _id, total_view, title, thumbnail_url, image_url, details } = news;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{total_view}</div>
                    <div className="badge badge-outline"></div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;