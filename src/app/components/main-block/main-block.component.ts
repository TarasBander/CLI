import { Input, Component} from '@angular/core';
  
@Component({
    selector: 'main-block',
    templateUrl: './main-block.component.html',
    styleUrls: ['./main-block.component.scss']
})
export class MainBlockComponent {
    @Input() header: string;
    @Input() text: string;
    @Input() btn: string;
    @Input() film: string;
    @Input() link: string;
    @Input() backgroundUrl: string;

    get backgroundImage() {
        return `-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.65) 100%), url('${this.backgroundUrl}') center center no-repeat`;
    }

    get noBackgroundImage() {
        return `url('../../../assets/img/no-image.jpg') center center no-repeat`;
    }
}