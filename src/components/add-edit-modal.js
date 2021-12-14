import React, { useRef, useState} from 'react';
import moment from 'moment';

import { Modal, TextField, Button, Select} from '@material-ui/core';

import { AddCircleRounded, CancelRounded } from '@material-ui/icons';

import { styles } from '../styles/add-edit-modal-styles';

import { Rooms } from '../utils/rooms';

export default function AddEditModal(props){
    const classes = styles();
    const { open, handleCloseModal, selectedMeeting, selectedGuestNames, handleSaveChanges, transaction } = props;
    const inputHostName = useRef(null);
    const inputGuestName = useRef(null);

    const [meeting, setMeeting] = useState(selectedMeeting || {});
    const [guestNames, setGuestNames] = useState(selectedGuestNames || []);
    const [startDate, setStartDate] = useState(selectedMeeting.bookStartTime || moment(new Date()).format('YYYY-MM-DD'));
    const [startTime, setStartTime] = useState(moment(selectedMeeting.bookStartTime).format('HH:mm') || moment(startDate).format('HH:mm'));
    const [endDate, setEndDate] = useState(selectedMeeting.bookEndTime || moment(new Date()).format('YYYY-MM-DD'));
    const [endTime, setEndTime] = useState(moment(selectedMeeting.bookEndTime).format('HH:mm') || moment().format('HH:mm'));

    const handleAddGuestName = () => {
        if (inputGuestName.current.value && inputGuestName.current.value.length > 3){
            setGuestNames([...guestNames, inputGuestName.current.value]);
            inputGuestName.current.value = "";
        }
    }

    const handleRemoveGuestName = (q) => {
        setGuestNames([...guestNames.filter(x => x !== q)]);
    }

    const handleOnChange = (event, obj) => {
        const val = event.target.value;
        switch (obj) {
            case 'roomName':
                setMeeting({...meeting, roomName: val});
                break;
            case 'hostName':
                setMeeting({...meeting, hostName: val});
                break;
            case 'fromDate':
                setStartDate(moment(event.target.valueAsDate).format('YYYY-MM-DD'));
                break;
            case 'fromTime':
                setStartTime(moment(event.target.valueAsDate).utc().format('HH:mm'));
                break;
            case 'toDate':
                setEndDate(moment(event.target.valueAsDate).format('YYYY-MM-DD'));
                break;
            case 'toTime':
                setEndTime(moment(event.target.valueAsDate).utc().format('HH:mm'));
                break;
            default:
                break;
        }
    }

    const handleOnCloseModal = () => {
        handleCloseModal();
    }
    
    const handleModalChanges = (meeting, guestNames, startDate, startTime, endDate, endTime, transaction) => {
        const newValue = {
            ...meeting, 
            guestsName: guestNames, 
            bookStartTime: moment(moment(startDate).format('MM-DD-YYYY') + " " +startTime).toString(),
            bookEndTime: moment(moment(endDate).format('MM-DD-YYYY') + " " + endTime).toString(),
        }
        handleSaveChanges(newValue, transaction);
        
    }

    return (
        <Modal
            open={open}
            onClose={handleOnCloseModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
        <div className={classes.modal}>
            <div className={classes.subcont}>
                <h2 className={classes.modalh2}>{`${transaction === 'EDIT' ? 'Edit' : 'Add'} Room Details`}</h2>
                <form className={classes.form} noValidate autoComplete="off">
                    <Select
                        native
                        value={meeting.roomName || ""}
                        onChange={(event)=>{ handleOnChange(event, 'roomName') }}
                        inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                        }}
                        className={classes.txtField}
                        >
                        <option aria-label="None" value="" />
                        {
                            Rooms.map((room, i) => {
                                return <option key={`${i}-${room}`} aria-label="None" value={room}>{room}</option>
                            })
                        }

                    </Select>
                    <TextField className={classes.txtField} value={meeting.hostName || ""} label="Host Name" size='medium' inputRef={inputHostName}  onChange={(event)=> { handleOnChange(event, 'hostName', meeting)}}/>
                    <div className={classes.guest}>
                        <div className={classes.guestNameTextFieldContainer}>
                            <TextField className={classes.txtFieldGuest} required={true} label="Guests Name" size='medium' inputRef={inputGuestName} />
                            <AddCircleRounded color='secondary' className={classes.addGuest} onClick={() => { handleAddGuestName() }} />
                        </div>
                        <div className={classes.guestNamesContainer}>
                            {
                                guestNames.length > 0 &&
                                guestNames.map((x,i) =>{
                                    return <span key={`${i}-${x}`}className={classes.guestName}>
                                            {x}
                                            <CancelRounded color='secondary' className={classes.removeGuest} onClick={()=> { handleRemoveGuestName(x) }}/>
                                        </span>
                                })
                            }
                        </div>
                    </div>

                    <div>
                        <div>
                            <TextField
                                id="from-date"
                                label="From"
                                type="date"
                                value={moment(startDate).format('YYYY-MM-DD')}
                                onChange = {(event) => { handleOnChange(event, 'fromDate') }}
                                className={classes.datePicker}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                id="from-time"
                                label="Time"
                                type="time"
                                value={startTime}
                                onChange = {(event) => { handleOnChange(event, 'fromTime') }}
                                className={classes.timePicker}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>

                        <div>
                            <TextField
                                id="to-date"
                                label="To"
                                type="date"
                                value={moment(endDate).format('YYYY-MM-DD')}
                                onChange = {(event) => { handleOnChange(event, 'toDate') }}
                                className={classes.datePicker}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                id="to-time"
                                label="Time"
                                type="time"
                                value={endTime}
                                onChange = {(event) => { handleOnChange(event, 'toTime') }}
                                className={classes.timePicker}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>

                        <div className={classes.modalActionContainer}>
                            <Button variant="contained" color="secondary" className={classes.modalActionButton} onClick={handleOnCloseModal}>
                                Cancel
                            </Button>
                            <Button variant="contained" color="primary" className={classes.modalActionButton} onClick={() => { handleModalChanges(meeting, guestNames, startDate, startTime, endDate, endTime, transaction) }}>
                                Save
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </Modal>
    );
}