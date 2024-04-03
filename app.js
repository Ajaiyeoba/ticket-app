const header = document.querySelector("header");

    window.addEventListener ('scroll', function() {
        header.classList.toggle('sticky', this.window.scrollY >  0)
    });

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navmenu.classList.toggle('open');
    }

document.addEventListener('DOMContentLoaded', function() {
    const eventList = document.getElementById('eventList');

    // events/concerts

    const events = [
        {
            name : 'Fire and Sand',
            date : '12-23-2024',
            image : 'ass/c1kpcehqivz3scqmkzuo.webp',
            price : '7000.00'
        },
        {
            name : 'Yhemo Lee',
            date : '12-23-2024',
            image : 'ass/jr3ilqkz1ufildgmtukx.webp',
            price : '5000.00'
        },
        {
            name : 'Abarie.com',
            date : '12-23-2024',
            image : 'ass/2272dab8-fea5-4547-b1b6-407f0fb32f41.jpeg',
            price : '5000.00'
        },
        {
            name : 'Soycity',
            date : '12-23-2024',
            image : 'ass/mlgfp86j5jmghhkxexkz.jpg.webp',
            price : '5000.00'
        },
        {
            name : 'Destalker Laughter Crusade',
            date : '12-23-2024',
            image : 'ass/IMG_2233-768x888.jpeg',
            price : '5000.00'
        },
        {
            name : 'High Voltage Doings',
            date : '12-23-2024',
            image : 'ass/IMG_0633-768x960.jpeg',
            price : '10000.00'
        },{
            name : 'SDLiC',
            date : '12-23-2024',
            image : 'ass/D9EEBD20-C08A-49B0-A40F-A565DFDA380E.jpeg',
            price : '5000.00'
        },
        {
            name : 'AY Live',
            date : '12-23-2024',
            image : 'ass/d83e177c-be90-49e5-8e93-a65630bbcb99-768x481.jpeg',
            price : '3000.00'
        }

    ];
    // {
    //   const  result = [
    //       "repeat(1,2,3,4,5,6,7)",
    //       {
    //         "status": "disabled",
    //         "name": {
    //           "first": "Jamison",
    //           "middle": "Austin",
    //           "last": "Rath"
    //         },
    //         "username": "Jamison-Rath",
    //         "password": "GHJ0f1h38KN0UNh",
    //         "emails": [
    //           "Vivianne_Johnson78@gmail.com",
    //           "Erling_Wintheiser@gmail.com"
    //         ],
    //         "phoneNumber": "1-834-265-3679 x4573",
    //         "location": {
    //           "street": "674 Hermann Path",
    //           "city": "New Camryn",
    //           "state": "Oklahoma",
    //           "country": "Latvia",
    //           "zip": "74257-5940",
    //           "coordinates": {
    //             "latitude": 65.7431,
    //             "longitude": 5.4732
    //           }
    //         },
    //         "website": "https://glamorous-face.info",
    //         "domain": "kaleidoscopic-marshland.com",
    //         "job": {
    //           "title": "Forward Branding Associate",
    //           "descriptor": "Forward",
    //           "area": "Web",
    //           "type": "Engineer",
    //           "company": "Balistreri Group"
    //         },
    //         "creditCard": {
    //           "number": "58937468123383696357",
    //           "cvv": "011",
    //           "issuer": "diners_club"
    //         },
    //         "uuid": "14afcfc1-b57f-48ba-a9b1-6f2db659894e",
    //         "objectId": "660b12da4f6fd8d4546ae713"
    //       }
    //     ]
    //   }

    // functon to display events


    function displayEvents() {
        eventList.innerHTML = '';
        events.forEach(row => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('row');
            eventElement.innerHTML = `
            <img src='${row.image}' alt='${events.name}' >
            <div class="product-text">
                        <h5>Sale</h5>
                    </div>
                    <div class="price">
            <h4 > ${row.name}</h4> 
            <p>Date: ${row.date} </p>
            <h4>Price: #${row.price}</h4>
            </div>
             <button class="orderBtn" onclick=""  id="buyBtn"> Buy Tickets </button>  
           

            `;

           // selectTickets(' ${row.name}', ${row.price})
            eventList.appendChild(eventElement);
        });
    } 
    displayEvents();

    // function to handle selecting tickets

    window.selectTickets = function(eventName, price) {
        const tickets = prompt(`How many Tickets do  you need? ${eventName}`);
        if (tickets !== null && !isNaN(tickets) && tickets > 0){
            const total = price * tickets;
            alert(`You selected ${tickets} tickets for ${eventName}. Total: #${total}`);
        } else {
            alert(`Invald Request! Please enter a valid number  ` )
        }
    };
});

/* 
    window.selectTickets = function() {
    // Get event name and price from form fields
    const eventName = document.getElementById('eventName').value;
    const price = document.getElementById('price').value;
    const tickets = document.getElementById('tickets').value;
    
    // Validate the number of tickets
    if (tickets !== "" && !isNaN(tickets) && tickets > 0){
        const total = price * tickets;
        alert(`You selected ${tickets} tickets for ${eventName}. Total: ${total}`);
    } else {
        alert(`Invalid Request! Please enter a valid number of tickets.`);
    }
};
*/


var modal = document.getElementById("myModal");
var btn = document.getElementById("buyBtn");
var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    } 
    span.onclick = function(){
        modal.style.display ="none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
    }
}
const 

function buyBtn(){
    mod
} 