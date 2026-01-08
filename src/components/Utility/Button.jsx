import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../StyledComponents/StyledComponents';

const PrimaryButton = (props) => {
    const isExternal = props.newTab || (props.route && (props.route.indexOf('http://') === 0 || props.route.indexOf('https://') === 0));

    const content = (
        <Button color={props.color} onClick={props.onClick} type={props.submit ? "submit" : "button"} right={props.right ? true : false} left={props.left ? true : false}>
            {props.left ? <i className="las la-arrow-left"></i> : null}
            <span>{props.text}</span>
            {props.right ? <i className={`las la-${props.newTab ? 'level-up-alt' : 'arrow-right'}`}></i> : null}
        </Button>
    );

    if (!props.route) {
        return content;
    }

    if (isExternal) {
        return (
            <a href={props.route} target={props.newTab ? '_blank' : null} rel={props.newTab ? 'noopener noreferrer' : null}>
                {content}
            </a>
        );
    }

    return (
        <Link to={props.route}>
            {content}
        </Link>
    );
}

export default PrimaryButton;
