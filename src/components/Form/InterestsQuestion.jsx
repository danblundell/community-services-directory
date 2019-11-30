import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Checkbox, { Checkboxes } from "../Checkbox"
import config from "../../_config"

export const Fieldset = styled.fieldset`
    border: none;
    margin-bottom: 55px;
`

export const Question = styled.h2`
    color: ${theme.grey1};
    margin-bottom: 10px;
`

export const Hint = styled.span`
    color: ${theme.grey2};
`

const InterestsQuestion = () =>
    <Fieldset>
        <legend>
            <Question>What are you interested in?</Question>
            <Hint>Choose as many as you like</Hint>
        </legend>
        <Checkboxes>
            {config.interestsOptions.map(option => {
                if(option.value === "support"){
                    return(
                        <Checkbox 
                            name="category" 
                            value={option.value}
                            key={option.value}
                        >
                            {option.label}
                        </Checkbox>
                    )
                } else {
                    return <Checkbox name="category" value={option.value} key={option.value}>{option.label}</Checkbox>
                }
            })}
        </Checkboxes>
    </Fieldset>

export default InterestsQuestion