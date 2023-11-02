let clickCount = 0;
let cps = 0;
const CPS = document.getElementById('counter-per-second');
const clickButton = document.getElementById('clickButton');
const cookieCount = document.getElementById('cookieCount');
const magicCookieUpgrade = document.getElementById('magicCookieUpgrade');
const grandmaUpgrade= document.getElementById('grandmaUpgrade');
const farmUpgrade = document.getElementById('farmUpgrade');
const factoryUpgrade = document.getElementById('factoryUpgrade');
const bankUpgrade = document.getElementById('bankUpgrade');
const templeUpgrade = document.getElementById('templeUpgrade');
const spaceUpgrade = document.getElementById('spaceUpgrade');
const cookieGalaxyUpgrade = document.getElementById('galaxyUpgrade');

// === - UPGRADES - ===
let magicCookieUpgradeCount = 0;
let grandmaUpgradeCount = 0;
let farmUpgradeCount = 0;
let factoryUpgradeCount = 0;
let bankUpgradeCount = 0;
let templeUpgradeCount = 0;
let spaceUpgradeCount = 0;
let cookieGalaxyUpgradeCount = 0;

// update the click count 
function updateClickCount() {
  document.getElementById('cookieCount').textContent = clickCount;
}

//return variable to html 
function returnValue(id, variable) {
  document.getElementById(id).textContent = variable;
}

// add cookie per click
clickButton.addEventListener('click', () => {
  clickCount++;
  updateClickCount();
  console.log(clickCount);
});

//magicCookieUpgrade

magicCookieUpgrade.addEventListener('click', () => {
  if (clickCount >= 10) {
    magicCookieUpgradeCount++;
    returnValue('magicCookieUpgradeCount', magicCookieUpgradeCount);
    clickCount -= 10;
    returnValue('cookieCount', clickCount);
    cps++;
    returnValue('counter-per-second', cps);
    upgradeBuySound();
  } else alert("Insufficient Cookies");
});

function startAutoIncrementMagicCookieUpgrade() {
  autoIncrementInterval = setInterval(() => {
    if (magicCookieUpgradeCount >= 1) {
      clickCount += magicCookieUpgradeCount;
      updateClickCount();
    }
  }, 1000);
}

function stopAutoIncrement() {
  clearInterval(autoIncrementInterval);
}

startAutoIncrementMagicCookieUpgrade();


//grandma Upgrade 

grandmaUpgrade.addEventListener('click', () => {
  if (clickCount >= 50) {
    grandmaUpgradeCount++;
    returnValue('grandmaUpgradeCount', grandmaUpgradeCount);
    clickCount -= 50;
    returnValue('cookieCount', clickCount);
    cps += 5;
    returnValue('counter-per-second', cps);
    upgradeBuySound();
  } else alert("Insufficient Cookies");
});

function startAutoIncrementGrandmaUpgrade() {
  autoIncrementInterval = setInterval(() => {
    if (grandmaUpgradeCount >= 1) {
      clickCount += 5*grandmaUpgradeCount;
      updateClickCount();
    }
  }, 1000);
}

function stopAutoIncrement() {
  clearInterval(autoIncrementInterval);
}

startAutoIncrementGrandmaUpgrade();

// farm Upgrade 

farmUpgrade.addEventListener('click', () => {
  if (clickCount >= 250) {
    farmUpgradeCount++;
    returnValue('farmUpgradeCounter', farmUpgradeCount);
    clickCount -= 250;
    returnValue('cookieCount', clickCount);
    cps += 25;
    returnValue('counter-per-second', cps);
    upgradeBuySound();
  } else alert("Insufficient Cookies");
});

function startAutoIncrementfarmUpgrade() {
  autoIncrementInterval = setInterval(() => {
    if (farmUpgradeCount >= 1) {
      clickCount += 25*farmUpgradeCount;
      updateClickCount();
    }
  }, 1000);
}

function stopAutoIncrement() {
  clearInterval(autoIncrementInterval);
}

startAutoIncrementfarmUpgrade();

//factory Upgrade

factoryUpgrade.addEventListener('click', () => {
  if (clickCount >= 1000) {
    factoryUpgradeCount++;
    returnValue('factoryUpgradeCounter', factoryUpgradeCount);
    clickCount -= 1000;
    returnValue('cookieCount', clickCount);
    cps += 100;
    returnValue('counter-per-second', cps);
    upgradeBuySound();
  } else alert("Insufficient Cookies");
});

function startAutoIncrementfactoryUpgrade() {
  autoIncrementInterval = setInterval(() => {
    if (factoryUpgradeCount >= 1) {
      clickCount += 100*factoryUpgradeCount;
      updateClickCount();
    }
  }, 1000);
}

function stopAutoIncrement() {
  clearInterval(autoIncrementInterval);
}

startAutoIncrementfactoryUpgrade();

//bank Upgrade  

bankUpgrade.addEventListener('click', () => {
  if (clickCount >= 10000) {
    bankUpgradeCount++;
    returnValue('bankUpgradeCounter', bankUpgradeCount);
    clickCount -= 10000;
    returnValue('cookieCount', clickCount);
    cps += 1000;
    returnValue('counter-per-second', cps);
    upgradeBuySound();
  } else alert("Insufficient Cookies");
});

function startAutoIncrementbankUpgrade() {
  autoIncrementInterval = setInterval(() => {
    if (bankUpgradeCount >= 1) {
      clickCount += 1000*bankUpgradeCount;
      updateClickCount();
    }
  }, 1000);
}

function stopAutoIncrement() {
  clearInterval(autoIncrementInterval);
}

startAutoIncrementbankUpgrade();

//temple Upgrade

templeUpgrade.addEventListener('click', () => {
  if (clickCount >= 100000) {
    templeUpgradeCount++;
    returnValue('templeUpgradeCounter', templeUpgradeCount);
    clickCount -= 100000;
    returnValue('cookieCount', clickCount);
    cps += 10000;
    returnValue('counter-per-second', cps);
    upgradeBuySound();
  } else alert("Insufficient Cookies");
});

function startAutoIncrementtempleUpgrade() {
  autoIncrementInterval = setInterval(() => {
    if (templeUpgradeCount >= 1) {
      clickCount += 10000*templeUpgradeCount;
      updateClickCount();
    }
  }, 1000);
}

function stopAutoIncrement() {
  clearInterval(autoIncrementInterval);
}

startAutoIncrementtempleUpgrade();


// space Upgrade 

spaceUpgrade.addEventListener('click', () => {
  if (clickCount >= 1000000) {
    spaceUpgradeCount++;
    returnValue('spaceUpgradeCounter', spaceUpgradeCount);
    clickCount -= 1000000;
    returnValue('cookieCount', clickCount);
    cps += 100000;
    returnValue('counter-per-second', cps);
    upgradeBuySound();
  } else alert("Insufficient Cookies");
});

function startAutoIncrementspaceUpgrade() {
  autoIncrementInterval = setInterval(() => {
    if (spaceUpgradeCount >= 1) {
      clickCount += 100000*spaceUpgradeCount;
      updateClickCount();
    }
  }, 1000);
}

function stopAutoIncrement() {
  clearInterval(autoIncrementInterval);
}

startAutoIncrementspaceUpgrade();

// galaxy Upgrade 

cookieGalaxyUpgrade.addEventListener('click', () => {
  if (clickCount >= 10000000) {
    cookieGalaxyUpgradeCount++;
    returnValue('galaxyUpgradeCounter', cookieGalaxyUpgradeCount);
    clickCount -= 10000000;
    returnValue('cookieCount', clickCount);
    cps += 100000;
    returnValue('counter-per-second', cps);
   
    if(cookieGalaxyUpgradeCount > 1){
      upgradeBuySound();
    } 
    else {
      galaxyVictorySound();
      ShowVictoryScreen();
    }
  } else alert("Insufficient Cookies");
});

function startAutoIncrementgalaxyUpgrade() {
  autoIncrementInterval = setInterval(() => {
    if (cookieGalaxyUpgradeCount >= 1) {
      clickCount += 100000*cookieGalaxyUpgradeCount;
      updateClickCount();
    }
  }, 1000);
}

function stopAutoIncrement() {
  clearInterval(autoIncrementInterval);
}

startAutoIncrementgalaxyUpgrade();

//audio on click function 

let clickSound = document.getElementById('buy-sound');
let buySound = document.getElementById('click-sound');
let victorySound = document.getElementById('victorySound');
let buttonSound = document.getElementById('buttonClickSound');
let closeButton = document.getElementById('continuePlaying');

let cookieClickSound = function(){document.getElementById("click-sound").play()}
let upgradeBuySound = function(){document.getElementById("buy-sound").play()}
let galaxyVictorySound = function(){document.getElementById('victorySound').play()}
let buttonClickSound = function(){document.getElementById('buttonClickSound').play()}

//victory screen 

function ShowVictoryScreen() {
    document.getElementById('victoryScreen').style.display = "flex";
}

closeButton.addEventListener('click',() =>{
  HideVictoryScreen();
}
);


function HideVictoryScreen() {
  document.getElementById('victoryScreen').style.display = "none";
}


