import { Component } from '@angular/core';

export const PREFIX = '--';

@Component({
    selector: 'sass-helper',
    template: '<div></div>',
     styleUrls: ['./sass-helper.component.scss']
})
export class SassHelperComponent {

    constructor() {

    }

    // Read the custom property of body section with given name:
    readProperty(name: string): string {
        let bodyStyles = window.getComputedStyle(document.body);
        var color=  bodyStyles.getPropertyValue(PREFIX + name);
        console.log(color, name)
        return color;
    }
}