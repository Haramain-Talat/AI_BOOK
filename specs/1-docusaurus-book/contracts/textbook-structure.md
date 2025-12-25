# Textbook Structure API Contract

## Purpose
This contract defines the expected structure and format for the Physical AI & Humanoid Robotics textbook content.

## Textbook Entity Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Unique identifier for the textbook"
    },
    "title": {
      "type": "string",
      "description": "Full title of the textbook"
    },
    "description": {
      "type": "string",
      "description": "Brief description of the textbook content"
    },
    "chapters": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Chapter"
      }
    },
    "metadata": {
      "$ref": "#/definitions/Metadata"
    }
  },
  "required": ["id", "title", "chapters"],
  "definitions": {
    "Chapter": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the chapter"
        },
        "title": {
          "type": "string",
          "description": "Title of the chapter"
        },
        "description": {
          "type": "string",
          "description": "Brief overview of the chapter content"
        },
        "learning_outcomes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "List of learning objectives for the chapter"
        },
        "modules": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Module"
          }
        }
      },
      "required": ["id", "title", "modules"]
    },
    "Module": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the module"
        },
        "title": {
          "type": "string",
          "description": "Title of the module"
        },
        "content": {
          "type": "string",
          "description": "Main content of the module in Markdown format"
        },
        "topics": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "List of topics covered in the module"
        },
        "diagrams": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "List of diagrams referenced in the module"
        },
        "examples": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "List of practical examples included in the module"
        }
      },
      "required": ["id", "title", "content"]
    },
    "Metadata": {
      "type": "object",
      "properties": {
        "authors": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "edition": {
          "type": "string"
        },
        "publication_date": {
          "type": "string",
          "format": "date"
        },
        "isbn": {
          "type": "string"
        }
      }
    }
  }
}
```

## Academic Formatting Requirements

All content must adhere to the following academic standards:
1. Each chapter must include learning outcomes
2. Diagrams must be accurately described in the text
3. Each module must include practical examples
4. Content must be structured and suitable for university-level education
5. Proper citation format must be used where applicable