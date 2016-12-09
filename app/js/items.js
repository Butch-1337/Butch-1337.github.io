'use strict';

var appObj = {
	
	url: "mockdata/tech.json",
	
	app: document.getElementById('app'),
	
	itemsObj: {},
	
	filtered: {},
	
	lotSel: document.getElementById('lotSelect'),
	
	lotBrandSel: document.getElementById('lotBrandSelect'),
	
	services:{
		makeRequest: function(url, onloadFunc, id) {
			return new Promise(function(resolve, reject) {
				var self = this;
				var xhr = new XMLHttpRequest();	
				xhr.open('GET', url);
				xhr.onload = function (){
					if (this.status == 200) {
						resolve(this.response);
						onloadFunc(xhr,id);
					}
				}
				
				xhr.onerror = function() {
					reject(console.error("Ошибка связи"));
				};
				
				xhr.send(null);
			});	
		}
		
	},
		
	onloadSeq: function(xhr) {

		var self = appObj;
		try {
			self.itemsObj = JSON.parse(xhr.responseText);		
		} 
		catch(err) {
			console.error(err.name + ': ' + err.message);
			alert(err.name + ': ' + err.message);
		}
		
		var itms = self.itemsObj.items || [];
		
		self.filtered = itms;
		
		self.createLotsList(itms.length,itms);
		self.fillLot(itms);
		
		self.lotSel.onchange = function(){
			self.selector(itms);
		};
		
		self.lotBrandSel.onchange = function(){
			self.selector(itms);
		};
		
		self.onclickListeners();
		
	},
	
	onclickListeners: function() {	
		var self = appObj;
		
		var titles = document.querySelectorAll('.lot-tit');
		titles.forEach(function(el){
			el.onclick = self.createDescr;	
		});
		
		var imgRef = document.querySelectorAll('.lot-a-img');
		imgRef.forEach(function(el){
			el.onclick = self.createDescr;	
		});
	},
	
	createLotsList: function(n,itms) {
		var lotList = document.getElementById('lotList');
		for (var i = 0; i < Math.ceil(n/4); i++) {
			var row = document.createElement('div');
			row.id = 'row' + i;
			row.className = 'row mrow';
			lotList.appendChild(row);
			for (var j = 0; j < 4 && (4*i + j) < n; j++) {
				var div = document.createElement('div');
				this.fillLotList(itms[4*i + j].id, i);
			}
		}
	},
	
	fillLotList: function(idNum, rowNum) {
		var lotRow = document.querySelector('#row' + rowNum);
		var tmpl = document.querySelector('#lotListTmpl').content;

		tmpl.querySelector('.lot').id = 'lot' + idNum;
		tmpl.querySelector('.lot-a-img').href = '/lots/id' + idNum;
		tmpl.querySelector('.lot-img').id = 'lotImg' + idNum;
		tmpl.querySelector('.lot-tit').id = 'lotTit' + idNum;
		tmpl.querySelector('.lot-tit').href = '/lots/id' + idNum;
		tmpl.querySelector('.lot-cat').id = 'lotCat' + idNum;
		
		lotRow.appendChild(tmpl.cloneNode(true));
	},
	
	fillLot: function(itms) {
		itms.forEach(function(el) {
			var title = document.getElementById('lotTit' + el.id);
			var category = document.getElementById('lotCat' + el.id);
			var img = document.getElementById('lotImg' + el.id);
			var objCat = el.category;
			
			title.innerHTML = el.name;
			category.innerHTML = el.category;
			
			appObj.getImage(objCat, img);
		});
	},
	
	getImage: function(cat, img) {
		if (cat === 'PC') img.src = '../img/pc.svg';
		if (cat === 'Notebook') img.src = '../img/notebook.svg';
		if (cat === 'Tablet') img.src = '../img/tablet.svg';
		if (cat === 'Phone') img.src = '../img/phone.svg';
	},
	
	selector: function(itms) {
				
		var catValue = this.lotSel.value;
		var brandValue = this.lotBrandSel.value;
		
		var selectedCat = itms.filter(function(itObj){
			return itObj.category === catValue ||
			catValue === 'All';
		});
		
		this.filtered = selectedCat;
		
		var selectedBrand = this.filtered.filter(function(itObj){
			return itObj.brand === brandValue ||
			brandValue === 'All';
		});

		this.filtered = selectedBrand;
				
		this.deleteLot();
		this.createLotsList(this.filtered.length, this.filtered);
		this.fillLot(this.filtered);
		this.onclickListeners();
		
	},
		
	deleteLot: function() {
		var lotSc = document.getElementById('lotSc');
		lotSc.removeChild(lotList);
		var emptyDiv = document.createElement('div');
		emptyDiv.id = 'lotList';
		lotSc.appendChild(emptyDiv);
	},
	
	createDescr(evt) {
		evt.preventDefault();
		var id = +evt.srcElement.id.split('').slice(6).join('');
		var state = {idNum:	id};

		history.pushState(state, null, '/lots/id' + id);
			
		appObj.deleteLot();	
		appObj.services.makeRequest('/lots/id.html', appObj.onloadDescr, id);
	},
	
	onloadDescr: function(xhr,id) {
		appObj.app.innerHTML = xhr.responseText;
		var title = document.querySelector('.lot-d-tit');
		var descrText = document.querySelector('.lot-d-descr');
		var descrImg = document.querySelector('.lot-d-img');
		var cat = appObj.itemsObj.items[id].category;
		
		title.innerHTML = appObj.itemsObj.items[id].name;
		descrText.innerHTML = appObj.itemsObj.items[id].description;
		
		appObj.getImage(cat, descrImg);	
	},
	
	onReturn: function(xhr) {
		appObj.app.innerHTML = xhr.responseText;
	}
}

appObj.services.makeRequest(appObj.url,appObj.onloadSeq);

window.onload=function() {
	window.setTimeout(function() {
		window.addEventListener("popstate", function(evt) {
			var path = location.pathname;
			if (path == '/items.html') {
				appObj.services.makeRequest('tmpl.html', appObj.onReturn)			
				.then( response => {
						appObj.lotSel = document.getElementById('lotSelect');
						appObj.lotBrandSel = document.getElementById('lotBrandSelect');
						appObj.services.makeRequest(appObj.url, appObj.onloadSeq);	
					}							
				)
			}
			if (path.slice(0,8) == '/lots/id') {				
				var id = evt.state.idNum; 
				appObj.services.makeRequest('/lots/id.html', appObj.onloadDescr, id);
			}
		}, false);
	}, 1);
}