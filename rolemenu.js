var health = 100;
var credits = 2;

var arrayRandomat = ['No u - Swap your current role with the role horizontally opposite on the menu!','Javelin - No guns or melee this round... Only throwing bullets!','THIS IS SPARTA - Melee only!','#BringBackOldJester - If the jester dies, they win the round!','Team Deathmatch - Half vs Half. All using survivalist role!','Deathmatch - All on all as survivalist!']
var hsCharges = 4;
var defibUsed = false;
var randomatUsed = false;

function ShowInspect(){
  document.getElementById('role-inspected').className = "inspect-showrole";
}
function HideInspect(){
  document.getElementById('role-inspected').className = "inspect-hidden";
}
function ShowMenuInv(){
  document.getElementById('menu-inv').className = "menu-inv";
}
function HideMenuInv(){
  document.getElementById('menu-inv').className = "hidden";
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
  }
  document.getElementById('hp').innerHTML = "HP: " + health.toString();
}

function BuyDefib(){
  document.getElementById('defib').className = "hidden";
  if(credits === 2){
    document.getElementById('inv1').innerHTML = '<div class="inv-item-defib" id="inv-has-defib" onclick="UseDefib()">Defibrillator<p />Revive a player with this tool.</div>';
    credits--;
  }
  else {
    document.getElementById('inv2').innerHTML = '<div class="inv-item-defib" id="inv-has-defib" onclick="UseDefib()">Defibrillator<p />Revive a player with this tool.</div>';
    credits--;
    BuyHideAll();
  }
}
function BuyTeamChanger(){
  document.getElementById('teamchanger').className = "hidden";
  if(credits === 2){
    document.getElementById('inv1').innerHTML = '<div class="inv-item-teamchanger" id="inv-has-teamchanger" onclick="UseTeamChanger()">Team Changer<p />Change the team of a corpse.</div>';
    credits--;
  }
  else {
    document.getElementById('inv2').innerHTML = '<div class="inv-item-teamchanger" id="inv-has-teamchanger" onclick="UseTeamChanger()">Team Changer<p />Change the team of a corpse.</div>';
    credits--;
    BuyHideAll();
  }
}
function BuyVest(){
  document.getElementById('bpv').className = "hidden";
  if(credits === 2){
    document.getElementById('inv1').innerHTML = '<div class="inv-item-bpv">Bullet Proof Vest<p />Add 25 HP. Cannot be healed over.</div>';
    credits--;
  }
  else {
    document.getElementById('inv2').innerHTML = '<div class="inv-item-bpv">Bullet Proof Vest<p />Add 25 HP. Cannot be healed over.</div>';
    credits--;
    BuyHideAll();
  }
  health+=25;
  UpdateHP();
}
function BuyStation(){
  document.getElementById('phs').className = "hidden";
  if(credits === 2){
    document.getElementById('inv1').innerHTML = '<div class="inv-item-phs" id="inv-has-phs" onclick="UseStation()">Portable Health Station<p />Use charges to heal players. 4 charges left.</div>';
    credits--;
  }
  else {
    document.getElementById('inv2').innerHTML = '<div class="inv-item-phs" id="inv-has-phs" onclick="UseStation()">Portable Health Station<p />Use charges to heal players. 4 charges left.</div>';
    credits--;
    BuyHideAll();
  }
}
function BuyGoldenGun(){
  document.getElementById('goldengun').className = "hidden";
  if(credits === 2){
    document.getElementById('inv1').innerHTML = '<div class="inv-item-goldengun">Golden gun<p />Kill a traitor, kill firer if victim not traitor.</div>';
    credits--;
  }
  else {
    document.getElementById('inv2').innerHTML = '<div class="inv-item-goldengun">Golden gun<p />Kill a traitor, kill firer if victim not traitor.</div>';
    credits--;
    BuyHideAll();
  }
}
function BuyRandomat(){
  document.getElementById('randomat').className = "hidden";
  if(credits === 2){
    document.getElementById('inv1').innerHTML = '<div class="inv-item-randomat" id="inv-has-randomat" onclick="UseRandomat()">Randomat<p />Apply randomness to the round!</div>';
    credits--;
  }
  else {
    document.getElementById('inv2').innerHTML = '<div class="inv-item-randomat" id="inv-has-randomat" onclick="UseRandomat()">Randomat<p />Apply randomness to the round!</div>';
    credits--;
    BuyHideAll();
  }
}
function BuyHideAll(){
  document.getElementById('buy-defib').className = "hidden";
  document.getElementById('buy-teamchanger').className = "hidden";
  document.getElementById('buy-bpv').className = "hidden";
  document.getElementById('buy-phs').className = "hidden";
  document.getElementById('buy-goldengun').className = "hidden";
  document.getElementById('buy-randomat').className = "hidden";
}

function UseDefib(){
  var x = Math.floor(Math.random() * 9) + 1;
  if(defibUsed){ return; }
  if(x > 6){
    document.getElementById('inv-has-defib').className = "defib-s";
    defibUsed = true;
  }
  else {
    document.getElementById('inv-has-defib').className = "defib-f";
  }
}
function UseTeamChanger(){
  document.getElementById('inv-has-teamchanger').className = "hidden";
}
function UseStation(){
  hsCharges--;
  document.getElementById('inv1').innerHTML = '<div class="inv-item-phs" id="inv-has-phs" onclick="UseStation()">Portable Health Station<p />Use charges to heal players. ' + hsCharges + ' charges left.</div>';
  if(hsCharges <= 0){
    document.getElementById('inv-has-phs').className = "hidden";
  }
}
function UseRandomat(){
  MakeARandomRoundPlz();
}

function HealSelf(){
  health+=25;
  if(health > 100){ health = 100; }
  UpdateHP();
}
function MakeARandomRoundPlz(){
  if(randomatUsed){ return; }
  var x = Math.floor(Math.random() * (arrayRandomat.length - 1)) + 1;
  document.getElementById('inv-has-randomat').innerHTML = arrayRandomat[x];
  randomatUsed = true;
}
