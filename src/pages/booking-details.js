import React from "react";
import moment from "moment";
import { Paper } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { getList } from '../utils/localStorage';
import { styles } from '../styles/booking-details-styles';

export default function BookingDetails(props) {
    const params = useParams();
    const classes = styles()
    
    const meeting = getList() && getList().list.find(x => x.id.toString() === params.id);
    const rndompix = Math.floor(Math.random() * 3);
    return (
        
        <Paper elevation={3} className={classes.container}>
            {
                meeting &&
                <div className={classes.detailsCon}>
                    <div className={classes.siblings}>
                        <p>Room Name : {meeting.roomName}</p>
                        <p>Schedule  : {moment(new Date(meeting.bookStartTime)).format('dddd MMM Do YYYY - h:ss a')} - {moment(new Date(meeting.bookEndTime)).format('h:ss a')}</p>
                        <p>Host Name : {meeting.hostName}</p>
                        <p>
                            Guests : 
                            {
                            meeting.guestsName.map((d, i, arr) => {
                                return <span className={classes.guestNames} key={`${i*100}-${d}`}>{` ${d}${i !== arr.length - 1 ? ', ' : ''}`}</span>
                            })
                        }
                        </p>
                    </div>

                    <div className={classes.siblings}>
                        <img className={classes.img} src={`/images/random${rndompix}.jpg`} alt="room name" />
                    </div>
                </div>
            }

            {
                !meeting && <p>Invalid params or no added in list</p>
            }

        </Paper>
    )
}