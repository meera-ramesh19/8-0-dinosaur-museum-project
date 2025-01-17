/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getTallestDinosaur()
 * ---------------------
 * Returns an object with the tallest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getTallestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getTallestDinosaur(dinosaurs) {
         // checking if the dinosaurs array is empty. If so return empty object 
         if(dinosaurs.length===0){
           return {}
         }
         // returned object with  value as the tallest dinosaur
         //let tallestDinosaur = {} 
         // a variable to store the value of the height and name of the tallestdinosaur 
         let tallestHeight = 0 
         let nameOfTheTallestDinosur =  ''
         for(let i = 0;i < dinosaurs.length;i++){ 
               //a variable to store the value of the height of each dinosaur while travesring the array
               //  let  lengthOfDinosaurInMeters = dinosaurs[i].lengthInMeters 
               //convert the length from meters into feet
               let lengthOfDinosaurInFeet = dinosaurs[i].lengthInMeters  * 3.281
               //comparing if the value of height of  current dinosaur in the array with the tallest one encountered yet in the array and
               //assign the height and name to respective variables
               if(lengthOfDinosaurInFeet   > tallestHeight ){  
                    tallestHeight = lengthOfDinosaurInFeet
                    nameOfTheTallestDinosur = dinosaurs[i].name 
               }
          }
          // assign the name of the tallestdinosaur found to the tallestDinosuar object as the key and the value of the variable tallest
          //tallestDinosaur={[nameOfTheTallestDinosur] :tallestHeight}
   return {[nameOfTheTallestDinosur] :tallestHeight}
}

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */

function getDinosaurDescription(dinosaurs, id) {
         //object that returns the dinosaur details
         //let dinoDetails = null
         //variable to print out the description of the dinosaur
         let detailedDescriptionOfDinosaur ;
         //variable found  is used to toggle the value if the dinosaur is found 
         let found = false
         //variables used to display the year and the period of the dinosaur
         let year = period=0
         //variables used to display the name ,information and prononunciation in the message if found
         let name = info = pronunciation=''
         //iterate through the dinosaur array to find the result 
         for (let i = 0; i < dinosaurs.length; i++) {
                 //assign the value of the array of objects to the variable to compare
                 //identificationStringOfDinosaur = dinosaurs[i].dinosaurId

                 //using condition statement compare the value of the id provided by the user and chek if it matches that in the array of objects
                  if (dinosaurs[i].dinosaurId  === id) {
                         // change the value to true as the id matches
                         found = true
                         //assign all the values of the  object in the current iteration 
                         //dinoDetails = dinosaurs[i]
                         year = dinosaurs[i].mya[dinosaurs[i].mya.length-1]
                         name = dinosaurs[i].name
                         pronunciation = dinosaurs[i].pronunciation
                         info = dinosaurs[i].info
                         period = dinosaurs[i].period
                         //break out of loop when the condition is met
                         break;
                  }
         } 
        //ir else statement to check if the value found or not found and display the messages respectively
         if (found) { 
               detailedDescriptionOfDinosaur = `${name} (${pronunciation})\n${info} It lived in the ${period} period, over ${year} million years ago.`
         }else {
              detailedDescriptionOfDinosaur = `A dinosaur with an ID of 'incorrect-id' cannot be found.`
         }
    return detailedDescriptionOfDinosaur 
}

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given,
 *  will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of 
 * dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */

function getDinosaursAliveMya(dinosaurs, mya, key) {

        //refactored my code to add helper function to push the respective value of the array
        function isKeyProvided(dinosaur,key) {
             if (key) {
                  dinosaurArr.push(dinosaur[key])
             }else{
                  dinosaurArr.push(dinosaur.dinosaurId)
             }
           return 
        }
          //Declare a dinosaur array to hold the result 
          let dinosaurArr = [] 
          //iterate through the dinosaurs array of obejcts
          for (let dinosaur of dinosaurs) { 
                //condition statement  to check if the len of the mya array is 2 and if the passed mya value exists 
                //between the given period in the mya array in the object
                if (dinosaur.mya.length===2 && dinosaur.mya[0] >= mya && dinosaur.mya[1] <= mya) {
                       //helper function to check if key is provided by the user
                       isKeyProvided(dinosaur,key)
                //if the length of the mya is not 2 
                }else{ 
                       // check for another condition where the value of the given year is  less or the value provided
                        if (dinosaur.mya[0]===mya || (dinosaur.mya[0])-1===mya) {
                            isKeyProvided(dinosaur,key)
                        }
                }     
            }  
    return dinosaurArr     
}

module.exports = {
  getTallestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
