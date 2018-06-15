import { UPDATE_TIME, ADD_CLOCK } from '../constants/clock';
const moment = require('moment-timezone');

const initialState = {};

export default function slider( state = initialState, action ) {
    switch (action.type) {
        case UPDATE_TIME:
            return{
                ...state,
                [action.name]: moment().tz( action.timeZone ),
            }
            break;
        case ADD_CLOCK:
            return{
                ...state,
                [action.name]: moment().tz( action.timeZone ),
            }
            break;
        default:
            return state;
    }
    return state;
};