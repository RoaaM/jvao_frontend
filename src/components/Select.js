import React from 'react';
import '../styles/jinabase.css';

export default function Select(props){
    const {labelText, list, width, onSelectChange} = props;

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        onSelectChange(selectedValue);
    };

    return(
        <div>
            <label className='lable-style'>
                {labelText}
                <select 
                    style={{width: width ? width: "70px"}} 
                    className='select-style' 
                    name="selectElement"
                    onChange={handleSelectChange}
                >
                    <option value={''}>{''}</option>
                    {list.map((element, index) => (
                        <option key={index} value={element}>{element}</option>
                    ))}
                </select>
            </label>
        </div>
    );
}
