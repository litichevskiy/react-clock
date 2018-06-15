import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SvgClock from './SvgClock';

const SECOND = 1000;// ms

class Clock extends Component {
    constructor( props ) {
        super( props );

        this.interval;
        this.timeUpdate = ( this.props.isSecond ) ? SECOND : this.props.timeUpdate;
    }

    componentDidMount() {
        this.interval = setInterval( () => {
            this.updateTime();
        }, this.timeUpdate );
    }

    componentWillUnmount() {
        clearInterval( this.interval );
    }

    updateTime() {
        let { timeZone, name } = this.props;
        this.props.getTime( timeZone, name );
    }

    render() {
        const {
            width,
            height,
            data,
            isSecond,
            bgClock,
            bgHours,
            bgMinutes,
            bgSeconds
        } = this.props;

        const second = data.seconds() * 6;
        const minute = data.minute() * 6;
        const hour = data.hour() * 30;

        return(
            <div className="container_clock">
                <div className="name_city">{this.props.name}</div>
                <SvgClock
                    isSecond={isSecond}
                    second={second}
                    minute={minute}
                    hour={hour}
                    width={width}
                    height={height}
                    bgClock={bgClock}
                    bgHours={bgHours}
                    bgMinutes={bgMinutes}
                    bgSeconds={bgSeconds} />
                <time className="date">
                    {data.format('lll')}
                </time>
            </div>
        )
    }
};

export default Clock;

Clock.propTypes = {
    name: PropTypes.string.isRequired,
    getTime: PropTypes.func.isRequired,
    timeZone: PropTypes.string.isRequired,
};

Clock.defaultProps = {
    timeUpdate: 60000, //ms
};