import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='shadow-xl p-5'>
                <h1 className='text-xl font-bold'> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
                <p className="font-mono">
                    useState is a react build in hook which help us to manage state. We don't change the state directly because If i change the state then it will not re-render the component. Instead use useState method.  It schedules an update to a component's state object. When state changes, the component responds by re-rendering.I can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.
                </p>
            </div>
            <div className='shadow-xl p-5'>
                <h1 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h1>
                <p className="font-mono">A state is just a javascript object which holds information of the component which can affect the output of the render function. You can manage the state within the component, and whenever you change the state, React re-renders the component. There are two ways you can change the state: one is using this.state and another one is this.setState.</p>
            </div>
            <div className='shadow-xl p-5'>
                <h1 className='text-xl font-bold'>How does prototypical inheritance work?</h1>
                <p className='font-mono'>Prototypal inheritance is a language feature that helps in that. In JavaScript, objects have a special hidden property [ [Prototype]] (as named in the specification), that is either null or references another object.</p>
            </div>
            <div className='shadow-xl p-5'>
                <h1 className='text-xl font-bold'>What is a unit test? Why should write unit tests?</h1>
                <p className='font-mono'>Unit testing is one of the software testing types that includes initial testing phase. With unit testing small modules of the program are tested individually. Unit testing is one of the software testing types that includes initial testing phase. The main reason to write unit tests is to gain confidence. Unit tests allow us to make changes, with confidence that they will work. Unit tests allow change.</p>
            </div>
            <div className='shadow-xl p-5'>
                <h1 className='text-xl font-bold'> How will you improve the performance of a React Application?</h1>
                <p className='font-mono'>I will improve my React App Performance by Using Throttling and Debouncing Learn how to improve performance by implementing throttling and debouncing with lodash, underscore or RxJs W hen building an app using React, we always have this problem of limiting the number of expensive calls, async network requests and DOM updates.</p>
            </div>
        </div>
    );
};

export default Blogs;