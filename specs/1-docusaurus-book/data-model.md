# Data Model: Physical AI & Humanoid Robotics Book

## Entity Definitions

### Book
- **name**: The title of the textbook ("Physical AI & Humanoid Robotics")
- **description**: A comprehensive academic textbook covering the principles and applications of physical AI and humanoid robotics
- **metadata**: 
  - authors: [list of authors]
  - edition: current edition number
  - publication_date: date of publication
  - isbn: ISBN if applicable
- **navigation_structure**: Hierarchical organization of chapters and modules
- **validation_rules**: Must contain at least one chapter; must have proper academic formatting

### Chapter
- **id**: Unique identifier for the chapter
- **title**: The title of the chapter
- **description**: Brief overview of the chapter content
- **learning_outcomes**: List of learning objectives for the chapter
- **modules**: Ordered list of modules that comprise the chapter
- **previous_chapter_id**: Reference to the previous chapter (for navigation)
- **next_chapter_id**: Reference to the next chapter (for navigation)
- **validation_rules**: Must have at least one module; must include learning outcomes; must follow academic formatting standards

### Module
- **id**: Unique identifier for the module
- **title**: The title of the module
- **content**: The main content of the module in Markdown format
- **topics**: List of topics covered in the module
- **diagrams**: List of diagrams referenced in the module
- **examples**: List of practical examples included in the module
- **exercises**: List of exercises or questions for the module (optional)
- **chapter_id**: Reference to the parent chapter
- **validation_rules**: Must have properly formatted Markdown content; diagrams must be properly described in text; must include at least one practical example

### Topic
- **id**: Unique identifier for the topic
- **title**: The title of the topic
- **content**: The content explaining the topic
- **module_id**: Reference to the parent module
- **validation_rules**: Content must be clear and academic in style; must be properly integrated into the module

## Relationships

- Book 1 --- * Chapter (A book contains many chapters)
- Chapter 1 --- * Module (A chapter contains many modules)
- Module 1 --- * Topic (A module contains many topics)

## State Transitions

### Content Creation Workflow
1. Draft: Content is being created but is not yet complete
2. Review: Content is complete and ready for review
3. Approved: Content has passed review and is ready for publication
4. Published: Content is live in the textbook

### Validation Rules Throughout States
- Draft: Content must be in proper Markdown format
- Review: Content must meet academic standards and formatting requirements
- Approved: Content must pass all validation checks
- Published: Content is immutable without going through the workflow again

## Content Standards Compliance

All entities must comply with the academic formatting rules specified in the feature requirements:
- Concept explanation must be clear and comprehensive
- Learning outcomes must be specific and measurable
- Diagrams must be accurately described in the text
- Practical examples must be relevant and illustrative
- Content must be structured and suitable for university-level education