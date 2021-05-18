import { MyToolkit } from './toolkit.js';
// Implement a MyToolkit Button

var window = SVG().addTo('body').size('600', '600')
    /***************Button***************/
var btn = new MyToolkit.Button(window);
btn.move(100, 100);
btn.onclick(function(e) {
    console.log('click')
});
btn.onStateChange(function(e) {
    console.log(e)
});

/***************checkbox***************/
var cbox = new MyToolkit.CheckBox(window);
cbox.move(400, 100);
cbox.setLabel('CheckBox 1');
cbox.onChange(function(e) {
    console.log(e.checked)
});


/***************RadioButton***************/
let opt = [];
opt.push(['RadioButton 1', false]);
opt.push(['RadioButton 2', false]);
opt.push(['RadioButton 3', true]);
var rb1 = new MyToolkit.RadioBox(window, opt);
rb1.move(400, 150);
rb1.onChange((event) => {
    console.log(event.checked)
})
rb1.onStateChange(function(e) {
    console.log(e)
})


/***************TextBox***************/
var tbox = new MyToolkit.TextBox(window);
tbox.move(100, 400)
tbox.onChange(function(e) {
    console.log(e)
});


/***************ScrollBar***************/
var scrollBar = new MyToolkit.ScrollBar(window);
scrollBar.move(350, 100)
scrollBar.setHeight(200);
scrollBar.onStateChange((event) => {
    console.log(event)
})
console.log(scrollBar.getPosition());



/***************ProgressBar***************/
var pgb = new MyToolkit.ProgressBar(window);
pgb.move(100, 500)
pgb.size(300, 10)
pgb.setIncrement(4);
pgb.onStateChange((event) => {
        console.log(event)
    })
    // pgb.progress(20);
let p = 0
setInterval(() => {
    p += 20;
    if (p > 100) {
        p = 0;
    }
    pgb.progress(p);
}, 1000)


/***************ToggleButton***************/
var menu = new MyToolkit.switchBtn(window);
menu.move(100, 150)
menu.onStateChange((event) => {
    console.log(event)
})