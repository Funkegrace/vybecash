import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-financial-needs',
  templateUrl: './financial-needs.component.html',
  styleUrls: ['./financial-needs.component.scss']
})
export class FinancialNeedsComponent implements OnInit {
@ViewChild('video') video!:ElementRef;
@ViewChild('overlay_play') overlay_play!:ElementRef;
@ViewChild('overlay_text') overlay_text!:ElementRef;
  constructor() { }

  ngOnInit(): void { }

    playPauseFunc = () => {
      // console.log(this.video1);
      if (this.video.nativeElement.paused) {
        this.video.nativeElement.controls = true;
        this.video.nativeElement.play();
        this.overlay_play.nativeElement.classList.add('remove_play_btn');
        this.overlay_text.nativeElement.classList.add('remove-overlay_text');
      } else {
        this.video.nativeElement.pause();
        this.overlay_play.nativeElement.classList.remove('remove_play_btn');
        this.overlay_text.nativeElement.classList.remove('remove-overlay_text');
      }
    
    }
  }

