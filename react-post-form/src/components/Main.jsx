import React from 'react'

const Main = ({ formData, handleChange, handleSubmit }) => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
                <div className="row w-100">
                    <div className="col-12 col-lg-8">
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <input
                                    name="author"
                                    type="text"
                                    placeholder="Autore"
                                    className="form-control"
                                    value={formData.author} onChange={handleChange}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <input
                                    name='title'
                                    type="text"
                                    placeholder="Titolo"
                                    className="form-control"
                                    value={formData.title} onChange={handleChange}
                                />
                            </div>
                            <div className="col-12">
                                <textarea
                                    name='body'
                                    placeholder="Testo del post"
                                    className="form-control"
                                    rows="5"
                                    value={formData.body} onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input
                                        name='public'
                                        className="form-check-input"
                                        type="checkbox"
                                        id="publicPost"
                                        checked={formData.public} onChange={handleChange}
                                    />
                                    <button className="btn btn-primary mt-3" onClick={handleSubmit}>Invia</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
