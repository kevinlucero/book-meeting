import React, { useEffect, useState, useReducer } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

import { Card, CardActions, CardContent, Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import { Add, Launch } from '@material-ui/icons';

import { getBookedMeetingList } from '../api';
import { getList } from '../utils/localStorage';
import reducer from "../reducers/book-list-reducer";
import AddEditModal from "../components/add-edit-modal";
import { styles } from '../styles/booking-list-styles';

const initialState = { list: [] };


export default function BookingList() {
    const [data, dispatch] = useReducer(reducer, initialState);
    const [open, setOpen] = useState(false);
    const [openDialog, setDialog] = useState(false);
    const [selectedMeeting, setSelectedMeeting] = useState({});
    const [selectedGuestNames, setSelectedGuestNames] = useState([]);
    const [transaction, setTransaction] = useState(null);
    const classes = styles();

    useEffect(() =>{
        const local = getList();
        getBookedMeetingList()
        .then(res =>{
            if (local){
                dispatch({type: 'init', payload: local.list})
            } else {
                dispatch({type: 'init', payload: res.data})
            }
        })
        .catch(x => {
            alert('Error in fetching')
        })
    },[]);

    const handleOpenEditModal = (q) => {
        setOpen(true);
        setSelectedMeeting(q);
        setSelectedGuestNames(q.guestsName)
        setTransaction('EDIT')
    };
    
    const handleCloseModal = () => {
        setOpen(false);
        setSelectedMeeting({});
        setTransaction(null);
    };

    const handleOpenAddModal = () => {
        setOpen(true);
        setSelectedMeeting({});
        setSelectedGuestNames([])
        setTransaction('Add')
    };
    
    const handleOpenDialog = (q) => {
        setDialog(true);
        setSelectedMeeting(q);

      };
    
    const handleCloseDialog = () => {
        setDialog(false);
    };


    const handleDeleteRoom = () => {
        dispatch({type: 'delete', payload: selectedMeeting.id});
        handleCloseDialog();
    }

    const handleSaveChanges = (params, transaction) => {
        dispatch({type: transaction.toLowerCase() , payload: params});
        handleCloseModal();
    }

    return (
        <div className={classes.container}>
            {
                data.list.length > 0 &&
                data.list.map(query => (
                    <Card className={classes.root} key={query.id}>
                        <CardContent>
                            <Typography className={classes.roomName} variant="h5" component="h2">
                                {query.roomName}
                                <Link to={`/booking-details/${query.id}`}>
                                    <Launch className={classes.launchIcon} />
                                </Link>
                                
                            </Typography>
                            <Typography className={classes.bookStartAndEnd} color="textSecondary" gutterBottom>
                                 {moment(new Date(query.bookStartTime)).format('dddd MMM Do YYYY - h:ss a')} - {moment(new Date(query.bookEndTime)).format('h:ss a')}
                            </Typography>

                            <Typography variant="body2" component="p" className={classes.names}>
                                <br />
                                Host : {query.hostName}
                                <br />
                                Guest : { 
                                    query.guestsName.map((d, i) => { 
                                        return `${d}${i !== query.guestsName.length - 1 ? ', ' : ''}`
                                        })
                                    }
                            </Typography>
                        </CardContent>

                        <CardActions className={classes.action}>
                            <Button color='primary' size="small" onClick={() => handleOpenEditModal(query)}>Edit</Button>
                            <Button color='secondary' size="small" onClick={() => handleOpenDialog(query)}>Delete</Button>
                        </CardActions>
                    </Card>
                    )
                )
            }

        <Button
            variant="contained"
            color="secondary"
            startIcon={<Add />}
            className={classes.addIcon}
            onClick={() => {handleOpenAddModal()}}
        >
            Book Meeting
        </Button>

            {
                open &&
                <AddEditModal 
                    open={open}
                    handleCloseModal={handleCloseModal}
                    selectedMeeting={selectedMeeting}
                    selectedGuestNames={selectedGuestNames}
                    handleSaveChanges={handleSaveChanges}
                    transaction={transaction}
                />
            }

            {
                openDialog &&
                <Dialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>
                        {"Delete Room"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        Are you sure you want to continue?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        
                        <Button onClick={handleCloseDialog}>Cancel</Button>
                        <Button onClick={handleDeleteRoom} autoFocus>Continue</Button>
                    </DialogActions>
                </Dialog>
            }

        </div>
    )
}