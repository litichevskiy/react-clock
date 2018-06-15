import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../actions/clock';
import Clock from './Clock';
import LIST_CLOCKS from '../data/index';

class App extends Component {
    constructor( props ) {
        super( props );

        this.getTime = this.getTime.bind( this );
    }

    componentDidMount() {
        LIST_CLOCKS.forEach(( item ) => {
            this.props.dispatch( pageActions.addClock( item.timeZone, item.name ) );
        });
    }

    getTime( timeUpdate, name ) {
        this.props.dispatch( pageActions.updateTime( timeUpdate, name ) );
    }

    render() {
        return(
            <React.Fragment>
                {LIST_CLOCKS.map(( item, index ) => {
                        let name = item.name;
                        if( !this.props[name] ) return <div key={index} className="hide"></div>

                        return (
                            <Clock
                                key={index}
                                name={name}
                                getTime={this.getTime}
                                timeZone={item.timeZone}
                                data={this.props[name]}
                                isSecond={item.isSecond}
                                width={item.width}
                                height={item.height}
                                bgClock={item.bgClock}
                                bgHours={item.bgHours}
                                bgMinutes={item.bgMinutes}
                                bgSeconds={item.bgSeconds} />
                        )
                })}
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => {
    return state;
};

App = connect( mapStateToProps )( App );

export default App;