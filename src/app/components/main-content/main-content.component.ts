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
}