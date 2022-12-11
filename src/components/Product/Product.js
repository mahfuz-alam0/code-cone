import './Product.css';

const Product = (props) => {
    const {click_to_cart, product} = props;
    const { name, salary, time, img, id } = product


    return (
        <div className='product'>
            <div className='sub_product'>
                <img src={img} alt="" />
                <div className='product_info'>
                    <h3>{name}</h3>
                    <p>Salary Range:${salary}/hours</p>
                    <p>Time Required: {time} min</p>
                </div>
            </div>
            <button onClick={()=>{click_to_cart(id, time)}} className='btn_cart'>
                Add to List
            </button>
        </div>
    );
};

export default Product;