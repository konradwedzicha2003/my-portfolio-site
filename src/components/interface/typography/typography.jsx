import React from 'react'
import './typography.sass'

export const TypographyVariants = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    TITLE: 'title',
    DESCRIPTION: 'description',
}

export const TypographyColors = {
    PRIMARY: 'black',
    SECONDARY: 'gray',
    WHITE: 'white',
    DISABLED: 'lightGray',
}

export const TypographyComponents = {
    PARAGRAPH: 'p',
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
}

const Typography = ({
    variant = 'description',
    component = 'span',
    color,
    styleProps,
    children,
}) => {

    const Tag = component;

    return (
        <Tag 
            className={`typography typography__${variant}`}
            style={{color, ...styleProps}}
        >
            {children}
        </Tag>
    )
}

export default Typography