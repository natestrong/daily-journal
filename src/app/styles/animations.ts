import {animate, keyframes, state, style, transition, trigger} from '@angular/animations'

export const rotateVertical =
  trigger('animState', [
    state('down', style({
      transform: 'rotateX(-90deg)',
      top: '-10px'
    })),
    state('normal', style({
      transform: 'rotateX(0deg)',
      top: '0'
    })),
    state('up', style({
      transform: 'rotateX(90deg)',
      top: '10px'
    })),
    transition('normal <=> down', animate('250ms cubic-bezier(.74,.14,.06,1.25)')),
    transition('normal => up', animate('500ms cubic-bezier(.95,-0.1,.29,1.16)')),
    transition('up => normal', animate('500ms cubic-bezier(.15,.47,.22,1.19)')),

    transition('normal => down', animate('500ms cubic-bezier(.95,-0.1,.29,1.16)')),
    transition('down => normal', animate('500ms cubic-bezier(.15,.47,.22,1.19)')),

    transition('up => down', [
      animate(250, keyframes([
        style({
          transform: 'rotateX(90deg)',
          top: '-10px',
        }),
        style({
          transform: 'rotateX(0deg)',
          top: '0',
        }),
        style({
          transform: 'rotateX(-90deg)',
          top: '10px',
        })
      ])),
    ]),
    transition('down => up', [
      animate(250, keyframes([
        style({
          transform: 'rotateX(-90deg)',
          top: '10px',
        }),
        style({
          transform: 'rotateX(0deg)',
          top: '0',
        }),
        style({
          transform: 'rotateX(90deg)',
          top: '-10px',
        })
      ])),
    ])
  ])
