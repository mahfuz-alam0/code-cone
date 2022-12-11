import React from 'react';

const Question = () => {
    return (
        <div className='question_container container'>
            <div className='question'>
                <h3>How does react work?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            </div>
            <div className='question'>
                <h3>What is deffarents between props and state ?</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            </div>
            <div className='question'>
                <h3>Without load data what kind or work it do?</h3>
                <p>This React data fetching tutorial was updated on 9 Aug, 2022 to include sections on what data fetching is, how to display fetched data, how to fetch data through caching libraries, and to update outdated links and code demos.
                Modern applications handle lots of data. React in particular is great at displaying your data in a hierarchical component view, but how do your components get the data? There are many ways to go about it, each with its own pros and cons</p>
            </div>
        </div>
    );
};

export default Question;