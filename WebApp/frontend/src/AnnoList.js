import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Anno from "./Anno";


class AnnoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.annolist.map((anno) => {
                return <Anno anno={anno}/>
            })
        )
    }
    
}

export default AnnoList 