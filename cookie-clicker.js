
var totalDCGained = 0;
var income = 0;
var currencyDC = 0;
var time = 0;
var clicks = 0;

var name = "Dimension Maker";
var dirtName = "Dirt:";
var stoneName = "Stone:";
var gemName = "Gems:";
var metalName = "Metals:";
var waterName = "Water:";
var lightName = "Light:";
var airName = "Air:";
var cellName = "Cell:";


var portalImage1 = "http://orig09.deviantart.net/7225/f/2015/238/6/3/portal7_by_anthony_daluz-d978kmn.png";
var portalImage2 = "http://orig09.deviantart.net/7418/f/2015/238/e/2/portal6_by_anthony_daluz-d978kmw.png";
var portalImage3 = "http://orig11.deviantart.net/ab3a/f/2015/238/8/9/portal5_by_anthony_daluz-d978kn0.png";
var portalImage4 = "http://orig00.deviantart.net/f2aa/f/2015/238/3/c/portal4_by_anthony_daluz-d978knc.png"
var portalImage5 = "http://orig15.deviantart.net/b253/f/2015/238/8/b/portal2_by_anthony_daluz-d978knv.png";
var portalImage6 = "http://orig06.deviantart.net/588c/f/2015/238/7/3/portal1_by_anthony_daluz-d978ko4.png";
var portalImage7 = "http://orig11.deviantart.net/f60c/f/2015/238/d/2/portal3_by_anthony_daluz-d978knp.png";

var dirtImage = "http://orig02.deviantart.net/f929/f/2015/233/5/9/dirt_grass_by_anthony_daluz-d96kzha.png";
var stoneImage = "http://orig10.deviantart.net/bcae/f/2015/233/1/3/stone_by_anthony_daluz-d96kzgl.png";
var mineralImage = "http://orig06.deviantart.net/a646/f/2015/233/a/c/minerals_by_anthony_daluz-d96kzgz.png";
var metalImage = "http://orig12.deviantart.net/e012/f/2015/233/4/5/metals_by_anthony_daluz-d96kzh1.png";
var waterImage = "http://orig08.deviantart.net/6c4a/f/2015/233/6/d/water_by_anthony_daluz-d96kzga.png";
var lightImage = "http://orig11.deviantart.net/3bae/f/2015/233/d/6/light_by_anthony_daluz-d96kzh6.png";
var airImage = "http://orig11.deviantart.net/e681/f/2015/233/8/2/air_by_anthony_daluz-d96kzg2.png";
var cellImage = "http://orig09.deviantart.net/f98f/f/2015/234/8/0/cell_by_anthony_daluz-d96q3q3.png";

var portalAngle = 1;

var dirtUpgrade = 0;
var stoneUpgrade = 0;

var perSec = 0;
var perSecPrice = 100;
var perSecPriceInc = 75;

var dirtQuantity = 0;
var dirtPrice = 10;
var dirtPriceInc = 0.25;
var dirtIncome = 1;

var stoneQuantity = 0;
var stonePrice = 40;
var stonePriceInc = 1;
var stoneIncome = 5;

var mineralsQuantity = 0;
var mineralsPrice = 300;
var mineralsPriceInc = 10;

var metalsQuantity = 0;
var metalsPrice = 1000;
var metalsPriceInc = 25;

var waterQuantity = 0;
var waterPrice = 2000;
var waterPriceInc = 50;

var lightQuantity = 0;
var lightPrice = 5000;
var lightPriceInc = 100;

var airQuantity = 0;
var airPrice = 10000;
var airPriceInc = 200;

var cellQuantity = 0;
var cellPrice = 100000;
var cellPriceInc = 500;

$(document).ready(function(){

  function animateClicker(){
    if(portalAngle === 7){
      $("#clickWormhole").attr("src", portalImage7);
      portalAngle = 1;
    }
    if(portalAngle === 6){
      $("#clickWormhole").attr("src", portalImage6);
      portalAngle += 1;
    }
    if(portalAngle === 5){
      $("#clickWormhole").attr("src", portalImage5);
      portalAngle += 1;
    }
    if(portalAngle === 4){
      $("#clickWormhole").attr("src", portalImage4);
      portalAngle += 1;
    }
    if(portalAngle === 3){
      $("#clickWormhole").attr("src", portalImage3);
      portalAngle += 1;
    }
    if(portalAngle === 2){
      $("#clickWormhole").attr("src", portalImage2);
      portalAngle += 1;
    }
    if(portalAngle === 1){
      $("#clickWormhole").attr("src", portalImage1);
      portalAngle += 1;
    }
  }

  setInterval(animateClicker, 90)

  function runForMoney(){
    console.log("Im Working");
    currencyDC += perSec;
    totalDCGained += perSec;
    $(".money2").html(currencyDC);
    $("#totalGained").html("Total money gained: $" + totalDCGained);
  }

  setInterval(runForMoney, 1000);

  $(".upgradeButtonPS").click(function(){
    if(currencyDC >= perSecPrice){
      currencyDC -= perSecPrice;
      perSecPriceInc += 25;
      perSecPrice += perSecPriceInc;
      perSec += 1;
      $(".perSec").text(perSec);
      $(".upgrade3").html("Costs: $" + perSecPrice);
    }
  });

  $("#clickWormhole").click(function(){
    currencyDC += .25;
    totalDCGained += .25;
    $(".money2").html(currencyDC);
    $("#totalGained").html("Total money gained: $" + totalDCGained);
    clicks++;
    if(clicks == 10){
      currencyDC += income;
      totalDCGained += income;
      $(".income2").text(income);
      clicks = 0;
      }
  });

  $("#dirt").click(function(){
    if(currencyDC >= dirtPrice){
      income += dirtIncome;
      $(".income2").text(income);
      dirtQuantity++;
      $(".damount").text(dirtQuantity);
      currencyDC -= dirtPrice;
      $(".money2").text(currencyDC);
      dirtPrice += dirtPriceInc;
      dirtPriceInc += 1;
      $(".dirtInfoPri").text("The cost of this is $" + dirtPrice);
    }
    if(dirtQuantity >= 10){
      $(".dirt-upgrade").css("visibility", "visible");
    }
    if(dirtUpgrade >= 1){
      $(".dirt-upgrade").remove();
    }
    else{console.log("Could not complete transaction")}
  });

  $(".dirt-upgrade").click(function(){
    if(dirtQuantity >= 10){
      if(currencyDC >= 1000){
        currencyDC -= 1000;
        dirtIncome += 4;
        dirtUpgrade += 1;
        income += dirtIncome * dirtQuantity - dirtQuantity;
        $(".dirtInfoIn").text("Increases Income by " + dirtIncome);
        $(".dirt-upgrade").remove();
        $(".income2").text(income);
        $(".money2").text(currencyDC);
        if(stoneQuantity >= 10){
          $(".stone-upgrade").css("visibility", "visible");
        }
      }
    }
  });

  $("#stone").click(function(){
    if(currencyDC >= stonePrice){
      income += 5;
      $(".income2").text(income);
      stoneQuantity++;
      $(".samount").text(stoneQuantity);
      currencyDC -= stonePrice;
      $(".money2").text(currencyDC);
      stonePrice += stonePriceInc;
      stonePriceInc += 2;
      $(".stoneInfoPri").text("The cost of this is $" + stonePrice);
    }
    if(stoneQuantity >= 10 && dirtIncome == 5){
      $(".stone-upgrade").css("visibility", "visible");
    }
    if(stoneUpgrade >= 1){
      $(".stone-upgrade").remove();
    }
    else{console.log("Could not complete transaction")}
  });

    $(".stone-upgrade").click(function(){
    if(stoneQuantity >= 10){
      if(currencyDC >= 5000){
        currencyDC -= 5000;
        stoneIncome += 15;
        stoneUpgrade += 1;
        income += stoneIncome * stoneQuantity - 5 * stoneQuantity;
        $(".stoneInfoIn").text("Increases Income by " + stoneIncome);
        $(".stone-upgrade").remove();
        $(".income2").text(income);
        $(".money2").text(currencyDC);
      }
    }
  });

  $("#minerals").click(function(){
    if(currencyDC >= mineralsPrice){
      income += 20;
      $(".income2").text(income);
      mineralsQuantity++;
      $(".gamount").text(mineralsQuantity);
      currencyDC -= mineralsPrice;
      $(".money2").text(currencyDC);
      mineralsPrice += mineralsPriceInc;
      mineralsPriceInc += 3;
      $(".gemsInfoPri").text("The cost of this is $" + mineralsPrice);
    }
    else{console.log("Could not complete transaction")}
  });

  $("#metals").click(function(){
    if(currencyDC >= metalsPrice){
      income += 80;
      $(".income2").text(income);
      metalsQuantity++;
      $(".meamount").text(metalsQuantity);
      currencyDC -= metalsPrice;
      $(".money2").text(currencyDC);
      metalsPrice += metalsPriceInc;
      metalsPriceInc += 4;
      $(".metalsInfoPri").text("The cost of this is $" + metalsPrice);
    }
    else{console.log("Could not complete transaction")}
  });

  $("#water").click(function(){
    if(currencyDC >= waterPrice){
      income += 150;
      $(".income2").text(income);
      waterQuantity++;
      $(".wamount").text(waterQuantity);
      currencyDC -= waterPrice;
      $(".money2").text(currencyDC);
      waterPrice += waterPriceInc;
      waterPriceInc += 5;
      $(".watersInfoPri").text("The cost of this is $" + waterPrice);
    }
    else{console.log("Could not complete transaction")}
  });

  $("#light").click(function(){
    if(currencyDC >= lightPrice){
      income += 300;
      $(".income2").html(income);
      lightQuantity++;
      $(".lamount").text(lightQuantity);
      currencyDC -= lightPrice;
      $(".money2").html(currencyDC);
      lightPrice += lightPriceInc;
      lightPriceInc += 6;
      $(".lightsInfoPri").text("The cost of this is $" + lightPrice);
    }
    else{console.log("Could not complete transaction")}
  });

  $("#air").click(function(){
    if(currencyDC >= airPrice){
      income += 500;
      $(".income2").html(income);
      airQuantity++;
      $(".aamount").text(airQuantity);
      currencyDC -= airPrice;
      $(".money2").html(currencyDC);
      airPrice += airPriceInc;
      airPriceInc += 7;
      $(".airsInfoPri").text("The cost of this is $" + airPrice);
    }
    else{console.log("Could not complete transaction")}
  });

  $("#cell").click(function(){
    if(currencyDC >= cellPrice){
      income += 1000;
      $(".income2").html(income);
      cellQuantity++;
      $(".ceamount").text(cellQuantity);
      currencyDC -= cellPrice;
      $(".money2").html(currencyDC);
      cellPrice += cellPriceInc;
      cellPriceInc += 8;
      $(".cellsInfoPri").text("The cost of this is $" + cellPrice);
    }
    else{console.log("Could not complete transaction")}
  });

  $("#saver").click(function(){
    var everySingleThing = {totalDCGained, currencyDC, income, dirtUpgrade, stoneUpgrade, dirtQuantity, dirtPrice, dirtPriceInc, dirtIncome, stoneQuantity, stonePrice, stonePriceInc, stoneIncome, mineralsQuantity, mineralsPrice, mineralsPriceInc, metalsQuantity, metalsPrice, metalsPriceInc, waterQuantity, waterPrice, waterPriceInc, lightQuantity, lightPrice, lightPriceInc, airQuantity, airPrice, airPriceInc, cellQuantity, cellPrice, cellPriceInc, perSec, perSecPrice, perSecPriceInc,  portalImage7,  portalImage6,  portalImage5,  portalImage4,  portalImage3,  portalImage2,  portalImage1, dirtImage, stoneImage, mineralImage, metalImage, waterImage, lightImage, airImage, cellImage, name, dirtName, stoneName, gemName, metalName, waterName, lightName, airName,cellName}
    var SaveFiles = Parse.Object.extend("saveFiles");
    var saveFiles = new SaveFiles();
    saveFiles.save(everySingleThing).then(function(object) {
      alert(saveFiles.id);
      $(".IdForSession").text("ID: " + saveFiles.id);
    });
  });

  

  $("#loader").click(function(){
    new Parse.Query("saveFiles").get($("#loaderInfo").val(),{
      success: function(results){
        console.log(results);
        dirtUpgrade = results["attributes"]["dirtUpgrade"];
        stoneUpgrade = results["attributes"]["stoneUpgrade"];
        totalDCGained = results["attributes"]["totalDCGained"];
        currencyDC = results["attributes"]["currencyDC"];
        income = results["attributes"]["income"];
        perSec = results["attributes"]["perSec"];
        perSecPrice = results["attributes"]["perSecPrice"];
        perSecPriceInc = results["attributes"]["perSecPriceInc"];
        dirtQuantity = results["attributes"]["dirtQuantity"];
        dirtPrice = results["attributes"]["dirtPrice"];
        dirtPriceInc = results["attributes"]["dirtPriceInc"];
        dirtIncome = results["attributes"]["dirtIncome"];
        stoneQuantity = results["attributes"]["stoneQuantity"];
        stonePrice = results["attributes"]["stonePrice"];
        stonePriceInc = results["attributes"]["stonePriceInc"];
        stoneIncome = results["attributes"]["stoneIncome"];
        mineralsQuantity = results["attributes"]["mineralsQuantity"];
        mineralsPrice = results["attributes"]["mineralsPrice"];
        mineralsPriceInc = results["attributes"]["mineralsPriceInc"];
        metalsQuantity = results["attributes"]["metalsQuantity"];
        metalsPrice = results["attributes"]["metalsPrice"];
        metalsPriceInc = results["attributes"]["metalsPriceInc"];
        waterQuantity = results["attributes"]["waterQuantity"];
        waterPrice = results["attributes"]["waterPrice"];
        waterPriceInc = results["attributes"]["waterPriceInc"];
        lightQuantity = results["attributes"]["lightQuantity"];
        lightPrice = results["attributes"]["lightPrice"];
        lightPriceInc = results["attributes"]["lightPriceInc"];
        airQuantity = results["attributes"]["airQuantity"];
        airPrice = results["attributes"]["airPrice"];
        airPriceInc = results["attributes"]["airPriceInc"];
        cellQuantity = results["attributes"]["cellQuantity"];
        cellPrice = results["attributes"]["cellPrice"];
        cellPriceInc = results["attributes"]["cellPriceInc"];
        portalImage7 = results["attributes"]["portalImage7"];
        portalImage6 = results["attributes"]["portalImage6"];
        portalImage5 = results["attributes"]["portalImage5"];
        portalImage4 = results["attributes"]["portalImage4"];
        portalImage3 = results["attributes"]["portalImage3"];
        portalImage2 = results["attributes"]["portalImage2"];
        portalImage1 = results["attributes"]["portalImage1"];
        dirtImage = results["attributes"]["dirtImage"];
        stoneImage = results["attributes"]["stoneImage"];
        mineralImage = results["attributes"]["mineralImage"];
        metalImage = results["attributes"]["metalImage"];
        waterImage = results["attributes"]["waterImage"];
        lightImage = results["attributes"]["lightImage"];
        airImage = results["attributes"]["airImage"];
        cellImage = results["attributes"]["cellImage"];
        name = results["attributes"]["name"];
        dirtName = results["attributes"]["dirtName"];
        stoneName = results["attributes"]["stoneName"];
        gemName = results["attributes"]["gemName"];
        metalName = results["attributes"]["metalName"];
        waterName = results["attributes"]["waterName"];
        lightName = results["attributes"]["lightName"];
        airName = results["attributes"]["airName"];
        cellName = results["attributes"]["cellName"];
        $(".income2").text(income);
        $(".money2").text(currencyDC);
        $(".cellsInfoPri").text("The cost of this is $" + cellPrice);
        $(".ceamount").text(cellQuantity);
        $(".airsInfoPri").text("The cost of this is $" + airPrice);
        $(".aamount").text(airQuantity);
        $(".lightsInfoPri").text("The cost of this is $" + lightPrice);
        $(".lamount").text(lightQuantity);
        $(".watersInfoPri").text("The cost of this is $" + waterPrice);
        $(".wamount").text(waterQuantity);
        $(".metalsInfoPri").text("The cost of this is $" + metalsPrice);
        $(".meamount").text(metalsQuantity);
        $(".gemsInfoPri").text("The cost of this is $" + mineralsPrice);
        $(".gamount").text(mineralsQuantity);
        $(".stoneInfoPri").text("The cost of this is $" + stonePrice);
        $(".samount").text(stoneQuantity);
        $(".dirtInfoPri").text("The cost of this is $" + dirtPrice);
        $(".damount").text(dirtQuantity);
        $(".perSec").text(perSec);
        $(".upgrade3").html("Costs: $" + perSecPrice);
        $(".dirtInfoIn").text("Increases Income by " + dirtIncome);
        $(".stoneInfoIn").text("Increases Income by " + stoneIncome);
        $(".dirtImage").attr("src", dirtImage);
        $(".stoneImage").attr("src", stoneImage);
        $(".gemsImage").attr("src", mineralImage);
        $(".metalImage").attr("src", metalImage);
        $(".waterImage").attr("src", waterImage);
        $(".lightImage").attr("src", lightImage);
        $(".airImage").attr("src", airImage);
        $(".cellImage").attr("src", cellImage);
        $(".dirt").text(dirtName);
        $(".stone").text(stoneName);
        $(".gems").text(gemName);
        $(".metals").text(metalName);
        $(".water").text(waterName);
        $(".light").text(lightName);
        $(".air").text(airName);
        $(".cell").text(cellName);
        $(".dimensionName").text(name);
        if(dirtUpgrade >= 1){
          $(".dirt-upgrade").remove();
        }
        if(stoneUpgrade >= 1){
          $(".stone-upgrade").remove();
        }
      },
      error: function(error){
        console.log(error)
      }
    });
  });
});
