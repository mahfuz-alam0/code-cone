import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Question from '../Question/Question';
import './Course.css'


const Course = () => {
    const [products, set_product] = useState([]);
    const [times, set_times] = useState([]);
    const [lear_time, set_learn_time] = useState(0);

    const notify = () => {
        toast("Congratulations!");
    };

    useEffect(() => {
        fetch('./break_time.JSON')
            .then(res => res.json())
            .then(data => set_times(data))
    }, [])


    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => set_product(data))
    }, [])


    useEffect(() => {

        let stored_course = {};
        let saved_course = 0;
        const stored_course_time = localStorage.getItem('course_time');

        if (stored_course_time) {
            stored_course = JSON.parse(stored_course_time);
        }
        for (const id in stored_course) {
            const new_saved_course = saved_course + stored_course[id];
            saved_course = new_saved_course;
        }

        set_learn_time(saved_course)
    }, [])

    const click_to_cart = (id, time) => {

        let shoppingCart = {};
        const storedCart = localStorage.getItem('course_time');

        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }
        const quantity = shoppingCart[id];

        if (quantity) {
            shoppingCart[id] =quantity + time;
            const new_learn_time = lear_time + time;
            set_learn_time(new_learn_time);
        } else {
            shoppingCart[id] = time;
            const new_learn_time = lear_time + time;
            set_learn_time(new_learn_time);
        }

        localStorage.setItem('course_time', JSON.stringify(shoppingCart));
    }


    return (
        <div className='main_container'>
            <div>
                <div className='container'>
                    <div className='name_icon'>
                        <img src="./images/2352683.png" alt="" />
                        <h2><span className='code'>Code</span>-<span className='corner'>Corner</span></h2>
                    </div>
                    <div className='couese_sele'>
                        <p>Select Your Course Today</p>
                    </div>

                </div>
                <div className='product_container container'>
                    {
                        products.map(product => <Product click_to_cart={click_to_cart} key={product.id} product={product} ></Product>)
                    }
                </div>
                <div>
                    <Question></Question>
                </div>
            </div>
            <div>
                <Cart set_learn_time={set_learn_time} notify={notify} times={times} lear_time={lear_time}></Cart>
            </div>
        </div>
    );
};

export default Course;