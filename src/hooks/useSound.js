import {Howl} from 'howler';

const useSound = () => {

    const kick = new Howl({
      src: ['kick.mp3'],
      preload: true
    });

    const snare = new Howl({
      src: ['snare.mp3'],
      preload: true
    });

    const workit = new Howl({
      src: ['workit.mp3'],
      preload: true,
    });

    const makeit = new Howl({
      src: ['makeit.mp3'],
      preload: true,
    });

    const doit = new Howl({
      src: ['doit.mp3'],
      preload: true,
    });

    const makesus = new Howl({
      src: ['makesus.mp3'],
      preload: true,
    });

    const smarter = new Howl({
      src: ['smarter.mp3'],
      preload: true,
    });

    const better = new Howl({
      src: ['better.mp3'],
      preload: true,
    });

    const faster = new Howl({
      src: ['faster.mp3'],
      preload: true,
    });

    const stronger = new Howl({
      src: ['stronger.mp3'],
      preload: true,
    });

    const hihat = new Howl({
      src: ['hi-hat.mp3'],
      preload: true,
    })

    const cymbal = new Howl({
      src: ['cymbal.mp3'],
      preload: true,
    })

    const shock = new Howl({
      src: ['shock.mp3'],
      preload: true,
    })

    const beefySnare = new Howl({
      src: ['beefySnare.mp3'],
      preload: true,
    })

    const clap = new Howl({
      src: ['clap.mp3'],
      preload: true,
    })

    const lowrewind = new Howl({
      src: ['lowrewind.mp3'],
      preload: true,
    })

    const suspenseTom = new Howl({
      src: ['suspenseTom.mp3'],
      preload: true,
    })

    const notification = new Howl({
      src: ['notification.mp3'],
      preload: true,
    })
    
    const party = new Howl({
      src: ['party.mp3'],
      preload: true,
    })

    const ohMyGod = new Howl({
      src: ['ohMyGod.mp3'],
      preload: true,
    })

    const chant = new Howl({
      src: ['chant.mp3'],
      preload: true,
    })

    const base = new Howl({
      src: ['base.mp3'],
      preload: true,
    })
    
    const carEngine = new Howl({
      src: ['carEngine.mp3'],
      preload: true,
    })

    const lineOfCode = new Howl({
      src: ['lineOfCode.mp3'],
      preload: true,
    })

    const bassDrop = new Howl({
      src: ['bassDrop.mp3'],
      preload: true,
    })
    
    const soundMap = {
      "g" : kick,
      "f" : snare,
      "y" : hihat,
      "t" : cymbal,
      "q" : workit,
      "w" : makeit,
      "e" : doit,
      "r" : makesus,
      "u" : smarter,
      "i" : better,
      "o" : faster,
      "p" : stronger,
      'z' : shock,
      's' : clap,
      'd' : beefySnare,
      'j' : lowrewind,
      'h' : suspenseTom,
      'x' : notification,
      'a' : party,
      'c' : ohMyGod,
      'm' : chant,
      'v' : base,
      'b' : carEngine,
      'n' : lineOfCode,
      'l' : bassDrop
    }

    return soundMap;
}

export default useSound;