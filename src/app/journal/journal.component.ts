import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {JournalService} from './journal.service'
import fullpageLicense from '../../../fullpageLicense/fullpageLicense'

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
})
export class JournalComponent implements OnInit {
  currentPage: string

  constructor(
    public journalService: JournalService,
    private renderer: Renderer2,
  ) {
  }

  public fullpageConfig: any
  public fullpageApi: any

  @ViewChild('fullpage') fullpage: ElementRef;

  ngOnInit(): void {
    this.initializeFullpage()
    this.journalService.fsGetTodayJournal()
    this.updateBackground()
  }

  updateBackground() {
    const grad1 = 'rgba(63,81,181,1)'
    const grad2 = 'rgba(73,134,140,1)'
    const grad3 = 'rgba(160,217,217,1)'
    const grad4 = 'rgba(217,177,102,1)'
    const grad5 = 'rgba(191,153,105,1)'
    const grad6 = 'rgba(166,45,45,1)'
    const gradient = `linear-gradient(176deg, ${grad1} 2%, ${grad2} 6%, ${grad3} 19%, ${grad4}41%, ${grad5} 59%, ${grad6} 89%)`
    this.renderer.setStyle(document.getElementById('fullpage'), 'background', gradient)
  }

  private initializeFullpage() {
    // for more details on config options please visit fullPage.js docs
    this.fullpageConfig = {
      licenseKey: fullpageLicense,
      anchors: ['mood', 'Journal'],
      menu: '#menu',
      navigation: true,
      navigationTooltips: ['Mood', 'Exercise', 'Reading', 'Career', 'Journal'],
      afterResize: () => {
        console.log('RESIZe')
        this.repositionFPNav()
      },
      afterLoad: (origin, destination, direction) => {
        this.currentPage = destination.item.tagName
        this.repositionFPNav()
      }
    }
  }

  getFullpageRef(fullPageRef) {
    this.fullpageApi = fullPageRef;
  }

  public repositionFPNav() {
    if (this.currentPage === 'APP-WRITING-ENTRY' && window.innerWidth < 790) {
        this.renderer.setStyle(document.getElementById('fp-nav'), 'top', '15%')
    } else {
      this.renderer.setStyle(document.getElementById('fp-nav'), 'top', '50%')
    }
  }
}
