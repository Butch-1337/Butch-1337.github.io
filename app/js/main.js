jssor_1_slider_init = function() {

	var jssor_1_SlideoTransitions = [
	  [{b:0,d:600,y:-290,e:{y:27}}],
	  [{b:0,d:1000,y:185},{b:1000,d:500,o:-1},{b:1500,d:500,o:1},{b:2000,d:1500,r:360},{b:3500,d:1000,rX:30},{b:4500,d:500,rX:-30},{b:5000,d:1000,rY:30},{b:6000,d:500,rY:-30},{b:6500,d:500,sX:1},{b:7000,d:500,sX:-1},{b:7500,d:500,sY:1},{b:8000,d:500,sY:-1},{b:8500,d:500,kX:30},{b:9000,d:500,kX:-30},{b:9500,d:500,kY:30},{b:10000,d:500,kY:-30},{b:10500,d:500,c:{x:87.50,t:-87.50}},{b:11000,d:500,c:{x:-87.50,t:87.50}}],
	  [{b:0,d:600,x:410,e:{x:27}}],
	  [{b:-1,d:1,o:-1},{b:0,d:600,o:1,e:{o:5}}],
	  [{b:-1,d:1,c:{x:175.0,t:-175.0}},{b:0,d:800,c:{x:-175.0,t:175.0},e:{c:{x:7,t:7}}}],
	  [{b:-1,d:1,o:-1},{b:0,d:600,x:-570,o:1,e:{x:6}}],
	  [{b:-1,d:1,o:-1,r:-180},{b:0,d:800,o:1,r:180,e:{r:7}}],
	  [{b:0,d:1000,y:80,e:{y:24}},{b:1000,d:1100,x:570,y:170,o:-1,r:30,sX:9,sY:9,e:{x:2,y:6,r:1,sX:5,sY:5}}],
	  [{b:2000,d:600,rY:30}],
	  [{b:0,d:500,x:-105},{b:500,d:500,x:230},{b:1000,d:500,y:-120},{b:1500,d:500,x:-70,y:120},{b:2600,d:500,y:-80},{b:3100,d:900,y:160,e:{y:24}}],
	  [{b:0,d:1000,o:-0.4,rX:2,rY:1},{b:1000,d:1000,rY:1},{b:2000,d:1000,rX:-1},{b:3000,d:1000,rY:-1},{b:4000,d:1000,o:0.4,rX:-1,rY:-1}]
	];

	var jssor_1_options = {
	  $AutoPlay: true,
	  $Idle: 2000,
	  $CaptionSliderOptions: {
		$Class: $JssorCaptionSlideo$,
		$Transitions: jssor_1_SlideoTransitions,
		$Breaks: [
		  [{d:2000,b:1000}]
		]
	  },
	  $ArrowNavigatorOptions: {
		$Class: $JssorArrowNavigator$
	  },
	  $BulletNavigatorOptions: {
		$Class: $JssorBulletNavigator$
	  }
	};

	var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

	/*responsive code begin*/
	/*you can remove responsive code if you don't want the slider scales while window resizing*/
	function ScaleSlider() {
		var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
		if (refSize) {
			refSize = Math.min(refSize, 800);
			jssor_1_slider.$ScaleWidth(refSize);
		}
		else {
			window.setTimeout(ScaleSlider, 30);
		}
	}
	ScaleSlider();
	$Jssor$.$AddEvent(window, "load", ScaleSlider);
	$Jssor$.$AddEvent(window, "resize", ScaleSlider);
	$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
	/*responsive code end*/
};

ready(preloader);
	
function ready(fn) {
	if (document.readyState != 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

function preloader(){
	var draw = SVG('drawing').size(400,400);
	var image = draw.image('img/logo.svg');
		image.size(160, 160);

	image.move(20,20);
	image.animate(3000).rotate(360).loop();
}

window.addEventListener("load", function load(event){
	var bg = document.getElementById('pre-bg');
	fade(bg);
	window.removeEventListener("load", load, false); //remove listener, no longer needed
	jssor_1_slider_init();

},false);

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 100);
}

$(function () {
    Highcharts.chart('chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Динамика продаж'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
			type: 'category'
        },
        yAxis: {
            title: {
                text: 'Количество продаж'
            }
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: '2015 год',
            data: [
			['Январь',  29.19  ],
			['Февраль', 71.50  ],
			['Март',    106.40 ],
			['Апрель',  129.20 ],
			['Май',     144.00 ],
			['Июнь',    176.00 ],
			['Июль',    135.60 ],
			['Август',  148.50 ],
			['Сентябрь',216.40 ],
			['Октябрь', 194.10 ],
			{name: 'Ноябрь', y: 95.60, drilldown: 'nov'},
			['Декабрь', 354.40]
			],
			type: 'line'
        }, {
            name: '2016 год',
            data: [ 
			['Январь',  69.19 ],
			['Февраль', 110.50],
			['Март',    156.40], 
			['Апрель',  142.20], 
			['Май',     150.00], 
			['Июнь',    206.00], 
			['Июль',    180.60], 
			['Август',  165.50], 
			['Сентябрь',228.40], 
			['Октябрь', 220.10], 
			['Ноябрь',  145.60], 
			['Декабрь', 376.40]
			],
			type: 'line'		
        }],
		drilldown: {
			series: [{
				id: 'nov',
				name: 'Ноябрь',
				data: [
					['1	', 30 ],
					['2	', 86 ],
					['3	', 91 ],
					['4	', 142],
					['5	', 30 ],
					['6	', 152],
					['7	', 106],
					['8	', 30 ],
					['9	', 30 ],
					['10', 30 ],
					['11', 58 ],
					['12', 30 ],
					['13', 30 ],
					['14', 67 ],
					['15', 144],
					['16', 41 ],
					['17', 158],
					['18', 48 ],
					['19', 82 ],
					['20', 152],
					['21', 119],
					['22', 183],
					['23', 160],
					['24', 30 ],
					['25', 147],
					['26', 170],
					['27', 124],
					['28', 104],
					['29', 125],
					['30', 103],
					['31', 163]
                ]
            }]
		}
    });
});