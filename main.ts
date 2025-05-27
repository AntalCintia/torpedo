input.onButtonPressed(Button.A, function () {
    if (a == 4) {
        led.unplot(b, a)
        a = 0
        led.plot(b, a)
    } else {
        led.unplot(b, a)
        a += 1
        led.plot(b, a)
    }
})
input.onButtonPressed(Button.B, function () {
    if (b == 4) {
        led.unplot(b, a)
        b = 0
        led.plot(b, a)
    } else {
        led.unplot(b, a)
        b += 1
        led.plot(b, a)
    }
})
let a = 0
let b = 0
b = 0
a = 0
led.plot(0, 0)
basic.forever(function () {
	
})
