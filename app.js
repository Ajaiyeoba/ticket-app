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
            price : '5000.00'
        },
        {
            name : 'Concert',
            date : '12-23-2024',
            image : 'ass/c1kpcehqivz3scqmkzuo.webp',
            price : '5000.00'
        },
        {
            name : 'Concert',
            date : '12-23-2024',
            image : 'ass/2272dab8-fea5-4547-b1b6-407f0fb32f41.jpeg',
            price : '5000.00'
        },
        {
            name : 'Soycity',
            date : '12-23-2024',
            image : 'ass/mlgfp86j5jmghhkxexkz.jpg.webp',
            price : '5000.00'
        }
    ];

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
            <h4>Price: ${row.price}</h4>
            </div>
            <button class="orderBtn" onclick="selectTickets('${row.name}', ${row.price})" > Buy Tickets </button>
            `;
            eventList.appendChild(eventElement);
        });
    } 
    displayEvents();

    // function to handle selectng tickets

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

