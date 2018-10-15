var health = 100;
var credits = 2;

function ShowInspect(){
  document.getElementById('role-inspected').className = "inspect-showrole";
}
function HideInspect(){
  document.getElementById('role-inspected').className = "inspect-hidden";
}
function ShowMenuInv(){
  document.getElementById('menu-inv').className = "menu-inv";
}

function DamageHead(){
  health-=100;
  UpdateHP();
}
function DamageTorso(){
  health-=33;
  UpdateHP();
}
function DamageUpperExt(){
  health-=25;
  UpdateHP();
}
function DamageLowerExt(){
  health-=10;
  UpdateHP();
}
function UpdateHP(){
  if(health <= 0){
    health = 0;
    document.getElementById('menu').className = "hidden";
  }
  else {
    document.getElementById('menu').className = "menu";
  }
  document.getElementById('hp').innerHTML = "HP: " + health.toString();
}
