import { UPDATE_TIME, ADD_CLOCK } from '../constants/clock';

export function updateTime( timeZone, name ) {
    return {
        type: UPDATE_TIME,
        name: name,
        timeZone: timeZone,
    }
};

export function addClock( timeZone, name ) {
    return {
        type: ADD_CLOCK,
        name: name,
        timeZone: timeZone,
    }
};