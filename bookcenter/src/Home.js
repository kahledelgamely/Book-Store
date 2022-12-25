import React, { useEffect } from 'react'
import Books from './books/Books';
import Carousel from './Carousel';
import { getBooks } from './store/bookSlice';
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {
    const { isLoading } = useSelector(state => state.books)

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch])
    return (
        <div>
            {isLoading ? <div className='alert alert-danger'>Loading...</div>
                :
                <div >
                    <Carousel />
                    <Books />
                </div>

            }
        </div>
    )
}

export default Home