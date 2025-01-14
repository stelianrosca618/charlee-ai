import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const VideoDialog = ({open, handleClose, videoUrl}) => {
    const videoRef = React.useRef()
    React.useEffect(() => {
        if(open){
            videoRef.current.play();
        }else{
            videoRef.current?.pause();
        }
    }, [open])
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
            <DialogContent>
                <video ref={videoRef} src={videoUrl} controls>

                </video>
            </DialogContent>
            
        </Dialog>
    )
}