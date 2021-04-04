let direction = 0
let delta = 0
led.setBrightness(30)
basic.forever(function on_forever() {
    
    delta = 5
    direction = input.compassHeading()
    if (315 <= direction && direction < 360 || 0 <= direction && direction < 45) {
        if (direction == 0) {
            music.playTone(494, music.beat(BeatFraction.Eighth))
        }
        
        if (365 - delta <= direction || direction <= 0 + delta) {
            led.setBrightness(255)
        } else {
            led.setBrightness(30)
        }
        
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else if (45 <= direction && direction < 135) {
        if (direction == 90) {
            music.playTone(494, music.beat(BeatFraction.Eighth))
        }
        
        if (90 - delta <= direction && direction <= 90 + delta) {
            led.setBrightness(255)
        } else {
            led.setBrightness(30)
        }
        
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            # . . . .
            # # # # #
            `)
    } else if (135 <= direction && direction < 225) {
        if (direction == 180) {
            music.playTone(494, music.beat(BeatFraction.Eighth))
        }
        
        if (180 - delta <= direction && direction <= 180 + delta) {
            led.setBrightness(255)
        } else {
            led.setBrightness(30)
        }
        
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    } else if (225 <= direction && direction < 315) {
        if (direction == 270) {
            music.playTone(494, music.beat(BeatFraction.Eighth))
        }
        
        if (270 - delta <= direction && direction <= 270 + delta) {
            led.setBrightness(255)
        } else {
            led.setBrightness(30)
        }
        
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `)
    } else {
        basic.clearScreen()
    }
    
})
