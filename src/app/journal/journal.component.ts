import {AfterContentInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {JournalService} from './journal.service'
import {UIService} from '../shared/ui.service'
import fullpageLicense from '../../../fullpageLicense/fullpageLicense'

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
})
export class JournalComponent implements OnInit, AfterContentInit {
  constructor(
    public journalService: JournalService,
    public ui: UIService,
    private renderer: Renderer2,
  ) {
  }

  public fullpageConfig: any
  public fullpageApi: any

  @ViewChild('fullpage') fullpage: ElementRef;

  ngOnInit(): void {
    this.initializeFullpage()
    this.journalService.fsGetTodayJournal()
  }

  ngAfterContentInit(): void {
    this.updateBackground()
  }

  onJournalUpdated(event) {
    this.journalService.updateJournalEntry({journalEntry: event.html})
  }

  updateBackground() {
    const gradient = 'linear-gradient(176deg, rgba(73,134,140,1) 0%, rgba(160,217,217,1) 19%, rgba(217,177,102,1) 41%, rgba(191,153,105,1) 59%, rgba(166,45,45,1) 89%)'
    this.renderer.setStyle(document.getElementById('fullpage'), 'background', gradient)
  }

  private initializeFullpage() {
    // for more details on config options please visit fullPage.js docs
    this.fullpageConfig = {
      licenseKey: fullpageLicense,
      anchors: ['mood', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      navigation: true,
      navigationTooltips: ['Mood', 'secondSlide'],
      afterResize: () => {
        console.log('After resize');
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
        this.updateBackground()
      }
    }
  }

  getFullpageRef(fullPageRef) {
    this.fullpageApi = fullPageRef;
  }
}
