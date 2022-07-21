import React, { useState, useEffect, useRef } from 'react';
import Modal from './modal';
import { addDoc, collection } from 'firebase/firestore';


export default function Docs({
    database
}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const [docsData, setDocsData] = useState([]);
    const [title, setTitle] = useState('');
    const collectionRef = collection(database, 'docsData')
    const addData = () => {
        addDoc(collectionRef, {
            title: title
        })
            .then(() => {
                alert('Data Added')
            })
            .catch(() => {
                alert('Cannot add data')
            })
    }
    return (
        <div className="docs-main">
            <h1>Daveed!</h1>
            <button className="add-docs" onClick={handleOpen}>
                Add a Document
            </button>

            <Modal
                open={open}
                setOpen={setOpen}
                title={title}
                setTitle={setTitle}
                addData={addData}
            />
        </div>

    )
}