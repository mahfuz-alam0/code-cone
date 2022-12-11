import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'
import Time from '../Time/Time';
import { useEffect, useState } from 'react';

const Cart = (props) => {
    

    const { times, lear_time, notify } = props;
    const [break_time, set_break_time] = useState(0);
    const [total_time, set_total_time] = useState(0);
    
    useEffect(() => {
        set_total_time(lear_time);
    },[lear_time])

    useEffect(() => {
        let time_count = {};
        const stored_time = localStorage.getItem('Break_time');
        if (stored_time) {
            time_count = JSON.parse(stored_time);
        }
        for (const id in time_count) {
            set_break_time(time_count[id]);
         }
        
    }, [])

    
    const click_handle = (id, time) => {
        let timeCount = {};
        const storedCart = localStorage.getItem('Break_time');
        if (storedCart) {
            localStorage.removeItem('Break_time');
        }
        const quantity = timeCount[id];
        if (quantity) {
            timeCount[id] = time;
        }
        else {
            timeCount[id] = time;
        }
        localStorage.setItem('Break_time', JSON.stringify(timeCount));
        set_break_time(time);
    }


    return (
        <div className='cart_container'>
            <div className='persone'>
                <img src="./images/my-img.png" alt="" />
                <div className="persone_info">
                    <h3>Mahfuz Alam</h3>
                    <p><FontAwesomeIcon icon={faLocationDot} /> Narayanganj, Dhaka</p>
                </div>
            </div>
            <div className='physical_info'>
                <div className='info_short'>
                    <p>8.5<small></small></p>
                    <p>Rating</p>
                </div>
                <div className='info_short'>
                    <p>6.5<small>yrs</small></p>
                    <p>Experience</p>
                </div>
                <div className='info_short'>
                    <p>25<small>yrs</small></p>
                    <p>Age</p>
                </div>
            </div>
            <div className='main_break_container'>
                <h3>Add a Break</h3>
                <div className='break_container'>
                    <div className='break_time'>
                        {
                            times.map(time => <Time key={time.id} time={time} click_handle={click_handle} ></Time>)
                        }

                    </div>
                </div>
            </div>
            <div className='show_result'>
                <h3>Course Details</h3>
                <div className='show_time learning_time'>
                    <p>Learning Time</p>
                    <p>{total_time} Minutes</p>
                </div>
                <div className="show_time break_time_show">
                    <p>Break Time</p>
                    <p>{break_time} Minutes</p>
                </div>
            </div>
            <button onClick={notify}  className='activity_btn'>Activity Completed</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Cart;