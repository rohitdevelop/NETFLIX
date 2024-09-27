function toggleFAQ(id) {
    const faq = document.getElementById(id);
    faq.classList.toggle('hidden'); // Toggle the hidden class
}


function subscribe() {
    const email = document.getElementById('email').value;
    if (email && email.includes('@')) {
        alert('Thank you for subscribing!');
    } else {
        alert('Please enter a valid email address.');
    }
}



function toggleTheme() {
    document.body.classList.toggle('bg-white');
    document.body.classList.toggle('text-black');
}

