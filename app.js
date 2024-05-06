// Navigation

 const header = document.querySelector("header");

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', this.window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
};


document.addEventListener('DOMContentLoaded', function() {
    const eventList = document.getElementById('eventList');
    const events = [ 
        {
            name : 'Fire and Sand',
            date : '12-23-2024',
            image : 'ass/c1kpcehqivz3scqmkzuo.webp',
            price: {
                regular: 2000,
                vip: 15000,
                premium: 30000
            }
        },
        {
            name : 'Yhemo Lee',
            date : '12-23-2024',
            image : 'ass/jr3ilqkz1ufildgmtukx.webp',
            price: {
                regular: 2000,
                vip: 15000,
                premium: 30000
            }
        },
        {
            name : 'Abarie.com',
            date : '12-23-2024',
            image : 'ass/2272dab8-fea5-4547-b1b6-407f0fb32f41.jpeg',
            price: {
                regular: 2000,
                vip: 15000,
                premium: 30000
            }
        },
        {
            name : 'Soycity',
            date : '12-23-2024',
            image : 'ass/mlgfp86j5jmghhkxexkz.jpg.webp',
            price: {
                regular: 2000,
                vip: 15000,
                premium: 30000
            }
        },
        {
            name : 'Destalker Laughter Crusade',
            date : '12-23-2024',
            image : 'ass/IMG_2233-768x888.jpeg',
            price: {
                regular: 2000,
                vip: 15000,
                premium: 30000
            }
        },
        {
            name : 'High Voltage Doings',
            date : '12-23-2024',
            image : 'ass/IMG_0633-768x960.jpeg',
            price: {
                regular: 2000,
                vip: 15000,
                premium: 22,
            }
        },{
            name : 'SDLiC',
            date : '12-23-2024',
            image : 'ass/D9EEBD20-C08A-49B0-A40F-A565DFDA380E.jpeg',
            price: {
                regular: 2000,
                vip: 15000,
            }
        },
        {
            name : 'AY Live',
            date : '12-23-2024',
            image : 'ass/d83e177c-be90-49e5-8e93-a65630bbcb99-768x481.jpeg',
            price: {
                regular: 2000,
                vip: 15000,
                premium: 30000
            }
        }
     ];

    function displayEvents() {
        eventList.innerHTML = '';
        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('row');
            eventElement.innerHTML = `
                <img src="${event.image}" alt="${event.name}">
                <div class="product-text">
                    <h5>Sale</h5>
                </div>
                <div class="price">
                    <h4>${event.name}</h4> 
                    <p>Date: ${event.date}</p>
                    <h4>Price: 
                        Regular ${event.price.regular}, 
                        VIP ${event.price.vip},
                        Premium ${event.price.premium}
                    </h4>
                </div>
                 <button class="orderBtn" onclick="buyTickets('${event.name}', '${event.date}')">Buy Ticket</button>
            `;
            eventList.appendChild(eventElement);    
        });
    }
    displayEvents();
});


    
    // document.addEventListener('DOMContentLoaded', function() {
    //     function buyTickets(name, date) {
    //         const eventNameField = document.getElementById('name');
    //         const eventDateField = document.getElementById('date');
            
    //         // Check if elements exist
    //         if (eventNameField && eventDateField) {
    //             eventNameField.value = name;
    //             eventDateField.value = date;
    //             document.getElementById('ticketCheckoutForm').style.display = 'block';
    //             window.location.href = `checkout.html?eventName=${encodeURIComponent(name)}&eventDate=${encodeURIComponent(date)}`;
    //         } else {
    //             console.error('One or both of the elements with IDs "name" and "date" not found.');
    //         }
    //     }
    // });


    // function buyTickets(name, date){
    //     const eventNameField = document.getElementById('name');
    //     const eventDateField = document.getElementById('date');
        
    //     eventNameField.value = name;
    //     eventDateField.value = date;

    //     document.getElementById('ticketCheckoutForm'.style.display = 'block');
    // }


    function buyTickets(name, date) {
        const eventNameField = document.getElementById('name');
        const eventDateField = document.getElementById('date');
    
        console.log(eventNameField); // Check if eventNameField is null
        console.log(eventDateField); // Check if eventDateField is null
    
        if (eventNameField && eventDateField) { // Check if both fields are not null
            eventNameField.value = name;
            eventDateField.value = date;
    
            document.getElementById('ticketCheckoutForm').style.display = 'block';
        } else {
            console.error("One or both of the fields couldn't be found in the DOM.");
        }
    }
    