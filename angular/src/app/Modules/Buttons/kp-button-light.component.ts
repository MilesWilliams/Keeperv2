import { Component, Input } from '@angular/core';

@Component ({
    selector : 'kp-button-light',
    template : `
                <a class="kp-button">{{message}}</a>
                `,
    styles : [`
        .kp-button {
            color: #fff;
            cursor: pointer;
            font-size: 14px;
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 10px 15px;
            outline: none;
        }
        .kp-button:hover {
            background-color: #fff;
            color: #2A3245;
        }
        .kp-button:focus {
            outline: none;
        }
    `]
})

export class KpButtonLight {
    constructor() {}
    @Input() message: string;
    @Input() color : string;
}