var total_cost=0;
var total_area=0;
var type_of_space=0;
var team_size=1;
var mech_systems=0;
var demolition=0;

function store(email){
    alert("This is email :"+email)
}

function store_area(area){
    alert("Total area is :"+area)
}

function store_type(email){
    alert("This is email :"+email)
}

function store_team(){
    var radios = document.getElementsByName('people');
    for (var i = 0, length = radios.length; i < length; i++) {
    	if (radios[i].checked) {
    	    // do whatever you want with the checked radio
    	    alert(radios[i].value);
    	    // only one radio can be logically checked, don't check the rest
    	    break;
    	}
    }
}

function store_mech(email){
    var radios = document.getElementsByName('mech');
    for (var i = 0, length = radios.length; i < length; i++) {
    	if (radios[i].checked) {
    	    // do whatever you want with the checked radio
    	    alert(radios[i].value);
    	    // only one radio can be logically checked, don't check the rest
    	    break;
    	}
    }
}

function store_demo(demo){
    alert("Cost of demolition per square feet :"+demo)
}
