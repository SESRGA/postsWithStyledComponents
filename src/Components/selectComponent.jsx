import React from "react";
import { MySelect } from "./StyledComponents/mySelect";

export const SelectComponent = ({options, defaultValue, value, onChange, disabled, border, color}) => {
    return (
        <MySelect
            value={value}
            onChange={e => onChange(e.target.value)}
            disabled={disabled}
            border={border}
            color={color}
        >
            <option disabled value="">{defaultValue}</option>
            {
                options.map(option => 
                    <option value={option.value} key={option.value}>
                        {option.name}
                    </option>
                )
            }
        </MySelect>    
    )
}