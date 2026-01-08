import React from 'react';
import { Link } from 'react-router-dom';
import { Button as StyledButton } from '../StyledComponents/StyledComponents';

const PrimaryButton = (props) => {
    const isExternal = props.newTab || (props.route && (props.route.indexOf('http://') === 0 || props.route.indexOf('https://') === 0));

    const inner = (
        <>
            {props.left ? <i className="las la-arrow-left" /> : null}
            <span>{props.text}</span>
            {props.right ? <i className={`las la-${props.newTab ? 'level-up-alt' : 'arrow-right'}`} /> : null}
        </>
    );

    // No route: plain button (useful for form submits)
    if (!props.route) {
        return (
            <StyledButton
                color={props.color}
                onClick={props.onClick}
                type={props.submit ? 'submit' : 'button'}
                right={props.right ? true : false}
                left={props.left ? true : false}
            >
                {inner}
            </StyledButton>
        );
    }

    // External link: render as anchor
    if (isExternal) {
        return (
            <StyledButton
                as="a"
                href={props.route}
                target={props.newTab ? '_blank' : null}
                rel={props.newTab ? 'noopener noreferrer' : null}
                color={props.color}
                right={props.right ? true : false}
                left={props.left ? true : false}
            >
                {inner}
            </StyledButton>
        );
    }

    // Internal route: render the styled button as a Router Link (no nested anchors)
    return (
        <StyledButton
            as={Link}
            to={props.route}
            color={props.color}
            right={props.right ? true : false}
            left={props.left ? true : false}
        >
            {inner}
        </StyledButton>
    );
}

export default PrimaryButton;
