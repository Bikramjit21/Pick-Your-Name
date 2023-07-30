// import React from 'react'
// import './SearchBox.scss';

// const SeachBox = ({onInputChange}) => {
//   return (
//     <div className="search-container">
//         <input onChange={(event)=>{
//           onInputChange(event.target.value);
//           // console.log(event.target.value)
//         }}
//         placeholder='Type yor keyword' className='search-input'/>
//     </div>
//   )
// }

// export default SeachBox;

import React from 'react';
import './SearchBox.scss';

const SearchBox = ({ onInputChage }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => onInputChage(event.target.value)}
                placeholder="Type keywords"
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;