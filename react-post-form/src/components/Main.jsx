import React from 'react'

const Main = ({ formData, handleChange, handleSubmit }) => {
    return (
        <>
            <form action="">

                {/*AUTORE E TITOLO*/}
                <div>
                    <label htmlFor="author">Autore</label>
                    <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} />

                    <label htmlFor="title">title</label>
                    <input type="title" id="title" name="title" value={formData.title} onChange={handleChange} />
                </div>

                {/*BODY*/}
                <div>
                    <label htmlFor="body">Body</label>
                    <textarea id="body" name="body" value={formData.body} onChange={handleChange}>
                    </textarea>
                </div>

                {/*TEST*/}
                <div>
                    <label htmlFor="public">public</label>
                    <input type="checkbox" id="public" name="public" checked={formData.public} onChange={handleChange}></input>
                </div>

                {/*INVIA*/}
                <button type="submit" onClick={handleSubmit}>Invia</button>
            </form>
        </>
    )
}

export default Main
