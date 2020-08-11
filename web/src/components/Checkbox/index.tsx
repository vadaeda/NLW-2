import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Checkbox:React.FC<iInputProps> = ({ name, label, ...rest }) => {
    return(
        <div className="check-block">
            <label className={name}>
                <input type="checkbox" id={name} {...rest}/> {" "}  {label}
            </label>
        </div>
    );
}

export default Checkbox;