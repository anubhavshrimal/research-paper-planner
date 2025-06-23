// Load all guidance content
const guidanceContent = {
    ...guidancePart1,
    ...guidancePart2,
    ...guidancePart3
};

// Function to add info buttons to questions
function addInfoButtons() {
    // Get all question elements
    const questions = document.querySelectorAll('.question');

    // Loop through each question
    questions.forEach(question => {
        // Get the textarea element to find its ID
        const textarea = question.querySelector('textarea');
        if (!textarea) return;

        const questionId = textarea.id;

        // Check if we have guidance content for this question
        if (guidanceContent[questionId]) {
            // Get the question text element
            const questionText = question.querySelector('.question-text');

            // Create the info button
            const infoButton = document.createElement('span');
            infoButton.className = 'info-button';
            infoButton.textContent = 'ℹ';
            infoButton.setAttribute('data-question-id', questionId);
            infoButton.setAttribute('title', 'Show guidance');

            // Add click event to the info button
            infoButton.addEventListener('click', function () {
                showGuidance(questionId);
            });

            // Append the info button to the question text
            questionText.appendChild(infoButton);
        }
    });
}

// Function to show guidance in the sidebar
function showGuidance(questionId) {
    // Get the guidance content for this question
    const guidance = guidanceContent[questionId];
    if (!guidance) return;

    // Get the sidebar elements
    const sidebar = document.getElementById('info-sidebar');
    const sidebarTitle = document.querySelector('.info-sidebar-title');
    const sidebarContent = document.getElementById('info-sidebar-content');

    // Set the title and content
    sidebarTitle.textContent = guidance.title;
    sidebarContent.innerHTML = guidance.content;

    // Show the sidebar
    sidebar.classList.add('active');
}

// Function to initialize the sidebar
function initSidebar() {
    // Get the close button
    const closeButton = document.getElementById('info-sidebar-close');

    // Add click event to close the sidebar
    closeButton.addEventListener('click', function () {
        document.getElementById('info-sidebar').classList.remove('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function (e) {
        const sidebar = document.getElementById('info-sidebar');
        const infoButtons = document.querySelectorAll('.info-button');

        // Check if the click is outside the sidebar and not on an info button
        let clickedInfoButton = false;
        infoButtons.forEach(button => {
            if (button === e.target) {
                clickedInfoButton = true;
            }
        });

        if (!sidebar.contains(e.target) && !clickedInfoButton && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
}

// Initialize the guidance system when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add info buttons to questions
    addInfoButtons();

    // Initialize the sidebar
    initSidebar();
});
