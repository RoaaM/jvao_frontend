import React from 'react';
import '../styles/jinabase.css';
export default function Select(props){
    const {labelText, list, width} = props;

    return(
        <div>
            <label className='lable-style'>
                {labelText}
                <select style={{width: width ? width: "70px"}} className='select-style' name="selectElement">
                    {list.map((element) => {
                        return (
                            <option value={element}>{element}</option>
                        )
                    })}
                </select>
            </label>
        </div>
    );
}