import React from 'react';
import PropTypes from 'prop-types';

const SvgClock = ({ width, height, bgClock, bgSeconds, bgHours, bgMinutes, second, minute, hour, isSecond }) => {
    return(
        <svg
            width={width}
            height={height}
            viewBox="0 0 27 27"
            xmlns="http://www.w3.org/2000/svg" >
            <g>
                <path fill={bgClock} d="M13.466,0.001C6.041,0.001,0,6.042,0,13.467s6.041,13.466,13.466,13.466c7.427,0,13.468-6.041,13.468-13.466    S20.893,0.001,13.466,0.001z M13.466,25.716c-6.755,0-12.248-5.495-12.248-12.249c0-6.755,5.493-12.25,12.248-12.25    s12.249,5.495,12.249,12.25S20.221,25.716,13.466,25.716z"/>
                <path fill={bgClock} d="M9.314,4.605L8.816,3.617L8.271,3.893l0.501,0.991C8.949,4.784,9.132,4.693,9.314,4.605z"/>
                <path fill={bgClock} d="M3.628,13.67c0-0.206,0.019-0.407,0.03-0.61H2.26v1.221h1.398C3.646,14.078,3.628,13.877,3.628,13.67z"/>
                <path fill={bgClock} d="M14.323,3.616V2.218h-1.221v1.398c0.203-0.012,0.404-0.03,0.611-0.03C13.919,3.585,14.121,3.604,14.323,3.616z"/>
                <path fill={bgClock} d="M24.062,9.058l-0.276-0.544l-1.103,0.561c0.094,0.18,0.185,0.362,0.266,0.55L24.062,9.058z"/>
                <path fill={bgClock} d="M19.053,5.126c0.174,0.108,0.344,0.22,0.508,0.338l0.612-0.95L19.66,4.183L19.053,5.126z"/>
                <path fill={bgClock} d="M4.113,7.722l1.004,0.692C5.224,8.24,5.331,8.067,5.448,7.9L4.461,7.218L4.113,7.722z"/>
                <path fill={bgClock} d="M17.863,22.856l0.746,1.478l0.545-0.276l-0.741-1.466C18.234,22.687,18.049,22.772,17.863,22.856z"/>
                <path fill={bgClock} d="M21.68,19.844l1.287,0.888l0.346-0.502l-1.269-0.875C21.93,19.522,21.803,19.683,21.68,19.844z"/>
                <path fill={bgClock} d="M23.77,13.06c0.013,0.204,0.031,0.405,0.031,0.61c0,0.207-0.02,0.408-0.031,0.611h1.397V13.06H23.77z"/>
                <path fill={bgClock} d="M13.103,23.726v1.399h1.221v-1.399c-0.202,0.014-0.404,0.032-0.609,0.032C13.507,23.757,13.306,23.737,13.103,23.726z"/>
                <path fill={bgClock} d="M7.253,23.438l0.514,0.332l0.89-1.381c-0.177-0.103-0.353-0.205-0.521-0.318L7.253,23.438z"/>
                <path fill={bgClock} d="M3.365,18.896l0.277,0.543l1.364-0.693c-0.103-0.176-0.202-0.354-0.293-0.536L3.365,18.896z"/>
            </g>
            <line x1="13.5" y1="5" x2="13.5" y2="13.5"
                strokeLinecap="round"
                stroke={bgMinutes}
                strokeWidth="0.5"
                transform={`rotate(${minute} 13.5 13.5)`} />
            <line x1="13.5" y1="8" x2="13.5" y2="13.5"
                strokeLinecap="round"
                stroke={bgHours}
                strokeWidth="0.5"
                transform={`rotate(${hour} 13.5 13.5)`} />
            { isSecondHand( isSecond, bgSeconds, second ) }
            <circle fill={bgClock} cx="13.5" cy="13.5" r="1.3"/>
        </svg>
    )
};

function isSecondHand( bol, bgSeconds, second ) {
    if( !bol ) return;
    return(
        <line
        x1="13.5" y1="4" x2="13.5" y2="13.5"
        strokeLinecap="round"
        stroke={bgSeconds}
        strokeWidth="0.3"
        transform={`rotate(${second} 13.5 13.5)`} />
    )
}

SvgClock.propTypes = {
    second: PropTypes.number.isRequired,
    minute: PropTypes.number.isRequired,
    hour: PropTypes.number.isRequired,
};

SvgClock.defaultProps = {
    isSecond: false,
    width: '170px',
    height: '170px',
    bgClock: '#827b7b',
    bgHours: '#4d3939',
    bgMinutes: '#4d3939',
    bgSeconds: 'tomato',
    rotate: '0',
};

export default SvgClock;