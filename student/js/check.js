//验证学号
function idcheck(t){
	var showinput=document.getElementById(t.id);
	var val=showinput.value;
   

	if (val.indexOf(" ")!=-1) {
		var par=showinput.parentNode;
		var last=par.lastChild;
		last.innerHTML="格式错误！";
	}else if (val=="") {
		var par=showinput.parentNode;
		var last=par.lastChild;
		last.innerHTML="不能为空！";
	}else if (val.length>15) {
		var par=showinput.parentNode;
		var last=par.lastChild;
		last.innerHTML="不能超过15个数字！";
	}
	else if(isNaN(val)){
		var par=showinput.parentNode;
		var last=par.lastChild;
		last.innerHTML="请输入数字！";
	}else {
		var par=showinput.parentNode;
		var last=par.lastChild;
		last.setAttribute("style","color:green");
		last.innerHTML="格式正确";
	}
}
//验证其他
function showcheck(t){
	var showinput=document.getElementById(t.id);
	var val=showinput.value;
   

	if (val.indexOf(" ")!=-1) {
		var par=showinput.parentNode;
		var last=par.lastChild;
		last.innerHTML="格式错误！";
	}else if (val=="") {
		var par=showinput.parentNode;
		var last=par.lastChild;
		last.innerHTML="不能为空！";
	}else if (val.length>40) {
		var par=showinput.parentNode;
		var last=par.lastChild;
		last.innerHTML="不能超过40个字符！";
	}else if (!isNaN(val)) {
		var par=showinput.parentNode;
		var last=par.lastChild;
		last.innerHTML="请输入字符串！";
	}else {
		var par=showinput.parentNode;
		var last=par.lastChild;
		last.setAttribute("style","color:green");
		last.innerHTML="格式正确";
	}
}
//验证男女
function sexcheck(t) {
	// body...
	var showinput=document.getElementById(t.id);
	var val=showinput.value;
	if (val=="男"||val=="女") {
		var par=showinput.parentNode;
		var last=par.lastChild;
		last.setAttribute("style","color:green");
		last.innerHTML="格式正确";
	}
	else {
		var par=showinput.parentNode;
		var last=par.lastChild;
		last.setAttribute("style","color:red");
		last.innerHTML="格式错误，只能输入男或女!";
	}
}

//验证日期
function checkdate(t){
	var a = /^(\d{4})-(\d{2})-(\d{2})$/
	var showinput=document.getElementById(t.id);
	var val=showinput.value;
	if (!a.test(val)) { 
		var par=showinput.parentNode;
		var last=par.lastChild;
		last.setAttribute("style","color:red");
		last.innerHTML="日期格式不正确！";
	} 
	else {
		var par=showinput.parentNode;
		var last=par.lastChild;
		last.setAttribute("style","color:green");
		last.innerHTML="格式正确";
	}
} 

//提交按钮
function sub() {
	// body...
	var val=$(".check").text();
	//alert(val)
	if (val=="格式正确格式正确格式正确格式正确格式正确格式正确格式正确格式正确") {
		var action=document.getElementById("actiondo");
		action.setAttribute("action","php/base_info_insert.php");
	} else {
		alert("数据填写错误或不完整！");
	}
}
function sub1() {
	// body...
	var val=$(".check").text();
	//alert(val)
	if (val=="格式正确格式正确格式正确格式正确") {
		var action=document.getElementById("actiondo");
		action.setAttribute("action","php/good_info_insert.php");
	} else {
		alert("数据填写错误或不完整！");
	}
}