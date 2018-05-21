
class Contact {
    constructor(name, email, number) {
        this.name = name;
        this.email = email;
        this.number = number;
    }
}

function details(index){
    let name = document.querySelector("#name"+index).innerHTML;
    let email = document.querySelector("#email"+index).innerHTML;
    let number = document.querySelector("#number"+index).innerHTML;

    let details =  document.querySelector('#details');

    details.innerHTML = "<p> Name : "+ name + "</p>" + "<p> Email : "+ email + "</p>" + "<p> Number : "+ number + "</p>" ;

    //details.appendChild();
}

function edit(index){
    let name = document.querySelector("#name"+index).innerHTML;
    let email = document.querySelector("#email"+index).innerHTML;
    let number = document.querySelector("#number"+index).innerHTML;
    let newContact = new Contact(name, email, number);
    cm.remove(newContact);

    document.querySelector('#name').value = name;
    document.querySelector('#number').value = number;
    document.querySelector('#email').value = email;

//     //let form = document.createElement("table");
//     let f = document.createElement("form");
//     f.setAttribute('onsubmit',"return EditedformSubmitted();");
    
//     //f.setAttribute('action',"submit.php");
    
//     let na = document.createElement("input"); //input element, text
//     na.setAttribute('type',"text");
//     na.setAttribute('id',"editedName");
//     na.innerHTML = "name";
//     //name.setAttribute('name',"username");

//     let num = document.createElement("input"); //input element, text
//     num.setAttribute('type',"number");
//     num.setAttribute('id',"editedNumber");
//     num.innerHTML = "number";
//    // number.setAttribute('name',"number");

//    let em = document.createElement("input"); //input element, text
//    em.setAttribute('type',"email");
//    em.setAttribute('id',"editedEmail");
//    em
    
//     let s = document.createElement("input"); //input element, Submit button
//     s.setAttribute('type',"submit");
//     //s.setAttribute('value',"Submit");
    
//     f.appendChild(na);
//     f.appendChild(num);
//     f.appendChild(em);
//     f.appendChild(s);
    
//     //and some more input elements here
//     //and dont forget to add a submit button
    
//     document.querySelector('#edit').appendChild(f);

}


function deleteContact(index) {
    //alert('delete button click' + event.type);
    
   // var sav = this;
   
   
    let name = document.querySelector("#name"+index).innerHTML;
    let email = document.querySelector("#email"+index).innerHTML;
    let number = document.querySelector("#number"+index).innerHTML;
    let newContact = new Contact(name, email, number);
    cm.remove(newContact);

    cm.displayContactsAsATable("contacts");
    //console.log(sav.innerHTML);
    //console.log(document.querySelector('#name'+index ).innerHTML);
};
 
class ContactManager {
    constructor() {
        // when we build the contact manager, it
        // has an empty list of contacts
        this.listOfContacts = [];
    }
    add(contact) {
        this.listOfContacts.push(contact);
    }
    remove(contact) {
        // we iterate on the list of contacts until we find the contact
        // passed as a parameter (we say that they are equal if emails match)
        for (let i = 0; i < this.listOfContacts.length; i++) {
            var c = this.listOfContacts[i];

            if (c.email === contact.email) {
                // remove the contact at index i
                this.listOfContacts.splice(i, 1);
                // stop/exit the loop
                break;
            }
        };

       
    }

    displayContactsAsATable(idOfContainer) {
        var counter = 0;
        // to empty the container that contains the results
        let container = document.querySelector("#" + idOfContainer);
        container.innerHTML = "";
 
        if(this.listOfContacts.length === 0) {
            container.innerHTML = "<p>No contacts to display!</p>";
            // stops the execution of this method
            return;
        }
        // creates and populates the table with users
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let row = table.insertRow();
        //row.setAttribute('class',"success");

        row.innerHTML =  "<th>Name</th>" +
                         "<th>Email</th>" +
                        "<th>Phone number</th>" +
                        "<th>Actions</th>";
        
       // thead.appendChild(row);
       // table.appendChild(thead);

        
        table.setAttribute('class',"table table-striped");
        // iterates on the array of users
        this.listOfContacts.forEach(function(currentContact) {
            // creates a row
            let row = table.insertRow();
            row.innerHTML = "<td id='name" + (counter) + "'onclick='details(" + (counter) +")' >" + currentContact.name + "</td>"
                          + "<td id='email" + (counter) + "' >" + currentContact.email + "</td>"
                          + "<td id='number" + (counter) + "' >" + currentContact.number + "</td>"
                          + "<td>" + "<button onclick='deleteContact(" + (counter) +");'>Delete<botton>" +
                           "<button onclick='edit(" + (counter) +");'>Edit<botton>" + "</td>";
                          
                          ++counter;

        });
        // adds the table to the div
        container.appendChild(table);
        
    }

    printContactsToConsole() {
        this.listOfContacts.forEach(function (c) {
            console.log(c.name);
        });
    };
}

var cm = new ContactManager();

function formSubmitted() {
    // Get the values from input fields
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let number = document.querySelector("#number");
    console.log(number.value);
    console.log('HELLO');
    let newContact = new Contact(name.value, email.value, number.value);
    cm.add(newContact);
    // Empty the input fields
    name.value = "";
    email.value = "";
    number.value ="";
    cm.printContactsToConsole();
    //cm.displayContactsAsATable(contacts);
    // refresh the table
    cm.displayContactsAsATable("contacts");
    // do not let your browser submit the form using HTTP
    return false;
}

// function EditedformSubmitted() {
//     // Get the values from input fields
//     let name = document.querySelector("#editedName");
//     let email = document.querySelector("#editedEmail");
//     let number = document.querySelector("#editedNumber");
//     console.log(number.value);
//     console.log('HELLO');
//     let newContact = new Contact(name.value, email.value, number.value);
//     cm.add(newContact);
//     // Empty the input fields
//     name.value = "";
//     email.value = "";
//     number.value ="";
//     cm.printContactsToConsole();
//     //cm.displayContactsAsATable(contacts);
//     // refresh the table
//     cm.displayContactsAsATable("contacts");
//     // do not let your browser submit the form using HTTP
//     return false;
// }