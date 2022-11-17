import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchStreams} from "../../actions";
import {Link} from "react-router-dom";

const StreamList = (props) => {
    useEffect(()=>{

        props.fetchStreams()
    },[])

 function renderedAdmin (stream) {
     if(stream.userId === props.currentUserId){
         return (
             <div className='right floated content'>
               <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
                   Edit
               </Link>
               <button className="ui button negative">
                   Delete
               </button>
            </div>
         )
     }
   }

  function renderedList ()  {
     return props.streams.map(stream=>{
         return(
             <div className="item" key={stream.id}>
                 {renderedAdmin(stream)}
                 <i className="large middle aligned icon camera"/>
                     <div className="content">
                         {stream.title}
                         <div className="description">{stream.description}</div>
                     </div>
             </div>
         )
     })
   }


   const renderCreate =()=> {
       console.log(props.isSignedIn)
       if (props.isSignedIn){
           return (
               <div style={{textAlign:'right'}}>
                   <Link to='/streams/new' className='ui button primary'>
                       Create Stream
                   </Link>
               </div>
           )
       }
   }



    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">
                {renderedList()}
            </div>
            {renderCreate()}
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
      streams:Object.values(state.streams),
      currentUserId:state.auth.userId,
      isSignedIn:state.auth.isSignedIn
  }
}

export default connect(mapStateToProps,{fetchStreams})(StreamList)