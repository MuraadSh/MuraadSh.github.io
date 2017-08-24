class ProjectsC{
	constructor(image,title,description,gitHub,Link){
		this.image = image
		this.title = title
		this.description = description
		this.gitHub = gitHub
		this.Link = Link
	}
}

const main_part = new Vue({
	el: ".main_part",
	data:{
		showButtons: true
	},
	methods: {
		button_clicked(event){
			var index = getIndex(event.target,event.target.className);
			var div   = getDivBasedOnIndex("divs",index);
			eval(div.className.split(" ")[0]).hideEl = false; 
			this.showButtons = false
		}
	}
});

const about_me = new Vue({
	el: ".about_me",
	data:{
		hideEl:true
	},
	methods:{
		hide(){
			this.hideEl = true
			main_part.showButtons = true
		}
	}
});

const Projects = new Vue({
	el: ".Projects",
	data: {
		projects: [
			new ProjectsC("images/C.png","Centill","Centill is my biggest project,it's a social networking website i started working on in 2015.Created using HTML,CSS,Javascript/Jquery,PHP and Mysql",false,"http://centill.com/"),
			new ProjectsC("images/Planet.png","UIS","UIS or United Intergalactic Species is a project i created for fun.It's mostly about a database of various species,planets,galaxies,black holes around our vast universe.Created using HTML,CSS,Javascript/Jquery/Vue.js,PHP and Mysql",true,"https://github.com/MuraadSh/UIS"),
		],
		hideEl: true,
	},
	methods:{
		hide(){
			this.hideEl = true
			main_part.showButtons = true
			$(".Projects").css('display',"none");
		}
	}
});
const Contact = new Vue({
	el: ".contact",
	data: {
		hideEl: true,
	},
	methods:{
		hide(){
			this.hideEl = true
			main_part.showButtons = true
			$(".Contact").css('display',"none");
		}
	}
});const Links = new Vue({
	el: ".Links",
	data: {
		hideEl: true,
	},
	methods:{
		hide(){
			this.hideEl = true
			main_part.showButtons = true
			$(".Contact").css('display',"none");
		}
	}
});

function getIndex(element,className){ //get index of the element from class
	var node = element;
	var allNodes = document.getElementsByClassName(className);
	for (var i = 0; i < allNodes.length; i++) {
		if(allNodes[i]==element){
			return i;
		}
	}
}
function getDivBasedOnIndex(className,index){
	var allNodes = document.getElementsByClassName(className);
	for (var i = 0; i < allNodes.length; i++) {
		if(i==index){
			return allNodes[i];
		}
	}
}