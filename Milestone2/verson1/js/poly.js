var number_of_verticies=0;
window.onload = function(){
  paintChart(25,25);
}
function sortNumber(a,b){
  return a-b;
}


function paintChart(max_width,max_height){
  var scaleX =[];
  var scaleY=[];
  for (var i=0;i <= max_width;i++) { 
    scaleX.push(i);
  }
  for (var i=0;i<= max_height;i++) {
    scaleY.push(i);
  }
  var lineChartData = {
    labels : scaleX,
    datasets : [
      {
        fillColor : "rgba(255,255,255,0)",
        strokeColor : "rgba(255,255,255,0)",
        pointColor : "rgba(255,255,255,0)",
        pointStrokeColor : "rgba(255,255,255,0)",
        pointHighlightFill : "rgba(255,255,255,0)",
        pointHighlightStroke : "rgba(255,255,255,0)",
        scaleSteps: 1,
        scaleStartValue: 0,
        scaleStepWidth:1,
		scaleLineColor: "rgba(255,255,255,1)",
        data : scaleY
      }
    ]
  };
  
  var ctx = document.getElementById("plCnvs").getContext("2d");
  window.myLineChart = new Chart(ctx).Line(lineChartData, {
    responsive: true,
    animation: false,
    datasetStroke: false,
    scaleOverride: false,
    scaleGridLineWidth:1,
	scaleLineColor: "rgba(255,255,255,1)",
    showTooltips: false
  });
}


function getVals(id){
  var element = document.getElementById(id);
  if(!element.value || parseInt(element.value) >= parseInt(element.placeholder)||element.value <0){
    return element.placeholder;
  }
  return element.value;
}

function addTxtBox(id,name){
  var td = document.createElement('TD');
  td
  var label_box= document.createElement('LABEL');
  var text_msg=document.createTextNode(name.toUpperCase()+id+' : ');
  label_box.appendChild(text_msg);
 
  var textbox = document.createElement('INPUT');  
  textbox.setAttribute('type','TEXT');
  textbox.setAttribute('id','txt_'+name+id);
  textbox.setAttribute('size','2');
  label_box.appendChild(textbox);
  td.appendChild(label_box);
  return td;
}

function addBtn(id,text){
  var cmd_button = document.createElement('INPUT');
  cmd_button.setAttribute('type','button');
  cmd_button.setAttribute('id',id);
  cmd_button.setAttribute('value',text);
  return cmd_button;
}

function stExp(){
  paintChart(getVals("frWd"),getVals("txtFrameHeight"));
  var elements = document.getElementById("frfm").children;
  for (var _each=0;_each < elements.length;_each++){
    elements[_each].style.visibility="hidden";
  }
  getVetcnt();
}

function getVetcnt() {
  var label_box= document.createElement('LABEL');
  var text_msg=document.createTextNode('No.of Verticies:(max -10)');
  label_box.appendChild(text_msg);
  
  var textbox = document.createElement('INPUT');  
  textbox.setAttribute('type','TEXT');
  textbox.setAttribute('id','txtNOV');
  textbox.setAttribute('placeholder','10');
  
  var command_button=document.createElement('INPUT');
  command_button.setAttribute('type','button');
  command_button.setAttribute('id','cmdSetNOV');
  command_button.setAttribute('value','Enter');
  command_button.onclick=function() { appendVertices() };
  
  document.getElementById("frfm").appendChild(label_box);
  document.getElementById("frfm").appendChild(document.createElement("br"));
  document.getElementById("frfm").appendChild(textbox);
  document.getElementById("frfm").appendChild(document.createElement("br"));
  document.getElementById("frfm").appendChild(document.createElement("br"));
  document.getElementById("frfm").appendChild(command_button);
}

function appendVertices(){ 
  window.number_of_verticies = getVals("txtNOV");
  
  var elements = document.getElementById("frfm");
  while (elements.firstChild){
    elements.removeChild(elements.firstChild);
  }
  var table = document.createElement('TABLE');
  table.setAttribute('border','0');
  table.appendChild(document.createElement('TBODY'));
  for (var _text_pair=0;_text_pair<parseInt(window.number_of_verticies);_text_pair++) {
    tr = document.createElement('TR');
    tr.appendChild(addTxtBox(_text_pair,'x'));
    tr.appendChild(addTxtBox(_text_pair,'y'));
    table.appendChild(tr);
  }
  var tr_cmds = document.createElement('TR');
  tr_cmds.setAttribute('align','justify');
  var next_iteration=addBtn('cmdNextIter','Next');
  var prev_iteration=addBtn('cmdPrevIter','Prev');
  var reset_lab=addBtn('cmdReset','Reset');
  next_iteration.onclick=function() { plotArea() };
  reset_lab.onclick=function(){location.reload();}
  tr_cmds.appendChild(document.createElement('TD').appendChild(next_iteration));
  tr_cmds.appendChild(document.createElement('TD').appendChild(prev_iteration));
  tr_cmds.appendChild(document.createElement('TD').appendChild(reset_lab));
  table.appendChild(tr_cmds);
  document.getElementById("frfm").appendChild(table);
}
function plotArea(){
  this.xVerts=[];
  this.yVerts=[];

  for (var i=0;i < window.number_of_verticies;i++){
    window.myLineChart.addData(["txt_x"+i,"txt_y"+i],"Test");
   this.xVerts.push(getVals("txt_x"+i));
   this.yVerts.push(getVals("txt_y"+i));
 }

 console.log(xVerts);
 console.log(yVerts);
}
