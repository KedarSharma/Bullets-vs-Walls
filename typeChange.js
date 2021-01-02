var gunLists = new Array(2) 
gunLists["LMG"] = ["M4LMG","RPD"]; 
gunLists["SMG"] = ["MSMC", "PDW-57"]; 
gunLists["Assault Rifle"] = ["M4", "AK117"]; 
gunLists["Sniper"] = ["DL Q33", "XPR 50"]; 
gunLists["Pistol"]= ["MW11", "J358"];
gunLists["Shotgun"]= ["BY15", "Striker"]; 

function countryChange(selectObj) { 
  var indx = selectObj.selectedIndex; 
  var selected = selectObj.options[indx].value; 
  var gList = gunLists[selected]; 
  var gSelect = document.getElementById("gunName");
  var len = gSelect.options.length;
  while (len > 0) { 
    gSelect.remove(0);
    len--;
  } 
  var newOption; 
  for (var i=0; i<gList.length; i++) { 
    newOption = document.createElement("option"); 
    newOption.text=gList[i]; 
    try { 
      gSelect.add(newOption);
    } 
    catch (e) { 
      gSelect.appendChild(newOption); 
    } 
  } 
} 