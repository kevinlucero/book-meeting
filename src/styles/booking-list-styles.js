
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
    topActions: {
        position: 'absolute',
        top: '70px',
        right: '20px',
        display: 'flex',
        alignItems: 'flex-start'
    },

    selectField: {
        marginTop: '6px',
        marginRight: '10px'
    },
    txtField: {
        marginRight: '10px',
        marginTop: '-10px'
    },
    launchIcon: {
        position: 'absolute',
        top: '5px',
        right: '5px',
        width: '20px',
        cursor: 'pointer',
    }
  });