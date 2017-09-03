import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Appointment } from '../_models/index';

@Injectable()
export class AppointmentService {
    constructor(private http: Http) { }

    getSlots() {
        var appointments = [
            {
                day: "Monday",
                slots: [{
                    time: '9:00am',
                    booked: false
                },
                {
                    time: '11:00am',
                    booked: false
                },
                {
                    time: '1:00pm',
                    booked: false
                },
                {
                    time: '3:00pm',
                    booked: false
                },
                {
                    time: '5:00pm',
                    booked: false
                },
                {
                    time: '7:00pm',
                    booked: false
                }]
            },
            {
                day: "Tuesday",
                slots: [{
                    time: '9:00am',
                    booked: false
                },
                {
                    time: '11:00am',
                    booked: false
                },
                {
                    time: '1:00pm',
                    booked: false
                },
                {
                    time: '3:00pm',
                    booked: false
                },
                {
                    time: '5:00pm',
                    booked: false
                },
                {
                    time: '7:00pm',
                    booked: false

                }]
            }
        ];
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}