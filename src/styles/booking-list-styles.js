
import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    roomName: {
        textAlign: 'center'
    },
    names: {
        fontSize: '12px',
        color: '#000',
        textTransform: 'capitalize',
    },
    root: {
      minWidth: 275,
      margin: '15px',
      backgroundColor: '#f1eded',
      position: 'relative'
    },
    action: {
        justifyContent: 'flex-end',
    },
    bookStartAndEnd: {
      fontSize: 12,
    },
    addIcon: {
        position: 'absolute',
        top: '70px',
        right: '20px'
    },
    launchIcon: {
        position: 'absolute',
        top: '5px',
        right: '5px',
        width: '20px',
        cursor: 'pointer',
    }
  });