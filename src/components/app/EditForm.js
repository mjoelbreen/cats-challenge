import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const EditForm = () => {
    const [thumbnailURL, setThumbnailURL] = useState('');
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
//    const [isPending, setIsPending] = useState('false');


    const handleSubmit = (e) => {
        e.preventDefault();
        const cat = { thumbnailURL, name, owner };

        // setIsPending(true);

       fetch('http://localhost:8000/cats', {
           method: 'POST',
           headers: { "Content-Type": "application/json"},
           body: JSON.stringify(cat)
       }) .then(() => {
           console.log("new cat added")
        //    setIsPending(false)
       })

      
    }






    return (
        <div>
            <h2>Edit Cat</h2>
            <form >
                <label>Thumbnail URL</label>
                <input type="text"
                 value={thumbnailURL}
                 onChange={(e) => setThumbnailURL(e.target.value)}
                  required />
                <label>Name</label>
                <input type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                required />
                <label>Owner</label>
                <input type="text"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                 required />
                {<button onClick={handleSubmit}>Submit</button>}
                
                {/* {isPending && <button disabled>Adding...</button>} */}
            </form>
        </div>
    )
}

export default EditForm