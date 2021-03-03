import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class Anno  extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                
               <div className='task'>
                <h3> {this.props.anno.text} </h3>
               <h3> {this.props.anno.category} </h3>
               <h3> {this.props.anno.quote} </h3> 
               </div>            
               )

    }
}

export default Anno