var arrayRoles;
var counter = 0;
  function AssignRoles() {
    arrayRoles = [2]; //Declare array and assign detective; 2 is detective
    var x = document.getElementById('form');
    var numPlayers = x.elements[0].value;
    var traitorRatio = x.elements[1].value;
    var boolJester = x.elements[2].checked;
    var boolPhoenix = x.elements[3].checked;
    var boolSurvival = x.elements[4].checked;
    var boolInfected = x.elements[5].checked;

    var numTraitors = Math.round((numPlayers - 1) * traitorRatio);
    for (i = 0; i < numTraitors; i++){
      arrayRoles.push(1);
    }
    if(boolJester && arrayRoles.length < numPlayers){ //Assign jester to array; 3 is jester
      x = Math.floor(Math.random() * 9) + 1;
      if(x < 5){
        arrayRoles.push(3);
      }
    }
    if(boolPhoenix && arrayRoles.length < numPlayers){ //Assign phoenix to array; 4 is phoenix
      x = Math.floor(Math.random() * 9) + 1;
      if(x < 4){
        arrayRoles.push(4);
      }
    }
    if(boolSurvival && arrayRoles.length < numPlayers){ //Assign survivalist to array; 5 is survivalist
      x = Math.floor(Math.random() * 9) + 1;
      if(x < 4){
        arrayRoles.push(5);
      }
    }
    if(boolInfected && arrayRoles.length < numPlayers){ //Assign infected to array; 6 is infected
      var x = Math.floor(Math.random() * 9) + 1;
      if(x < 4){
        arrayRoles.push(6);
      }
    }

    x = numPlayers - arrayRoles.length;
    for(i = 0; i < x; i++){ //Fill with innocent; 0 is innocent
      arrayRoles.push(0);
    }
    //document.getElementById('test').innerHTML = arrayRoles.toString();
    arrayRoles = ArrayShuffle(arrayRoles);
    //document.getElementById('test').innerHTML = arrayRoles.toString();

    document.getElementById('creatormain').className = 'assign';
    ShowRoles();
  }

  function ArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function ShowRoles() {
    var array = arrayRoles;
    var dispFirst = document.getElementById('ass-first');
    var dispInnocent = document.getElementById('ass-inno');
    var dispTraitor = document.getElementById('ass-traitor');
    var dispDetective = document.getElementById('ass-detect');
    var dispJester = document.getElementById('ass-jester');
    var dispPhoenix = document.getElementById('ass-phoenix');
    var dispSurvivalist = document.getElementById('ass-survival');
    var dispInfected = document.getElementById('ass-infected');

    if(dispFirst.className === "assign-anim"){
      if(array[counter] === 0){
        dispInnocent.className = "assign-anim";
      }
      else if(array[counter] === 1){
        dispTraitor.className = "assign-anim";
      }
      else if(array[counter] === 2){
        dispDetective.className = "assign-anim";
      }
      else if(array[counter] === 3){
        dispJester.className = "assign-anim";
      }
      else if(array[counter] === 4){
        dispPhoenix.className = "assign-anim";
      }
      else if(array[counter] === 5){
        dispSurvivalist.className = "assign-anim";
      }
      else if(array[counter] === 6){
        dispInfected.className = "assign-anim";
      }
      else if(counter >= array.length){
        window.open("index.html","_self");
      }
      dispFirst.className = "assign";
      counter++;
    }
    else {
      dispFirst.className = "assign-anim";

      dispInnocent.className = "assign";
      dispTraitor.className = "assign";
      dispDetective.className = "assign";
      dispJester.className = "assign";
      dispPhoenix.className = "assign";
      dispSurvivalist.className = "assign";
      dispInfected.className = "assign";
    }
  }
