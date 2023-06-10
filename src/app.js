/*Patient Health Record Management System - Proof of Concept
Version 0.0, 10/06/2023 - Caleb Eason

THIS PROGRAM IS DEPENDANT ON THE SYNCRONOUS READLINE MODULE
The module has been included in the node_modules file.  To install, use 'npm install'.
If this doesn't work visit 'https://www.npmjs.com/package/readline-sync' to install manually*/

//ANCHOR Packages
var readlineSync = require('readline-sync');

//ANCHOR Variables and Constants

//Commands
var exitFunction = 'close'          	//Closes the program, exits record modification
var runDeleteRecord = 'delete-record'    //Calls delete record function
var runModifyRecord = 'modify-record'    //Calls modify record function
var runFindRecord = 'find-new'     //Calls find  record function

var modifyProperty = 'modify'           //Modifies the selected property
var appendToProperty = 'append'         //Appends to the selected proprty

//Patient Data
var patients = [
    {
        patientNumber: 0,
        fullName: 'John Smith',
        dateOfBirth: '12/07/1992',
        generalPractitioner: 'Kevin Strauss',
        appointments: ['Knee surgery on 11/08/2023','general check-up 28/11/2023']
    },
    {
        patientNumber: 1,
        fullName: 'Kelly Rainer',
        dateOfBirth: '02/03/2004',
        generalPractitioner: 'Kevin Strauss',
        appointments: []
    },
    {
        patientNumber: 2,
        fullName: 'Larry McDermott',
        dateOfBirth: '21/09/1953',
        generalPractitioner: 'Johesophef Strangelov',
        appointments: ['Chemotheraoy, 15/06/2024']
    },
    {
        patientNumber: 3,
        fullName: 'Larna Brown',
        dateOfBirth: '19/12/1984',
        generalPractitioner: 'Mary Hope',
        appointments: ['General checkup on the 01/08/2023','Apendectomy, 20/06/2023','X-ray 19/06/2023']
    },
    {
        patientNumber: 4,
        fullName: 'Travis Sivart',
        dateOfBirth: '13/04/1929',
        generalPractitioner: 'Rosa Rubiganosa',
        appointments: []
    },
    {
        patientNumber: 5,
        fullName: 'Petal Seaworthy',
        dateOfBirth: '17/08/1979',
        generalPractitioner: 'Johesophef Strangelov',
        appointments: []
    },
    {
        patientNumber: 6,
        fullName: 'Carol Wintersweet',
        dateOfBirth: '11/02/2014',
        generalPractitioner: 'Mary Hope',
        appointments: []
    },
    {
        patientNumber: 7,
        fullName: 'Mike Burrows',
        dateOfBirth: '20/10/1987',
        generalPractitioner: 'Dr. Lecter',
        appointments: ['Crainiotomy 19/10/2023']
    },
]

//ANCHOR Functions

//ANCHOR findRecord
const findRecord = () => {
    while (true) {
        console.log(`Enter the full name or patient number of the patient you wish to view, or type ${exitFunction} to exit\n`)
        let userInput = readlineSync.question('>')
        if (userInput.toLowerCase() === exitFunction){
            return exitFunction
        }
        let index
        if (!isNaN(userInput)){
            //console.log('number') //for debugging
            index = patients.findIndex(x => x.patientNumber == userInput);
            //console.log(index) //for debugging
        } else {
            //console.log('string') //for debugging
            index = patients.findIndex(x => (x.fullName).toLowerCase() === userInput.toLowerCase());
            //console.log(index) //for debugging
        }
        if (index === -1){
            console.log(`\nError, patient ${userInput} not found!\n`)
        } else {
            return index
        }
    }
}

//ANCHOR recordOperations
const recordOperations = (index) => {
    console.log(`\n\nHealth Record for ${patients[index].fullName}.\n`)
    console.log(patients[index])
    while (true){
        console.log(`\n\nSelect an operation:
        - To look up another record, enter:     ${runFindRecord}
        - To delete this record, enter:         ${runDeleteRecord}
        - To modify this record, enter:         ${runModifyRecord}
        - To exit the program, enter:           ${exitFunction}`)
        let userInput = readlineSync.question(">")

        if (userInput.toLowerCase() == runFindRecord){
            break
        } else if (userInput.toLowerCase() == runDeleteRecord){
            deleteRecord(index)
            break
        } else if (userInput.toLowerCase() == runModifyRecord){
            modifyRecord(index)
            break
        } else if (userInput.toLowerCase() == exitFunction){
            return exitFunction
        } else {
            console.log('\nInvalid input!')
        }
    }
}

//ANCHOR deleteRecord
const deleteRecord = (index) => {
    console.log(`\nAre you sure you wish to delete the health record of patient "${patients[index].fullName}" (patient number ${patients[index].patientNumber})?
    
    to confirm deletion type "DELETE", enter any other input to cancel deletion\n`)
    userInput = readlineSync.question(">")
    if (userInput === 'DELETE'){
        console.log(`\nDeleted health record of patient "${patients[index].fullName}" (patient number ${patients[index].patientNumber})\n`)
        patients.splice(index,1)
        //console.log(patients)   //for debugging
        readlineSync.question("press ENTER to continue")
    } else {
        console.log("\nDeletion cancelled\n")
        //console.log(patients)   //for debugging
        readlineSync.question("press ENTER to continue")
        recordOperations(index)
        
        
    }

}

//ANCHOR modifyRecord
const modifyRecord = (index) => {
    console.log('called modifyRecord')
}

//ANCHOR endProgram


//ANCHOR Main
const main = () => {
    //Console.clear is not supported in node so this is the next best thing.
    console.log('\n'.repeat(100))
    console.log(`Welcome to Patient Health Record Management System (Proof of Concept)

    This system allows you to easliy view, modify and delete patient records
    
    All names and information contained in this program is fictional, any similarties to 
    real persons is purely coincidential\n`)
    readlineSync.question('press ENTER to conintue\n>')
    
    //ANCHOR Main loop
    while (true){
        //console.log(patients) //for debugging
        console.log('\n'.repeat(100))
        index = findRecord()
        if (index === exitFunction){
            break
        }
        state = recordOperations(index)
        if (state === exitFunction){
            break
        }
    }
    //Clears the console after the program is finished
    console.log('\n'.repeat(100))
    console.log('Exiting program')
}

main()