import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchStream} from "../../actions";
import history from "../../history";


class StreamEdit extends React.Component{

 componentDidMount() {
     this.props.fetchStream(this.props.stream)
 }

    render(){
    return <div>StreamEdit</div>
   }
}

const mapStateToProps = (state) => {
    return {stream: state.streams[3]}
}

export default connect(mapStateToProps,{fetchStream}) (StreamEdit)