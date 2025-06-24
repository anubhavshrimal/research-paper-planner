// DOM Elements and Variables
let allTextareas;
let totalQuestions = 0;
let answeredQuestions = 0;
let paperTitleInput;
let notificationTimeout;
let questionnaireSelect;
let newQuestionnaireBtn;
let deleteQuestionnaireBtn;

// Create notification element
const notification = document.createElement('div');
notification.className = 'notification';
document.body.appendChild(notification);

// Function to show notification
function showNotification(message, duration = 3000) {
    // Clear any existing timeout
    if (notificationTimeout) {
        clearTimeout(notificationTimeout);
    }

    // Set message and show notification
    notification.textContent = message;
    notification.classList.add('show');

    // Hide notification after duration
    notificationTimeout = setTimeout(() => {
        notification.classList.remove('show');
    }, duration);
}

// Initialize questionnaire storage structure
function initializeQuestionnaireStorage() {
    if (!localStorage.getItem('questionnaires')) {
        localStorage.setItem('questionnaires', JSON.stringify({}));
        localStorage.setItem('questionnairesList', JSON.stringify([]));
        localStorage.setItem('currentQuestionnaire', '');
    }
}

// Create new questionnaire
function createNewQuestionnaire(title = 'Untitled Research') {
    const questionnaires = JSON.parse(localStorage.getItem('questionnaires'));
    const list = JSON.parse(localStorage.getItem('questionnairesList'));

    // Generate unique title if needed
    let finalTitle = title;
    let counter = 1;
    while (list.includes(finalTitle)) {
        finalTitle = `${title} ${counter}`;
        counter++;
    }

    // Create empty questionnaire
    questionnaires[finalTitle] = {
        paperTitle: finalTitle,
        answers: {}
    };

    // Update list and set as current
    list.push(finalTitle);
    localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
    localStorage.setItem('questionnairesList', JSON.stringify(list));
    localStorage.setItem('currentQuestionnaire', finalTitle);

    return finalTitle;
}

// Switch to a different questionnaire
function switchQuestionnaire(title) {
    localStorage.setItem('currentQuestionnaire', title);
    loadCurrentQuestionnaire();
}

// Delete current questionnaire
function deleteQuestionnaire(title) {
    const questionnaires = JSON.parse(localStorage.getItem('questionnaires'));
    const list = JSON.parse(localStorage.getItem('questionnairesList'));

    // Remove from structures
    delete questionnaires[title];
    const index = list.indexOf(title);
    if (index > -1) {
        list.splice(index, 1);
    }

    // Update storage
    localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
    localStorage.setItem('questionnairesList', JSON.stringify(list));

    // If we deleted the current one, switch to another or create new
    if (localStorage.getItem('currentQuestionnaire') === title) {
        if (list.length > 0) {
            localStorage.setItem('currentQuestionnaire', list[0]);
        } else {
            createNewQuestionnaire();
        }
    }

    // Update UI
    updateQuestionnaireSelector();
    loadCurrentQuestionnaire();
}

// Rename a questionnaire
function renameQuestionnaire(oldTitle, newTitle) {
    if (oldTitle === newTitle) return;

    const questionnaires = JSON.parse(localStorage.getItem('questionnaires'));
    const list = JSON.parse(localStorage.getItem('questionnairesList'));

    // Generate unique title if needed
    let finalTitle = newTitle;
    let counter = 1;
    while (list.includes(finalTitle) && finalTitle !== oldTitle) {
        finalTitle = `${newTitle} ${counter}`;
        counter++;
    }

    // Move the data
    questionnaires[finalTitle] = questionnaires[oldTitle];
    questionnaires[finalTitle].paperTitle = finalTitle;
    delete questionnaires[oldTitle];

    // Update the list
    const index = list.indexOf(oldTitle);
    if (index > -1) {
        list[index] = finalTitle;
    }

    // Update storage
    localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
    localStorage.setItem('questionnairesList', JSON.stringify(list));
    localStorage.setItem('currentQuestionnaire', finalTitle);

    // Update UI
    updateQuestionnaireSelector();
}

// Update the questionnaire selector dropdown
function updateQuestionnaireSelector() {
    const selector = document.getElementById('questionnaire-select');
    const list = JSON.parse(localStorage.getItem('questionnairesList'));
    const currentTitle = localStorage.getItem('currentQuestionnaire');

    // Clear existing options
    selector.innerHTML = '';

    // Add options for each questionnaire
    list.forEach(title => {
        const option = document.createElement('option');
        option.value = title;
        option.textContent = title;
        selector.appendChild(option);
    });

    // Select current questionnaire
    selector.value = currentTitle;
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get all textareas for tracking progress
    allTextareas = document.querySelectorAll('textarea');
    totalQuestions = allTextareas.length;

    // Add input event listener to all textareas for real-time color coding
    allTextareas.forEach(textarea => {
        textarea.addEventListener('input', function () {
            // Apply appropriate class based on content
            if (this.value.trim() !== '') {
                // Use default styling for filled textareas
                this.classList.remove('textarea-empty');
                this.classList.remove('textarea-filled');
            } else {
                this.classList.add('textarea-empty');
                this.classList.remove('textarea-filled');
            }
        });
    });

    // Get paper title input and questionnaire controls
    paperTitleInput = document.getElementById('paper-title');
    questionnaireSelect = document.getElementById('questionnaire-select');
    newQuestionnaireBtn = document.getElementById('new-questionnaire');
    deleteQuestionnaireBtn = document.getElementById('delete-questionnaire');

    // Initialize the questionnaire storage
    initializeQuestionnaireStorage();

    // If we have no questionnaires yet, create one
    const list = JSON.parse(localStorage.getItem('questionnairesList'));
    if (list.length === 0) {
        createNewQuestionnaire();
    } else if (!localStorage.getItem('currentQuestionnaire')) {
        localStorage.setItem('currentQuestionnaire', list[0]);
    }

    // Update dropdown and load current questionnaire
    updateQuestionnaireSelector();

    // Introduction section functionality
    const toggleIntroBtn = document.getElementById('toggle-intro');
    const introContent = document.getElementById('intro-content');
    const getStartedBtn = document.getElementById('get-started');
    const introSection = document.querySelector('.intro-section');

    // Check if the user has previously hidden the intro
    if (localStorage.getItem('hideIntro') === 'true') {
        introContent.style.display = 'none';
        toggleIntroBtn.textContent = 'Show Details ▼';
    }

    // Toggle intro visibility
    toggleIntroBtn.addEventListener('click', function () {
        if (introContent.style.display === 'none') {
            introContent.style.display = 'block';
            toggleIntroBtn.textContent = 'Hide Details ▲';
            localStorage.setItem('hideIntro', 'false');
        } else {
            introContent.style.display = 'none';
            toggleIntroBtn.textContent = 'Show Details ▼';
            localStorage.setItem('hideIntro', 'true');
        }
    });

    // Scroll to questionnaire when "Get Started" is clicked
    getStartedBtn.addEventListener('click', function () {
        const paperTitleContainer = document.querySelector('.paper-title-container');
        paperTitleContainer.scrollIntoView({ behavior: 'smooth' });
    });

    // Tab Navigation
    const tabButtons = document.querySelectorAll('.tab-button');
    const sections = document.querySelectorAll('.section');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');

            // Auto-save when switching between tabs
            saveProgress('auto');

            // Hide all sections and deactivate all tab buttons
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Show the target section and activate the clicked tab button
            document.getElementById(targetSection).classList.remove('hidden');
            button.classList.add('active');
        });
    });

    // Next and Previous buttons
    const nextButtons = document.querySelectorAll('.next-button');
    const prevButtons = document.querySelectorAll('.prev-button');

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const nextSection = button.getAttribute('data-next');

            // Auto-save when navigating to next section
            saveProgress('auto');

            // Hide all sections and deactivate all tab buttons
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Show the next section and activate its tab button
            document.getElementById(nextSection).classList.remove('hidden');
            document.querySelector(`.tab-button[data-section="${nextSection}"]`).classList.add('active');
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            const prevSection = button.getAttribute('data-prev');

            // Auto-save when navigating to previous section
            saveProgress('auto');

            // Hide all sections and deactivate all tab buttons
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Show the previous section and activate its tab button
            document.getElementById(prevSection).classList.remove('hidden');
            document.querySelector(`.tab-button[data-section="${prevSection}"]`).classList.add('active');
        });
    });

    // Save, Clear, and Load functionality
    const saveButton = document.getElementById('save-button');
    const clearButton = document.getElementById('clear-button');

    saveButton.addEventListener('click', saveProgress);
    clearButton.addEventListener('click', clearProgress);

    // Track textarea changes for progress calculation and add auto-save on blur
    allTextareas.forEach(textarea => {
        textarea.addEventListener('input', () => {
            updateProgress();
        });

        // Add auto-save when switching between questions
        textarea.addEventListener('blur', () => {
            saveProgress('auto');
        });
    });

    // Also auto-save when the paper title input loses focus
    if (paperTitleInput) {
        paperTitleInput.addEventListener('blur', () => {
            saveProgress('auto');
        });

        // Add change event for renaming questionnaires
        paperTitleInput.addEventListener('change', function () {
            const currentTitle = localStorage.getItem('currentQuestionnaire');
            if (currentTitle && this.value.trim() !== '' && this.value !== currentTitle) {
                renameQuestionnaire(currentTitle, this.value);
            }
        });
    }

    // Event listener for questionnaire selector
    questionnaireSelect.addEventListener('change', function () {
        switchQuestionnaire(this.value);
    });

    // Event listener for "New" button
    newQuestionnaireBtn.addEventListener('click', function () {
        // Save current questionnaire first
        saveProgress('auto');

        // Create new questionnaire and switch to it
        const newTitle = createNewQuestionnaire();

        // Update UI
        updateQuestionnaireSelector();
        loadCurrentQuestionnaire();
    });

    // Event listener for "Delete" button
    deleteQuestionnaireBtn.addEventListener('click', function () {
        const currentTitle = localStorage.getItem('currentQuestionnaire');
        if (currentTitle && confirm(`Are you sure you want to delete "${currentTitle}"? This cannot be undone.`)) {
            deleteQuestionnaire(currentTitle);
        }
    });

    // Export dropdown functionality
    const exportButton = document.getElementById('export-button');
    const exportPdfButton = document.getElementById('export-pdf');
    const exportMarkdownButton = document.getElementById('export-markdown');
    const exportJsonButton = document.getElementById('export-json');
    const dropdownContent = document.querySelector('.dropdown-content');
    const importButton = document.getElementById('import-button');
    const importFileInput = document.getElementById('import-file');

    // Toggle dropdown when clicking the export button
    exportButton.addEventListener('click', function (e) {
        e.preventDefault();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.matches('#export-button') && !e.target.matches('.dropdown-content *')) {
            dropdownContent.style.display = 'none';
        }
    });

    // Export as PDF
    exportPdfButton.addEventListener('click', function (e) {
        e.preventDefault();
        exportAsPdf();
        dropdownContent.style.display = 'none';
    });

    // Export as Markdown
    exportMarkdownButton.addEventListener('click', function (e) {
        e.preventDefault();
        exportAsMarkdown();
        dropdownContent.style.display = 'none';
    });

    // Export as JSON
    exportJsonButton.addEventListener('click', function (e) {
        e.preventDefault();
        exportAsJson();
        dropdownContent.style.display = 'none';
    });

    // Import functionality
    importButton.addEventListener('click', function () {
        importFileInput.click();
    });

    importFileInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                try {
                    importFromJson(e.target.result);
                } catch (error) {
                    showNotification('Error importing file: ' + error.message, 5000);
                }
            };
            reader.readAsText(file);
        }
    });

    // Load saved answers when the page loads
    loadProgress();
    updateProgress();
});

// Save progress to localStorage
function saveProgress(saveType = 'manual') {
    const currentTitle = localStorage.getItem('currentQuestionnaire');
    if (!currentTitle) return;

    const questionnaires = JSON.parse(localStorage.getItem('questionnaires'));
    const answers = {};

    // Save all textarea values
    allTextareas.forEach(textarea => {
        answers[textarea.id] = textarea.value;
    });

    // Save questionnaire data
    questionnaires[currentTitle] = {
        paperTitle: paperTitleInput.value,
        answers: answers
    };

    // Handle title change (rename questionnaire)
    if (paperTitleInput.value !== currentTitle && paperTitleInput.value.trim() !== '') {
        renameQuestionnaire(currentTitle, paperTitleInput.value);
    } else {
        localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
    }

    // Show notification
    if (saveType === 'auto') {
        showNotification('Auto-saved', 1500); // Shorter duration for auto-save notifications
    } else {
        showNotification('Progress saved successfully!');
    }
}

// Clear all progress for current questionnaire
function clearProgress() {
    const currentTitle = localStorage.getItem('currentQuestionnaire');
    if (!currentTitle) return;

    if (confirm('Are you sure you want to clear all your answers for this questionnaire? This cannot be undone.')) {
        // Clear all textareas
        allTextareas.forEach(textarea => {
            textarea.value = '';
        });

        // Reset paper title to questionnaire name
        if (paperTitleInput) {
            paperTitleInput.value = currentTitle;
        }

        // Clear answers in storage
        const questionnaires = JSON.parse(localStorage.getItem('questionnaires'));
        questionnaires[currentTitle] = {
            paperTitle: currentTitle,
            answers: {}
        };
        localStorage.setItem('questionnaires', JSON.stringify(questionnaires));

        // Update progress indicator
        updateProgress();

        showNotification('All progress has been cleared for this questionnaire.');
    }
}

// Load current questionnaire from localStorage
function loadCurrentQuestionnaire() {
    const title = localStorage.getItem('currentQuestionnaire');
    if (!title) return;

    const questionnaires = JSON.parse(localStorage.getItem('questionnaires'));
    const data = questionnaires[title];

    if (!data) return;

    // Set paper title
    paperTitleInput.value = data.paperTitle || title;

    // Clear all textareas first
    allTextareas.forEach(textarea => {
        textarea.value = '';
    });

    // Fill in all textareas
    if (data.answers) {
        for (const id in data.answers) {
            const textarea = document.getElementById(id);
            if (textarea) {
                textarea.value = data.answers[id];
            }
        }
    }

    // Update progress indicator
    updateProgress();
}

// Legacy function for backward compatibility
function loadProgress() {
    loadCurrentQuestionnaire();
}

// Update progress indicator
function updateProgress() {
    answeredQuestions = 0;

    // Track section-specific progress
    const sectionQuestions = {
        part1: { total: 0, answered: 0 },
        part2: { total: 0, answered: 0 },
        part3: { total: 0, answered: 0 }
    };

    // Process each textarea
    allTextareas.forEach(textarea => {
        // Get the section this textarea belongs to
        const section = textarea.closest('.section').id;

        // Update section question count
        if (section in sectionQuestions) {
            sectionQuestions[section].total++;
        }

        // Check if the textarea has content
        if (textarea.value.trim() !== '') {
            answeredQuestions++;

            // Update section answered count
            if (section in sectionQuestions) {
                sectionQuestions[section].answered++;
            }

            // Remove any styling for filled textareas (use default style)
            textarea.classList.remove('textarea-empty');
            textarea.classList.remove('textarea-filled');
        } else {
            // Apply empty style
            textarea.classList.add('textarea-empty');
            textarea.classList.remove('textarea-filled');
        }
    });

    // Update overall progress
    const progressPercentage = Math.round((answeredQuestions / totalQuestions) * 100);
    document.getElementById('progress').textContent = `${progressPercentage}%`;

    // Update section progress indicators
    updateSectionProgress('part1', sectionQuestions.part1);
    updateSectionProgress('part2', sectionQuestions.part2);
    updateSectionProgress('part3', sectionQuestions.part3);

    // Update tab progress indicators
    updateTabProgress();
}

// Update progress indicator for a specific section
function updateSectionProgress(sectionId, progress) {
    const section = document.getElementById(sectionId);

    // Create or get section progress element
    let sectionProgress = section.querySelector('.section-progress');
    if (!sectionProgress) {
        // Create new progress elements if they don't exist
        sectionProgress = document.createElement('div');
        sectionProgress.className = 'section-progress';

        const progressBar = document.createElement('div');
        progressBar.className = 'section-progress-bar';

        const progressFill = document.createElement('div');
        progressFill.className = 'section-progress-fill';

        progressBar.appendChild(progressFill);
        sectionProgress.appendChild(progressBar);

        // Insert after the section's paragraph
        const insertAfter = section.querySelector('p');
        insertAfter.parentNode.insertBefore(sectionProgress, insertAfter.nextSibling);
    }

    // Calculate percentage
    const percentage = progress.total > 0 ? Math.round((progress.answered / progress.total) * 100) : 0;

    // Update progress text and bar
    sectionProgress.innerHTML = `
        <div>Questions answered: ${progress.answered}/${progress.total} (${percentage}%)</div>
        <div class="section-progress-bar">
            <div class="section-progress-fill" style="width: ${percentage}%"></div>
        </div>
    `;
}

// Update progress indicators in tabs
function updateTabProgress() {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
        const sectionId = button.getAttribute('data-section');
        const section = document.getElementById(sectionId);

        // Count questions and answers in this section
        const textareas = section.querySelectorAll('textarea');
        const total = textareas.length;
        let answered = 0;

        textareas.forEach(textarea => {
            if (textarea.value.trim() !== '') {
                answered++;
            }
        });

        // Create or update tab progress indicator
        let tabProgress = button.querySelector('.tab-progress');
        if (!tabProgress) {
            tabProgress = document.createElement('span');
            tabProgress.className = 'tab-progress';
            button.appendChild(tabProgress);
        }

        // Update text
        tabProgress.textContent = `(${answered}/${total})`;
    });
}

// Export questionnaire as HTML/PDF
function exportAsPdf() {
    // Create a new window for the printable version
    const printWindow = window.open('', '_blank');

    // Get paper title
    const paperTitle = paperTitleInput.value || 'Research Paper Questionnaire';

    // Start building the HTML content
    let htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>${paperTitle} - Export</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 0;
                    padding: 20px;
                    color: #333;
                    max-width: 800px;
                    margin: 0 auto;
                }
                h1, h2, h3 {
                    color: #2c3e50;
                }
                .section {
                    margin-bottom: 30px;
                }
                .question {
                    margin-bottom: 20px;
                }
                .question-text {
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                .answer {
                    background-color: #f9f9f9;
                    padding: 10px;
                    border-left: 3px solid #3498db;
                    white-space: pre-wrap;
                }
                @media print {
                    .no-print {
                        display: none;
                    }
                }
            </style>
        </head>
        <body>
            <div class="no-print" style="margin-bottom: 20px;">
                <button onclick="window.print()">Print / Save as PDF</button>
                <p>Click the button above to print or save as PDF, or use your browser's print function (Ctrl+P / Cmd+P)</p>
            </div>
            <h1>${paperTitle}</h1>
    `;

    // Add Part 1
    htmlContent += `
        <div class="section">
            <h2>Part 1: Idea Formulation and Core Story</h2>
            <p>This section focuses on clarifying your research idea, identifying your core contribution, and mapping out your narrative.</p>
            
            <h3>1. Defining Your Core Idea</h3>
    `;

    // Add questions and answers for Part 1
    const part1Questions = document.querySelectorAll('#part1 .question');
    part1Questions.forEach(question => {
        const questionText = question.querySelector('.question-text').textContent;
        const textareaId = question.querySelector('textarea').id;
        const answer = document.getElementById(textareaId).value || '(No answer provided)';

        htmlContent += `
            <div class="question">
                <div class="question-text">${questionText}</div>
                <div class="answer">${answer}</div>
            </div>
        `;
    });

    // Add Part 2
    htmlContent += `
        <div class="section">
            <h2>Part 2: Section-by-Section Content Preparation</h2>
            <p>This section guides you through preparing the specific content for each part of your paper.</p>
    `;

    // Add questions and answers for Part 2
    const part2Questions = document.querySelectorAll('#part2 .question');
    part2Questions.forEach(question => {
        const questionText = question.querySelector('.question-text').textContent;
        const textareaId = question.querySelector('textarea').id;
        const answer = document.getElementById(textareaId).value || '(No answer provided)';

        htmlContent += `
            <div class="question">
                <div class="question-text">${questionText}</div>
                <div class="answer">${answer}</div>
            </div>
        `;
    });

    // Add Part 3
    htmlContent += `
        <div class="section">
            <h2>Part 3: General Best Practices & Strategy</h2>
            <p>This section helps you consider the overall approach and reviewer's perspective.</p>
    `;

    // Add questions and answers for Part 3
    const part3Questions = document.querySelectorAll('#part3 .question');
    part3Questions.forEach(question => {
        const questionText = question.querySelector('.question-text').textContent;
        const textareaId = question.querySelector('textarea').id;
        const answer = document.getElementById(textareaId).value || '(No answer provided)';

        htmlContent += `
            <div class="question">
                <div class="question-text">${questionText}</div>
                <div class="answer">${answer}</div>
            </div>
        `;
    });

    // Close the HTML document
    htmlContent += `
        </body>
        </html>
    `;

    // Write the HTML content to the new window
    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
}

// Export questionnaire as Markdown
function exportAsMarkdown() {
    // Get paper title
    const paperTitle = paperTitleInput.value || 'Research Paper Questionnaire';

    // Start building the Markdown content
    let markdownContent = `# ${paperTitle}\n\n`;

    // Add Part 1
    markdownContent += `## Part 1: Idea Formulation and Core Story\n\n`;
    markdownContent += `This section focuses on clarifying your research idea, identifying your core contribution, and mapping out your narrative.\n\n`;

    markdownContent += `### 1. Defining Your Core Idea\n\n`;

    // Add questions and answers for Part 1
    const part1Questions = document.querySelectorAll('#part1 .question');
    part1Questions.forEach(question => {
        const questionText = question.querySelector('.question-text').textContent.trim();
        const textareaId = question.querySelector('textarea').id;
        const answer = document.getElementById(textareaId).value || '(No answer provided)';

        markdownContent += `**${questionText}**\n\n${answer}\n\n`;
    });

    // Add Part 2
    markdownContent += `## Part 2: Section-by-Section Content Preparation\n\n`;
    markdownContent += `This section guides you through preparing the specific content for each part of your paper.\n\n`;

    // Add questions and answers for Part 2
    const part2Questions = document.querySelectorAll('#part2 .question');
    part2Questions.forEach(question => {
        const questionText = question.querySelector('.question-text').textContent.trim();
        const textareaId = question.querySelector('textarea').id;
        const answer = document.getElementById(textareaId).value || '(No answer provided)';

        markdownContent += `**${questionText}**\n\n${answer}\n\n`;
    });

    // Add Part 3
    markdownContent += `## Part 3: General Best Practices & Strategy\n\n`;
    markdownContent += `This section helps you consider the overall approach and reviewer's perspective.\n\n`;

    // Add questions and answers for Part 3
    const part3Questions = document.querySelectorAll('#part3 .question');
    part3Questions.forEach(question => {
        const questionText = question.querySelector('.question-text').textContent.trim();
        const textareaId = question.querySelector('textarea').id;
        const answer = document.getElementById(textareaId).value || '(No answer provided)';

        markdownContent += `**${questionText}**\n\n${answer}\n\n`;
    });

    // Create a Blob with the Markdown content
    const blob = new Blob([markdownContent], { type: 'text/markdown' });

    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'research_paper_questionnaire.md';

    // Trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// Export questionnaire as JSON
function exportAsJson() {
    // Create an object to store all answers
    const answers = {};

    // Save paper title
    answers['paperTitle'] = paperTitleInput.value || '';

    // Save all textarea values
    allTextareas.forEach(textarea => {
        answers[textarea.id] = textarea.value || '';
    });

    // Add metadata
    const metadata = {
        exportDate: new Date().toISOString(),
        version: '1.0',
        totalQuestions: totalQuestions,
        answeredQuestions: answeredQuestions
    };

    // Create the final JSON object
    const jsonData = {
        paperTitle: answers.paperTitle,
        answers: answers,
        metadata: metadata
    };

    // Convert to JSON string with nice formatting
    const jsonString = JSON.stringify(jsonData, null, 2);

    // Create a Blob with the JSON content
    const blob = new Blob([jsonString], { type: 'application/json' });

    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'research_paper_questionnaire.json';

    // Trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    showNotification('JSON file exported successfully!');
}

// Import from JSON file
function importFromJson(jsonString) {
    try {
        // Parse the JSON data
        const jsonData = JSON.parse(jsonString);

        // Validate the JSON structure
        if (!jsonData.answers && !jsonData.paperTitle) {
            throw new Error('Invalid JSON format: missing answers object or paper title');
        }

        // Get title for the new questionnaire
        const title = jsonData.paperTitle || 'Imported Questionnaire';

        // Create a new questionnaire with this title
        const newTitle = createNewQuestionnaire(title);

        // Get the questionnaires data
        const questionnaires = JSON.parse(localStorage.getItem('questionnaires'));

        // Update the answers
        questionnaires[newTitle] = {
            paperTitle: title,
            answers: jsonData.answers || {}
        };

        // Save to localStorage
        localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
        localStorage.setItem('currentQuestionnaire', newTitle);

        // Update UI
        updateQuestionnaireSelector();
        loadCurrentQuestionnaire();

        showNotification('Questionnaire data imported successfully!');
    } catch (error) {
        console.error('Error importing JSON:', error);
        showNotification('Error importing JSON file: ' + error.message, 5000);
    }
}
