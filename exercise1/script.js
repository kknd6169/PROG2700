function selectCreature(){

    //Get the selected creature from the dropdown
    let selectedCreature = document.getElementById("creatureSelector").value;


    let costumeInfo;


    //Use  switch to determine costume based on user selection of guset animal
    switch (selectedCreature) {
      case "Wizard":
        //document.getElementById("costumeInfo").innerHTML="Wizards should wear pointy hats and carry wands!";
        costumeInfo="😊<br>Wizards should wear pointy hats and carry wands!";
        break;
      case "Dragon":
        costumeInfo="🐉<br>Dragons should wear fiery costumes and breathe imaginary fire!";
       // console.log("Dragons should wear fiery costumes and breathe imaginary fire!");
        break;
      case "Fairy":
        costumeInfo="🧚<br>Fairies should wear sparkly dresses and spread glitter magic!";
        //console.log("Fairies should wear sparkly dresses and spread glitter magic!");
        break;
      case "Unicorn":
        costumeInfo="🦄<br>Unicorns should wear horned headbands and have rainbow-colored manes!";
        //console.log("Unicorns should wear horned headbands and have rainbow-colored manes!");
        break;
      default:
        costumeInfo="💀<br>Hmm, I'm not sure what costume to give to this guest.";
        //console.log("Hmm, I'm not sure what costume to give to this guest.");
    }

    //Display the costume info on the web page
    document.getElementById("costumeInfo").innerHTML=costumeInfo;
}

