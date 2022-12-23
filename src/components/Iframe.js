function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} className="iframe"/>);
  }

  export default Iframe;