// Function to generate random integer within a specified range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize queue status with random values when the page loads
function initializeQueueStatus() {
    const queueNumber = getRandomInt(1, 50); // Random queue number between 1 and 50
    const estimatedWaitingTime = getRandomInt(5, 120); // Random waiting time between 5 and 120 minutes

    // Update the DOM with the simulated queue details
    document.getElementById('queueNumber').innerText = `${queueNumber}`;
    document.getElementById('waitingTime').innerText = `${estimatedWaitingTime} minutes`;
}
// Function to generate a random integer within a specified range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to initialize the queue status with random values
function initializeQueueStatus() {
    const queueNumber = getRandomInt(1, 50); // Random queue number between 1 and 50
    const estimatedWaitingTime = getRandomInt(5, 120); // Random waiting time between 5 and 120 minutes

    // Update the DOM with the simulated queue details
    document.getElementById('queueNumber').innerText = `${queueNumber}`;
    document.getElementById('waitingTime').innerText = `${estimatedWaitingTime} minutes`;
}

// Initialize queue status on page load
window.onload = function() {
    initializeQueueStatus();
};

// Function to update bed availability with random values
function updateBedAvailability() {
    const bedsAvailable = getRandomInt(0, 20); // Random number of available beds between 0 and 20

    // Update the DOM with the simulated bed availability
    document.getElementById('beds').innerText = `Beds Available: ${bedsAvailable}`;
}

// Event listener for form submission
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const specialization = document.getElementById('specialization').value;
    const appointmentDate = document.getElementById('appointmentDate').value;

    // Simulate server response with random values
    const queueNumber = getRandomInt(1, 50); // Random queue number between 1 and 50
    const estimatedWaitingTime = getRandomInt(5, 120); // Random waiting time between 5 and 120 minutes

    // Display simulated queue details after form submission
    document.getElementById('queueNumber').innerText = `Your Queue Number: ${queueNumber}`;
    document.getElementById('waitingTime').innerText = `Estimated Waiting Time: ${estimatedWaitingTime} minutes`;

    // Update bed availability after booking
    updateBedAvailability();
});

// Initialize queue status and bed availability on page load
window.onload = function() {
    initializeQueueStatus();  // Set initial queue status
    updateBedAvailability();  // Set initial bed availability
};
