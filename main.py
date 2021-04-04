direction = 0
delta = 0
led.set_brightness(30)

def on_forever():
    global delta, direction
    delta = 5
    direction = input.compass_heading()
    if 315 <= direction and direction < 360 or 0 <= direction and direction < 45:
        if direction == 0:
            music.play_tone(494, music.beat(BeatFraction.EIGHTH))
        if 365 - delta <= direction or direction <= 0 + delta:
            led.set_brightness(255)
        else:
            led.set_brightness(30)
        basic.show_leds("""
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            """)
    elif 45 <= direction and direction < 135:
        if direction == 90:
            music.play_tone(494, music.beat(BeatFraction.EIGHTH))
        if 90 - delta <= direction and direction <= 90 + delta:
            led.set_brightness(255)
        else:
            led.set_brightness(30)
        basic.show_leds("""
            # # # # #
            # . . . .
            # # # # #
            # . . . .
            # # # # #
            """)
    elif 135 <= direction and direction < 225:
        if direction == 180:
            music.play_tone(494, music.beat(BeatFraction.EIGHTH))
        if 180 - delta <= direction and direction <= 180 + delta:
            led.set_brightness(255)
        else:
            led.set_brightness(30)
        basic.show_leds("""
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            """)
    elif 225 <= direction and direction < 315:
        if direction == 270:
            music.play_tone(494, music.beat(BeatFraction.EIGHTH))
        if 270 - delta <= direction and direction <= 270 + delta:
            led.set_brightness(255)
        else:
            led.set_brightness(30)
        basic.show_leds("""
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            """)
    else:
        basic.clear_screen()
basic.forever(on_forever)
