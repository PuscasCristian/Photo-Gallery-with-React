import React, { useState } from 'react'

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
        <form>
            <input type='file' onChange={changeHandler}/>
            <div className='output'>
                { error && <div className="error">{ error }</div> }
                { file && <p>{ file.name } </p>}
            </div>
        </form>
    )
}

export default UploadForm;
