/* global HTMLElement, Node, ToPru */
var App;

function main(){
	var out = document.getElementById("output");

  function Debounced(func,backoff){
  	var timer;
  	return function(){
  		var self = this;
  		var evtargs = arguments;
  		if (timer){
  			clearTimeout(timer);
  			timer = undefined;
  		}
  		timer = setTimeout(function(){
  			clearTimeout(timer);
  			timer = undefined;
  			func.apply(self,evtargs);
  		},backoff);
  	}
  }

	function tolist(multiline){
		return multiline?multiline.split(/[,\n]/).map(function(k){return k.trim()}):[];
	}

	function form(field){
		var form = document.getElementById("shields_form");
		if (field == "kids") {
			return tolist(form.kids.value);
		}
		return form[field].checked || form[field].value || form[field].placeholder
	}

	var config = {
		getSettings(){
			return {
				scale: form("x"),
				firstline: {
					enabled: form("fline"),
					text: form("firstline_text")
				},
				classname: {
					enabled: form("sline"),
					text: form("classname")
				},
				classname2: form("classname2"),
				grade: form("grade"),
				children: form("kids")
			}
		},
		dump(){
			var link = document.getElementById("config_link") || document.createElement("a");
			var cfg = this.getSettings();
			link.id = "config_link";
			link.download = "Генератор бірок.json";
			if (link.href.length) URL.revokeObjectURL(link.href);
			link.href = URL.createObjectURL(new File([JSON.stringify(cfg)],"Генератор бірок",{type: "text/json"}));
			document.body.appendChild(link);
			link.style.visibility = "hidden";
			link.click();
		}
	}

	var dpmm = out.clientWidth/297;
	var page_expected_height = 210*dpmm;

	function Cell(name){
		const toggle = function(on){
			if (!(this instanceof HTMLElement)) throw new TypeError("Orphan method");
			var val = (on == undefined)?(this.getAttribute("hide") != "true"):!on;
			this.setAttribute("hide",val.toString());
			return this;
		};

		const set = function(v){
			if (!(this instanceof Node)) throw new TypeError("Orphan method");
			if (v) { //v present
				var parent = this;
				if (!(v instanceof Array)) { //not an Array
					if (v.length && (!(typeof v === "string"))) {
						//.length present but not an array (nor string): for NodeList lot
						for (var c=[],i = 0;i<v.length;i++){
							c[i]=v[i];
						}
						v = c;
					}
					else v = [v]; //converted to Array
				}
				this.innerHTML = "";
				v.forEach(function(child){
					if (child instanceof Node) {
						parent.appendChild(child)
					}
					else parent.appendChild(document.createTextNode(" "+child));
				}); //populate
			}
			return this;
		};

		const simpletext = document.createTextNode;

		var cell = Cell.cell = function cell(id){
			var self = document.createElement("div");
			self.className="shield";
			if (id) self.id = id;
			self.style.fontSize = form("x")+"em";
			return self;
		}

		function line(defaultValue,id){
			var self = document.createElement("p");
			self.className="line";
			if (id) self.id=id;
			self.toggle = toggle.bind(self);
			self.set = set.bind(self);
			self.set(defaultValue);
			return self;
		}

		function variable(defaultValue,id){
			var self = document.createElement("span");
			self.id = id;
			self.set = set.bind(self);
			if (defaultValue) self.set(defaultValue);
			return self;
		}

		function rotatable(valuesArray,id){
			var _values = valuesArray.slice(0);
			var self = document.createElement("span");
			self.className = "rotatable";
			var _index_pointer = 0;
			var _set = set.bind(self);
			self.rotate = function(index){
				if (index !== undefined) _index_pointer = index;
				else _index_pointer++;
				_index_pointer = _index_pointer%_values.length;
				_set(_values[_index_pointer]);
			};
			self.addEventListener("click",function(e){this.rotate();});
			self.rotate(0);
			return self;
		}


		var self = cell();
		self.appendChild(line(ToPru(form("firstline_text")),"line0")).toggle(form("fline"));
		self.appendChild(line(ToPru(form("classname")),"line1")).toggle(form("sline"));
    self.appendChild(line(ToPru(form("classname2")),"line1a"));
		var gender = rotatable([ToPru("учня"),ToPru("учениці")],"gender");
		self.appendChild(line([gender,variable(ToPru(form("grade")),"grade"),ToPru("класу")],"line2"));
		self.appendChild(line(ToPru("Скандинавської гімназії")));
		self.appendChild(line(ToPru("м. Києва")));
		self.appendChild(line(ToPru(name)));
		var male = checkMale(name);
		if (male === undefined) {
			self.setAttribute("message","Не вдалося визначити рід: потрібно вказати вручну");
			self.classList.add("warning");
		}
		else gender.rotate((male)?0:1);
		return self;
	}

	var fireChange = Debounced(function(target){
		var self = target;
		self.onchange();
	},600);

	function changeX(v){
		var all = document.querySelectorAll(".shield");
		for (var i=0;i<all.length;i++){
			all[i].style.fontSize = v+"em";
		}
		resize();
	}

	function line0(v){
		var all = document.querySelectorAll(".shield:not(#pad) #line0.line");
		for (var i=0;i<all.length;i++){
			if (typeof v === "boolean") all[i].toggle(v)
			else {
				all[i].set(ToPru(v));
			}
		}
		resize();
	};

	function setClassname(v){
		var all = document.querySelectorAll(".shield:not(#pad) #line1.line");
		for (var i=0;i<all.length;i++){
			if (typeof v === "boolean") all[i].toggle(v)
			else {
				all[i].set(ToPru(v));
			}
		}
		resize();
	}

  function setclsname2(v){
    var all = document.querySelectorAll(".shield:not(#pad) #line1a.line");
		for (var i=0;i<all.length;i++){
			if (typeof v === "string") {
				if (v == "") all[i].toggle(false);
				else {
					all[i].toggle(true);
					all[i].set(ToPru(v));
				}
			}
			else all[i].toggle(false);
		}
		resize();
  }

	function setGrade(v){
		var all = document.querySelectorAll(".shield:not(#pad) #line2.line #grade");
		for (var i=0;i<all.length;i++){
			all[i].set(ToPru(v));
		}
	}

	function setKids(lines){
		render(tolist(lines));
	}

	function checkMale(name){
		if (name.length){
			var girls = ["Августи","Аврелії","Аврори","Агапії","Агати","Агафії","Агафоники","Аглаї","Аглаїди","Агнеси","Агнії","Агрипини","Ади","Аделаїди","Аделіни","Адріани","Аеліти","Ази","Азалії","Аїди","Акилини","Алевтини","Аліни","Аліси","Алли","Альбертини","Альбіни","Альвіни","Альфреди","Анастасії","Анатолії","Ангеліни","Анжели","Анжеліки","Анни","Антониди","Антоніни","Антонії","Анфіси","Аполлінарії","Аполлонії","Аріадни","Аркадії","Арсени","Артемізії","Артемізи","Артемісії","Артеміси","Артемії","Аскліпії","Ассолі","Асї","Аурики","Афанасії","Афіни","Атени","Афродіти","Бажани","Барбари","Беатриси","Белли","Берегинї","Берти","Біловиди","Біломири","Білослави","Біляни","Благинї","Благовиди","Благовіри","Благовісти","Благослави","Богдани","Богодари","Богуслави","Божени","Болеслави","Борислави","Броніслави","Валентини","Валерії","Ванди","Варвари","Василини","Васси","Векли","Венери","Вероніки","Вівдї","Вікторини","Вікторії","Вілени","Віленіни","Віліни","Віоли","Віолетти","Віри","Віргінії","Віринеї","Вірослави","Віти","Віталіни","Віталії","Влади","Владилени","Владислави","Владлини","Власти","Володимири","Волї","Всеслави","В'ячеслави","Гаїни","Галини","Ганни","Анни","Гафії","Гелени","Георгіни","Гертруди","Глафіри","Глафири","Гликерії","Ликерії","Ликери","Голубки","Горислави","Горпини","Гремислави","Густави","Далевиди","Далеслави","Далемили","Далемири","Далібори","Дани","Дарини","Дарії","Дарини","Одарини","Одарки","Дарислави","Даромири","Дебори","Держислави","Дзвенимири","Дзвенислави","Дзвінки","Дивозори","Діани","Діни","Діяни","Добринки","Добряни","Добровити","Добровісти","Добродії","Доброгніви","Добролюби","Добромили","Добромири","Добромисли","Доброніги","Доброслави","Долеслави","Долини","Долї","Доляни","Домни","Домахи","Доморади","Донни","Доротеї","Дорофеї","Драгомири","Древослави","Дружелюби","Евеліни","Едіти","Елеонори","Елли","Елвіни","Ельвіри","Емми","Еммануелі","Еммануїли","Емілії","Еріки","Есмеральди","Естер","Есфір","Єви","Євгенії","Ївги","Югини","Євдокії","Вівдї","Докії","Явдохи","Євфросинії","Єфросинії","Єкатерини","Єлизавети","Лизавети","Лисавети","Єпистимії","Єпистими","Жадани","Жанни","Ждани","Жозефіни","Забави","Звенигори","Звенислави","Звонимири","Земфіри","Зірки","Зінаїди","Злати","Златомири","Златоусти","Золотодани","Зорегляди","Зореслави","Зорини","Зоряни","Зорї","Зої","Іванни","Ігорини","Ілони","Інги","Інни","Інеси","Ірини","Ірми","Іларії","Ісидори","Ії","Ївги","Йовілли","Йосипи","Осипи","Йосифати","Казимири","Казки","Калини","Капітоліни","Капитолини","Капитоліни","Карини","Кароліни","Кассандри","Катерини","Єкатерини","Катрї","Квітки","Квітослави","Кикилії","Килини","Кіри","Клавдії","Клари","Клеопатри","Колодари","Констанції","Корини","Кори","Корнелії","Красимири","Красновиди","Краснолики","Красунї","Ксенії","Аксенії","Оксенії","Оксани","Купави","Лади","Ладислави","Ладомили","Ладомири","Лариси","Левини","Лелї","Лесї","Либіді","Лідії","Лілії","Лілеї","Ліни","Лоли","Лоліти","Лукії","Лукини","Лукреції","Любави","Любанї","Любислави","Любові","Любомили","Любомири","Люборади","Людмили","Людомили","Любослави","Льолї","Ляни","Мавки","Магадари","Магдалини","Магдалени","Магди","Маїни","Майї","Маківки","Малунї","Малуши","Мальви","Мальвіни","Маргарити","Марти","Марфи","Марути","Марії","Мар'ї","Марічки","Марини","Мартини","Мар'яни","Маріанни","Маріамни","Медоради","Меланії","Мечислави","Милани","Миловани","Миловиди","Милодари","Милослави","Мирани","Миробоги","Миролюби","Мирослави","Михайлини","Млади","Мокрини","Макрини","Моніки","Мотрї","Мстислави","Мудролюби","Надії","Надіслави","Найди","Найдени","Наслави","Настасії","Настї","Наталії","Наталї","Наталки","Нелї","Немири","Нігослави","Незабудки","Ніки","Ніни","Нінелі","Нонни","Огняни","Одарки","Оксани","Олександри","Олени","Олесї","Олівії","Олімпіади","Олімпії","Ольги","Орести","Оримири","Орини","Орислави","Орисї","Оріяни","Оріянки","Орогости","Осипи","Острозори","Остромири","Осмомисли","Остромови","Пави","Павли","Павлини","Пелагії","Пелагеї","Палагни","Палазги","Параскеви","Параскевії","Парасковії","Перелюби","Перемили","Перемисли","Пистини","Півонії","Поліни","Позвізди","Полези","Поляни","Потішани","Предслави","Пріськи","Пульхерії","Пульхери","Ради","Радани","Радимири","Радмили","Радогости","Радомири","Радослави","Раїни","Раїси","Ревеки","Ребекки","Регіни","Ренати","Римми","Рини","Ріани","Ріанни","Рідни","Рогволоди","Рогніди","Родослави","Рожани","Рози","Розалії","Рузалії","Роксани","Роксолани","Ромашки","Романи","Ромени","Росави","Росини","Ростислави","Ростичари","Ростунї","Рудани","Роналіни","Рошелі","Русани","Руслани","Русудани","Русяви","Русявки","Рут","Руф","Руфіни","Руфини","Сабріни","Санти","Сари","Сарри","Світлани","Світовиди","Світогори","Світодари","Світозари","Світолики","Світолюби","Світослави","Світояри","Свободани","Святогори","Святолюби","Святослави","Севастіани","Северини","Секлети","Секлетини","Серафими","Силати","Силолюби","Силослави","Синезори","Синьооки","Сімони","Слави","Славини","Славолюби","Славомили","Сміяни","Сніжани","Сніжинки","Собіслави","Соломії","Соломонії","Сологуби","Сонцевиди","Сонцедари","Сонцелики","Сонцеслави","Сонї","Софії","Станимири","Станіслави","Стелли","Стефаниди","Стефанії","Сусанни","Сосанни","Судимири","Судислави","Сюзанни","Тави","Таїсії","Таїси","Тамари","Таміли","Танаськи","Татолюби","Твердислави","Твердогости","Творимири","Творислави","Теклї","Терези","Тетяни","Тіни","Толигніви","Тонкостани","Трояни","Улити","Уляни","Устини","Фаїни","Февронії","Февросії","Хіврї","Фекли","Феліції","Фелікси","Филікитати","Филіцитати","Филіцати","Феодори","Федори","Тодори","Феодосії","Федосії","Теодозії","Фотини","Фотинії","Хотини","Фоти","Фросини","Харити","Харитини","Харитї","Хіврї","Хриси","Христини","Христї","Цецілії","Цвітани","Чеслави","Югини","Юдит","Юдиф","Юдихви","Юзефи","Юлії","Юлини","Юнії","Юліанії","Юліанни","Юстини","Юхимії","Юхими","Юхимини","Євфимiї","Єфимії","Хими","Явдохи","Ядвіги","Яни","Яніни","Ярини","Яромири","Ярослави"];
			var boys = ["Абдулли","Авакума","Августа","Августина","Авдія","Авксентія","Аврама","Автонома","Агафона","Адальберта","Адама","Аделя","Адольфа","Адріана","Алонса","Альберта","Амоса","Ананія","Анастасія","Анатолія","Андрія","Андроніка","Ансельма","Антона","Антса","Арістофана","Арнольда","Арсена","Артема","Артемія","Афанасія","Богдана","Боніфація","Бориса","Борислава","Бояна","Броніслава","В'ячеслава","Валентина","Валерія","Варлаама","Варфоломія","Василія","Василя","Вахтанга","Веніаміна","Венцеслава","Віктора","Вільгельма","Віталія","Владислава","Власа","Володимира","Вратислава","Всеволода","Габрієля","Ганса","Гаррі","Гвіда","Гедеона","Георгія","Герасима","Герберта","Германа","Героніма","Гійома","Гліба","Горислава","Грегга","Григорія","Густава","Густава","Густафа","Дакоти","Даниїла","Данієля","Деметрія","Дениса","Джеймса","Джонатана","Діна","Дмитра","Добрині","Дорофія","Доста","Мухаммеда","Друза","Едуарда","Ежена","Євстратія","Євтихія","Євфимія","Єгора","Єлевферія","Ждана","Захарія","Зенона","Зоряна","Зури","Івана","Івара","Ігора","Ізяслава","Іларія","Іларіона","Іллі","Ісаака","Істислава","Ісуса","Йоакима","Йоана","Йосафата","Казимира","Каленика","Карла","Густава","Кира","Кирила","Кіта","Кіяса","Конона","Конрада","Корнія","Костянтина","Кріса","Кузьми","Лавріна","Лева","Леха","Лонгина","Лоренца","Лотара","Лук'яна","Любомира","Людовика","Макарія","Макара","Максима","Максиміліана","Мар'яна","Марата","Марка","Марка","Юнія","Сілана","Маркіяна","Матвія","Махна","Мефодія","Микити","Миколи","Мирона","Мирослава","Михайла","Мілана","Мітчелла","Мойсея","Момчила","Назарія","Натана","Недамира","Никодима","Нила","Нікіти", "Ноя","Олега","Олекси","Олександра","Олексія","Олівера","Онуфрія","Отта","Охріма","Павла","Павсекакія","Панкратія","Патрикія","Перрі","Петра","Пилипа","Потапа","Прокопа","Пшемислава","Радомира","Радослава","Рассела","Рафаеля","Рейнгольда","Ришарда","Рікарда","Ріхарда","Річарда","Рішара","Романа","Ромеа","Ростислава","Руслана","Святослава","Севастяна","Северина","Семена","Сергія","Сили","Силана","Сильвестра","Симеона","Симона","Спиридона","Станіслава","Степана","Судислава","Тадеуша","Тараса","Тара","Твердислава","Твердислава","Тейлора","Теофілакта","Тимофія","Тита","Тихона","Томаса","Трифона","Тутмоса","Федора","Феодосія","Феофіла","Філіпа","Філіппа","Франца","Фреда","Харитона","Хлодвіга","Хлотара","Хрвоє","Християна","Шира","Алі","Юліана","Юлія","Юрія","Юхима","Яїра","Яна","Яромира","Ярослава"];

			var fn = name.split(" ").pop().split("-");
			var male_count = 0,female_count = 0;
			fn.forEach(function(name){
				var s = new RegExp(name.split("").join("?")+"$","g");
				var m = Math.max.apply(null,boys.map(function(boy){
					return (boy.match(s)||[]).join("").length
				}));
				var f = Math.max.apply(null,girls.map(function(girl){
					return (girl.match(s)||[]).join("").length
				}));
				if (m>male_count) male_count = m;
				if (f>female_count) female_count = f;
			});

			if (male_count > female_count) return true;
			if (female_count > male_count) return false;
			return undefined;
		}
		else {
			if (Math.random()>0.5) return true;
			else return false;
		}
	}

	function render(kids){
		var c;
		out.innerHTML = "";
		for (var i = 0; i<(kids.length||25); i++){
			c = Cell((kids.length?kids[i]:""));
			out.appendChild(c);
		}
		setTimeout(resize,500);
	}

	function complement(){
		var first = out.children[0]
		, last = out.children[out.children.length-1]
		, dif=Math.round((out.clientWidth/first.clientWidth)-(out.clientWidth/last.clientWidth));
		for (var i=0; i<dif;i++){
			out.appendChild(last.cloneNode(true)).id = "pad";
		}
	}

	function resize(){
		[].slice.call(out.children).forEach(function(child){
			if (child.id == "pad") out.removeChild(child);
			else child.style.height = child.style.flexBasis?child.style.flexBasis="auto":child.style.webkitFlexBasis="auto";
		});
		var vsize = (out.clientHeight/Math.floor(out.clientHeight/out.children[0].clientHeight));
		var hsize = (out.clientWidth/Math.floor(out.clientWidth/out.children[0].clientWidth));
		for (var i=0;i<out.children.length;i++){
			out.children[i].style.height = vsize+"px";
			out.children[i].style.flexBasis?out.children[i].style.flexBasis=hsize*0.9+"px":out.children[i].style.webkitFlexBasis=hsize*0.9+"px";
		}
		complement();
	}

  App = {
    fireChange: fireChange,
    changeX: changeX,
    line0: line0,
    setClassname: setClassname,
    setclsname2: setclsname2,
    setGrade: setGrade,
    setKids: setKids,
		config: config
  }

	render(form("kids"));
}

window.addEventListener("load",main);
