import React from 'react';

const Time = (props) => {
    
    const { time, click_handle } = props;
    

    return (
        <div>
            <p onClick={()=>{click_handle(time.id, time.time)}}>{time.time}m</p>
        </div>
    );
};

export default Time;