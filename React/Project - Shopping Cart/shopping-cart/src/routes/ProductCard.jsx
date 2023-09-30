import PropTypes from 'prop-types';

export default function ProductCard({ id, title, price, desc, category }) {
    return(
        <>
            <div>{id}</div>
            <div>{title}</div>
            <div>{price}</div>
            <div>{desc}</div>
            <div>{category}</div>
        </>
    )
}

ProductCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    desc: PropTypes.string,
    category: PropTypes.string,
}