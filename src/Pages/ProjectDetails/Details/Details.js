import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../Navigation/Navigation';
import Detail from '../Detail/Detail';

const Details = () => {
    const { id } = useParams();

    const [details, setDetails] = useState([]);

    // fetch service detail from json
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []);


    // filter single project item
    const exactDataItem = details.filter(projectId => projectId._id === id);

    return (
        <>
            <Navigation />
            <div className="my-5">
                {
                    exactDataItem.map(projectDetail => <Detail
                        projectDetail={projectDetail}
                        key={projectDetail._id}
                    >
                    </Detail>)
                }
            </div>


        </>
    );
};

export default Details;