import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null)
    const types = ['image/jpg','image/png', 'image/jpeg'];

    const changeHandler = e => {
        let selected = e.target.files[0] // it selects only the first image
        if(selected && types.includes(selected.type)) { // checks selected for truthy
            setFile(selected); // what we get from selected we assign it to file
            setError(null)
        } else {
            setFile(null);
            setError('Please select an image file ( jpg or png )')
        }
    }

    return (
        <form className='form-wrapper'>
            <label className="file-upload">
                <span className="icon-upload">+</span>
                <input type='file' onChange={changeHandler}/>   
            </label>
            <div className='output'>
                { error && <div className="error">{ error }</div> }
                { file && <p>{ file.name } </p>}
                { file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;
