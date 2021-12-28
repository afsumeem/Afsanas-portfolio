import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const ReactDetails = () => {
    return (
        <div>
            <div className='fs-2 text-white ps-5 pt-5' style={{ 'height': '180px', 'backgroundColor': '#000000' }}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/blog" >Blog</Breadcrumb.Item>

                    <Breadcrumb.Item active>React Component's Lifecycle</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='bg-white'>

                <div className='w-75 mx-auto  text-start text-dark pb-5'>
                    <h2 className='fw-bold py-4'>React Component Lifecycle</h2>
                    <p>
                        Components in react are mounted (created) on the DOM and it grow by updating, then unmount (die) on DOM. This is called component lifecycle.
                        <br /> <br />
                        React provides different lifecycle methods at different phases of a component life. According to the phase, it automatically calls the method in that the component is. We can manipulate the components using these methods and these methods give us better control over our component.
                    </p>
                    <h5 className='fw-bold mb-3'>Lifecycle Methods</h5>
                    <ul>
                        <li>initialization</li>
                        <li>mounting</li>
                        <li>updating</li>
                        <li>unmounting</li>
                    </ul>

                    <p><span className='fw-bold'>Initialization: </span>We have to define the initial state and props of the component in this phase and it is done in the constructor of a Component Class.</p>

                    <p><span className='fw-bold'>Mounting: </span>In this phase, when the initialization of the component is completed then the component is mounted on the DOM and it rendered for the first time on the webpage. React follows Naming Conventions of predefined functions where the functions containing “Will” and “Did”. “Will” represents before some specific phase and “Did” represents after the completion of that phase. </p>
                    <ul>
                        <li>componentWillMount() Function</li>
                        <li>componentDidMount() Function</li>
                    </ul>

                    <p><span className='fw-bold'>Updating: </span>In this phase the props and states of a component are updated followed by some events, like- clicking, pressing a key on the keyboard.  </p>

                    <h6 className='fw-bold'>Functions of Updating phase.</h6>
                    <ul>
                        <li>componentWillReceiveProps() Function</li>
                        <li>setState() Function</li>
                        <li>shouldComponentUpdate() Function</li>
                        <li>componentWillUpdate() Function</li>
                        <li>componentDidUpdate() Function</li>
                    </ul>

                    <p><span className='fw-bold'>Unmounting: </span>Unmounting is the final phase of component’s lifecycle that is unmounting the component from the Document Object Model. componentWillUnmount() Function is the sole member of unmounting phase. It gets invoked before the component is removed from the page and it denotes the end of the lifecycle.</p>
                </div>
            </div>
        </div>
    );
};

export default ReactDetails;