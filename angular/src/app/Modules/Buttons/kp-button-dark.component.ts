import { Component, Input } from '@angular/core';

@Component ({
    selector : 'kp-button-dark',
    template : `
                <a class="kp-button">{{message}}</a>
                `,
    styles : [`
        .kp-button {
            color: #2A3245;
            cursor: pointer;
            font-size: 14px;
            border: 1px solid #2A3245;
            border-radius: 5px;
            padding: 10px 15px;
            outline: none;
        }
        .kp-button:hover {
            background-color: #2A3245;
            color: #fff;
        }
        .kp-button:focus {
            outline: none;
        }
    `]
})

export class KpButtonDark {
    constructor() {}
    @Input() message: string;
    @Input() color : string;
}