import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})
export class PopupComponent {
  @Input() mediaItem;
  @Output() preview = new EventEmitter();
  @Output() close = new EventEmitter();

  imgIndex = 1;
  images=[
    {id: 1,
    url: "media/01.png"},
    {id: 2,
    url: "media/02.png"},
    {id: 3,
    url: "media/03.png"},
    {id: 4,
    url: "media/04.png"}
  ];

  onDelete() {
    console.log('deleted');
  }

  isVisible() {
    return this.mediaItem ? false : true;
  }

  setVisibility() {
    this.close.emit(this.mediaItem);
  }

  slidePrev() {
    if (this.imgIndex > 1) {
      this.imgIndex -= 1;
    }
  }

  slideNext() {
    if (this.imgIndex < this.images.length) {
      this.imgIndex += 1;
    }
  }
}