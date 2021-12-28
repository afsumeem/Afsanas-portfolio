import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const CrudDetails = () => {
    return (
        <div>
            <div className='fs-2 text-white ps-5 pt-5' style={{ 'height': '180px', 'backgroundColor': '#000000', 'zIndex': '1' }}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/blog" >Blog</Breadcrumb.Item>

                    <Breadcrumb.Item active>CRUD Operations</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='bg-white'>

                <div className='w-75 mx-auto  text-start text-dark pb-5'>
                    <h2 className='fw-bold py-4'>CRUD Operations</h2>
                    <p>
                        CRUD operation refers to Create, Read, Update and Delete operation.
                    </p>
                    <h6 className='fw-bold'>C --- Create</h6>
                    <h6 className='fw-bold'>R --- Read</h6>
                    <h6 className='fw-bold'>U --- Update</h6>
                    <h6 className='fw-bold'>D --- Delete</h6>
                    <br />
                    <p>
                        As with other database management systems, MongoDB allows us to interact and manage with data through four fundamental types of data operations which are called CRUD operations.
                    </p>

                    <h5 className='fw-bold pt-3'>Create Operation</h5>
                    <p>
                        The create operation is used to insert documents into a database collection. It will create a new collection when no collections exist in the database. MongoDB provides the following methods for creating documents:
                    </p>

                    <ul>
                        <li>db.collection.insertOne()</li>
                        <li>db.collection.insertMany()</li>
                    </ul>

                    <h5 className='fw-bold pt-3'>Read Operation</h5>
                    <p>
                        The Read operation is used to query a collection to retrieve documents and read their data. Read operation using the following command:
                    </p>

                    <ul>
                        <li>db.collection.find()</li>
                    </ul>
                    <h6 className='fw-bold'>Optional parameters.</h6>
                    <ul>
                        <li>find(query, projection)</li>
                    </ul>

                    <h5 className='fw-bold pt-3'>Update Operation</h5>
                    <p>
                        The update operations are used to modify the document which are already existing in the database collection. MongoDB provides the following methods for updating documents:
                    </p>

                    <ul>
                        <li>db.collection.updateOne()</li>
                        <li>db.collection.updateMany()</li>
                        <li>db.collection.replaceOne()</li>
                    </ul>
                    <h6 className='fw-bold'>Parameters:</h6>
                    <ul>
                        <li>db.collection.updateOne(filter, update)</li>
                    </ul>

                    <h5 className='fw-bold pt-3'>Delete Operation</h5>
                    <p>
                        The delete operations allows us to remove the documents from a database collection. MongoDB provides the following methods for deleting documents:
                    </p>

                    <ul>
                        <li>db.collection.deleteOne()</li>
                        <li>db.collection.deleteMany()</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default CrudDetails;