const fs = require('fs');

 
let notes = [
    {
        title: 'Shopping List',
        body: 'Buy milk and bread',
        time_added: '2023-08-01T08:30:00Z'
    },
    {
        title: 'Homework',
        body: 'Finish math assignment',
        time_added: '2023-08-01T09:00:00Z'
    },
    // more notes go here...
]

let json_data = JSON.stringify(notes, null, 2)

fs.writeFileSync("notes.json", json_data)
  

//const date = new Date();
  //  return date.toISOString();
  
let choices = `1. Add a note
2. List all notes
3. Read a note
4. Delete a note
5. Update a note
6. Exit
 `
console.log(choices)

let readLine = require("readline-sync");



const addNote = ()=>{
    let json_data= fs.readFileSync("notes.json", 'utf8')
    let parse_data = JSON.parse(json_data)

    let noteTitle  = readLine.question("Enter note title: ")
    let noteBody = readLine.question("Enter the body of the note: ")
    const cuurentTime = new Date()
    let timeAdded = cuurentTime.toISOString()

    let newNote = {}
     newNote["title"] = noteTitle;
     newNote["body"] = noteBody;
     newNote["time_added"] = timeAdded

    parse_data.push(newNote)
    console.log(parse_data)
    let string_data = JSON.stringify(parse_data, null, 2);
    fs.writeFileSync( "notes.json", string_data)

    console.log("Note added successfully!")

}


const listNote=() => {
    let json_data= fs.readFileSync("notes.json", 'utf8')
    let parse_data = JSON.parse(json_data)
    let arrLength = parse_data.length
    
    for (i=0; i< arrLength; i++){
        console.log(`${i+1}.  Title: ${parse_data[i].title} 
    Body: ${parse_data[i].body}
    Added on: ${parse_data[i].time_added} `)

    }


}

const readNote = ()=>{
    let json_data= fs.readFileSync("notes.json", 'utf8')
    let parse_data = JSON.parse(json_data)
    let arrLength = parse_data.length
    let readTitle = readLine.question("Enter the title to read:")
    for (i=0; i< arrLength; i++){
        if (readTitle == parse_data[i].title)
        {
            console.log(`${i+1}.  Title: ${parse_data[i].title} 
        Body: ${parse_data[i].body}
        Added on: ${parse_data[i].time_added} `)
    }

    }
}

const deleteNote = ()=>{
    let json_data= fs.readFileSync("notes.json", 'utf8')
    let parse_data = JSON.parse(json_data)
    let arrLength = parse_data.length
    let readTitle = readLine.question("Enter the title to read:")
    for (i=0; i< arrLength; i++){
        if (readTitle == parse_data[i]["title"])
        {
           parse_data = parse_data.filter(item=>item !== parse_data[i]);

    }
    let string_data = JSON.stringify(parse_data, null, 2);
    fs.writeFileSync( "notes.json", string_data)

    

}
console.log("Note deleted successfully!")
}

const updateNote = ()=>{
    let json_data= fs.readFileSync("notes.json", 'utf8')
    let parse_data = JSON.parse(json_data)
    let arrLength = parse_data.length
    let readTitle = readLine.question("Enter the title to read:")
    for (i=0; i< arrLength; i++){
        if (readTitle == parse_data[i]["title"])
        {
    let newBody = readLine.question(`Enter the new body for the title "${parse_data[i].title}" :`)
            parse_data[i].body = newBody

    }
    let string_data = JSON.stringify(parse_data, null, 2);
    fs.writeFileSync( "notes.json", string_data)

    

}
console.log("Note updated successfully!")


}



while(true){
    let choice = readLine.questionInt("Enter your choice :");
    if (choice==1){
        addNote()
    }
    else if(choice==2){
        listNote()
    }
    else if (choice==3){
        readNote()
    }
    else if(choice==4){
        deleteNote()
    }
    else if (choice==5){
        updateNote()
    }
    else if (choice==6){
        break;
    }
}