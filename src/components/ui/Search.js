import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <div>
            <section className='search'>
                <form action="">
                    <input
                        type='text'
                        placeholder='Search characters'
                        className='form-control'
                        value={text}
                        onChange={(e) =>  onChange(e.target.value)}
                        autoFocus
                    />
                </form>
            </section>
        </div>
    )
}
export default Search;