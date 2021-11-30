import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { id } = useParams();

    const [projectDetail, setProjectDetail] = useState([])

    useEffect(() => {

        fetch()
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])


    return (
        <div>

        </div>
    );
};

export default ProjectDetails;