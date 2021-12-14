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
    },
    action: {
        justifyContent: 'flex-end',
    },
    bookStartAndEnd: {
      fontSize: 12,
    },
    pos: {
      marginBottom: 12,
    },
    modal: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgb(153 145 145 / 45%)'
    },
    subcont: {
        minHeight: '500px',
        minWidth: '600px',
        maxWidth: '800px',
        backgroundColor: 'white',
    },
    modalh2: {
        textAlign: 'center'
    },
    form: {
        display: 'flex',
        padding: '15px 10px 0',
        flexDirection: 'column'
    },
    txtField: {
        width: '45%',
        marginBottom: '10px',
    },
    guest: {
        display: 'flex',
    },
    guestName: {
        textTransform: 'capitalize',
        padding: '2px 10px',
        backgroundColor: '#dbb8b8',
        margin: '3px 5px',
        borderRadius: '10px',
        fontSize: '14px',
        position: 'relative',
    },
    guestNameTextFieldContainer: {
        width: '50%',
        marginBottom: '10px',
    },
    guestNamesContainer: {
        width: '50%',
        alignItems: 'flex-start',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flexStart',
    },
    txtFieldGuest: {
        width: '90%',
        marginBottom: '10px',
    },
    addGuest: {
        cursor: 'pointer'
    },
    removeGuest: {
        width: '15px',
        position: 'absolute',
        top: '-18px',
        right: '-5px',
        cursor: 'pointer'
    },
    datePicker: {
        marginRight: '5px',
        marginBottom: '5px'
    },
    timePicker: {
        marginRight: '5px',
        marginBottom: '5px'
    },
    modalActionContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '20px'
    },
    modalActionButton: {
        marginTop: '30px',
        marginLeft: '10px',
        width: '100px'
    }
  });