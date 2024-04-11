import React from 'react';
import '../styles/jinabase.css';
export default function Select(props){
    const {labelText} = props;

    return(
        <div>
            <label className='lable-style'>
                {labelText}
                <select className='select-style' name="selectElement">
                    <option value="He">He</option>
                    <option value="Ni">Ni</option>
                    <option value="Rb">Rb</option>
                </select>
            </label>
        </div>
    );
}