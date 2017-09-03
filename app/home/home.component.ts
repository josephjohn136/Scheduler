import { Component, OnInit } from '@angular/core';

import { User, Appointment } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    appointments: Appointment[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.getSlots();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    getSlots() {
        this.appointments = [
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
            },
            {
                day: "Wednesday",
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
                day: "Thursday",
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
                day: "Friday",
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
}