import React from 'react';

export default class Celebrity extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.events);
        return (
            <div className ="celebrity">
                <img src="https://classes.codingbootcamp.cz/assets/classes/963/taylor-swift.jpg" alt="Taylor Swift"/>
        
                <div className="text">
                    <h2>Taylor Swift</h2>
                    <div className="earnings">
                        <h3>Earnings:</h3>$185 M
                    </div>
                    <div className="age">
                        <h3>Age:</h3>29
                    </div>
                    <div className="citizenship">
                        <h3>Citizenship:</h3>United States
                    </div>
                    <div className="events">
                        <ul>
                            <li>Swift's 2018 'Reputation' Stadium Tour is officially the highest-grossing tour in U.S. history,
                                grossing $266.1 million.</li>
                            <li>In 2018 the singer left Big Machine Records, her musical home since starting out as a teenager,
                                for Universal's Republic Records.</li>
                            <li>As part of the deal, Universal is required to share proceeds from the eventual sale of its $1
                                billion stakes in Spotify with its musicians.</li>
                            <li>Her first single since the move, "ME!" debuted at No. 2 on the Billboard Hot 100 and racked up a
                                record-breaking 100 million Vevo views in 79 hours.</li>
                            <li>Swift has leveraged her fame to encourage voting, with 65,000 registrations in the 24 hours
                                after she urged fans to vote in the November mid-terms.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}