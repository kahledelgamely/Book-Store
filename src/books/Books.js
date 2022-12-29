import React, { useState } from 'react'
import Book from '../Book'
import "./books.css"
import { BsSearch } from "react-icons/bs"



const Books = ({books}) => {
    const [searchTerm, setSearchTerm] = useState("")



    return (
        <div className='mt-4'>
            <div className="form " >
                <BsSearch />
                <input type="text" placeholder='Search' className='w-50' onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="container mb-4">
                <div className="row">
                    {books.filter((book) => {
                        if (searchTerm === "") {
                            return book;
                        } else if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return book;
                        }
                    }).map((book) => (
                        <div className="col-xl-3 col-lg-4 col-md-5" key={book.id}>
                            <Book book={book} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Books