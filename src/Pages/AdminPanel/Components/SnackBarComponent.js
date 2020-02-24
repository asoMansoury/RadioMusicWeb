import React, { forwardRef ,useImperativeHandle} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
// import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';

// function SlideTransition(props) {
//   return <Slide {...props} direction="up" />;
// }

function GrowTransition(props) {
  return <Grow {...props} />;
}

const TransitionsSnackbar =forwardRef((props,ref) =>{

    const [state, setState] = React.useState({
        open: false,
        Transition: Fade,
        message:""
    });

    useImperativeHandle(ref,()=>({
        showSnackBar(message){
            setState({
                open: true,
                Transition:GrowTransition,
                message:message
            });
        }
    }));

    
      const handleClose = () => {
        setState({
          ...state,
          open: false,
        });
      };
    
      return (
        <div>
          <Snackbar
            open={state.open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            message={state.message}
            
          />
        </div>
        );
}); 

export default TransitionsSnackbar;