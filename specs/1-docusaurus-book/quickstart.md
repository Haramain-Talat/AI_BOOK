# Quickstart Guide: Physical AI & Humanoid Robotics Book

## Prerequisites

- Node.js version 18.x or higher
- npm or yarn package manager
- Git for version control
- A GitHub account for deployment

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/[your-username]/physical-ai-humanoid-robotics-book.git
cd physical-ai-humanoid-robotics-book
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Local Development Server

```bash
npm start
```

This command starts a local development server and opens the documentation site in your default browser at `http://localhost:3000`. Most changes are reflected live without having to restart the server.

## Project Structure

The documentation is organized as follows:

```
docs/
├── intro.md
├── chapter-1/
│   ├── module-1.md
│   ├── module-2.md
│   └── ...
├── chapter-2/
│   ├── module-1.md
│   ├── module-2.md
│   └── ...
└── ...
```

- `docs/` contains all the textbook content in Markdown format
- Each chapter has its own subdirectory
- Each module within a chapter is a separate Markdown file

## Adding New Content

### To Add a New Module to an Existing Chapter:

1. Create a new Markdown file in the appropriate chapter directory
2. Add the module to the `sidebars.js` file to make it appear in the navigation
3. Follow the academic formatting standards (see below)

### To Add a New Chapter:

1. Create a new directory in `docs/` with a descriptive name
2. Add the chapter's modules as Markdown files in this directory
3. Update the `sidebars.js` file to include the new chapter in the navigation
4. Ensure the chapter follows the academic formatting standards

## Academic Formatting Standards

All content must adhere to the following standards:

### Markdown Format Requirements:
- Use proper heading hierarchy (H1 for chapter title, H2 for modules, H3 for topics)
- Include learning outcomes at the beginning of each chapter
- Describe diagrams in the text (don't rely solely on image alt text)
- Include practical examples in each module

### Content Structure:
```
---
id: module-name
title: Module Title
---

import Component from '@site/src/components/Component';

# Module Title

## Learning Outcomes

After studying this module, you should be able to:
- [Learning outcome 1]
- [Learning outcome 2]
- [Learning outcome 3]

## Introduction

[Introduction content]

## Topic 1

[Content for topic 1]

## Topic 2

[Content for topic 2]

## Practical Example

[Practical example related to the module content]

## Summary

[Summary of the module content]

## Exercises

1. [Exercise 1]
2. [Exercise 2]
```

## Building and Deployment

### To Build the Site for Production:

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static hosting service.

### To Deploy to GitHub Pages:

The site is configured to deploy automatically via GitHub Actions when changes are pushed to the main branch. Ensure your `docusaurus.config.js` is properly configured with your GitHub repository details.

## Customization

### Site Configuration

Edit `docusaurus.config.js` to customize site metadata, navigation, and other settings.

### Navigation Structure

Edit `sidebars.js` to modify the navigation structure and organization of the textbook content.

### Styling

Custom CSS can be added to `src/css/custom.css` to override default styling.