import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 underline-offset-0 no-underline'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;