/*Patient Health Record Management System - Proof of Concept
Version 0.0, 10/06/2023 - Caleb Eason

THIS PROGRAM IS DEPENDANT ON THE SYNCRONOUS READLINE MODULE
The module has been included in the node_modules file.  To install, use 'npm install'.
If this doesn't work visit 'https://www.npmjs.com/package/readline-sync' to install manually*/

//ANCHOR Packages
var readlineSync = require('readline-sync');

//ANCHOR Variables and Constants

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
const findRecord = () => {}

//ANCHOR getOperation
const getOperation = () => {}

//ANCHOR deleteRecord
const deleteRecord = () => {}

//ANCHOR modifyRecord
const modifyRecord = () => {}

//ANCHOR Main
const main = () => {
    //Console.clear is not supported in node so this is the next best thing.
    console.log('\n'.repeat(100))
    console.log(`Welcome to Patient Health Record Management System (Proof of Concept)

    This system allows you to easliy view, modify and delete patient records
    
    All names and information contained in this program is fictional, any similarties to 
    real persons is purely coincidential\n`)
    readlineSync.question('press ENTER to conintue\n>')
    //console.log(patients) //for debugging
    let selectedRecord = findRecord()
}

main()