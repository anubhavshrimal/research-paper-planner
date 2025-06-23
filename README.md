# Research Paper Questionnaire Web App

A comprehensive web application designed to help researchers structure and plan their research papers through a guided questionnaire approach. This questionnaire is based on the excellent blog post ["Writing a good scientific paper"](https://medium.com/@black_51980/writing-a-good-scientific-paper-c0f8af480c91) by Michael Black, which shares valuable insights and strategies for writing effective scientific papers.

## About

This questionnaire tool helps researchers organize their thoughts and structure their papers following best practices from experienced researchers. The questions are designed to guide you through the process of formulating your research idea, preparing content for each section of your paper, and considering general best practices for scientific writing.

## Features

- **Multiple Questionnaires Management**:
  - Create multiple research paper questionnaires
  - Switch between questionnaires using a dropdown selector
  - Rename questionnaires by changing the paper title
  - Delete questionnaires that are no longer needed
  - Import/export functionality for backup and sharing

- **Three-Part Questionnaire** (based on Michael Black's writing guidance):
  - Part 1: Idea Formulation and Core Story
  - Part 2: Section-by-Section Content Preparation
  - Part 3: General Best Practices & Strategy

- **Interactive Features**:
  - Multiple questionnaires management (create, switch, rename, delete)
  - Progress tracking
  - Auto-save functionality using localStorage
  - Export options (PDF, Markdown, JSON)
  - Import functionality from JSON files
  - Guidance system with contextual help

## Local Development

To run this application locally:

1. Clone the repository to your local machine
2. Open the project folder
3. Open `index.html` in your web browser

No build process or server is required as this is a client-side only application.

## Data Storage

- All user data is stored in the browser's localStorage
- Support for multiple questionnaires, each with its own title and answers
- Export functionality allows saving data externally as PDF, Markdown, or JSON
- Import functionality allows restoring data from previously exported JSON files
- Questionnaires can be renamed, switched between, and deleted as needed

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

The questionnaire content is based on the blog post ["Writing a good scientific paper"](https://medium.com/@black_51980/writing-a-good-scientific-paper-c0f8af480c91) by Michael Black, Director at the Max Planck Institute for Intelligent Systems. The blog post shares valuable insights and strategies that Michael Black has developed over years of writing scientific papers and mentoring students.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
