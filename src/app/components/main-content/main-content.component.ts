import { Input, Component} from '@angular/core';
  
@Component({
    selector: 'main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
    @Input() header: string;
    @Input() text: string;
    @Input() btn: string;
    @Input() film: string;
    @Input() link: string;
    @Input() url: string;

    get backgroundImage() {
        return `-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.65) 100%), url('${this.url}') center center no-repeat`;
    }

    get noBackgroundImage() {
        return `url('../../../assets/img/no-image.jpg') center center no-repeat`;
    }
}