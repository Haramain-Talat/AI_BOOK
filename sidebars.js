// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  textbookSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Chapter 1: Introduction to Physical AI',
      items: [
        'chapter-1/module-1',
        'chapter-1/module-2',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 2: Fundamentals of Humanoid Robotics',
      items: [
        'chapter-2/module-1',
        'chapter-2/module-2',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 3: Perception Systems for Physical AI',
      items: [
        'chapter-3/module-1',
        'chapter-3/module-2',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 4: Control Systems for Humanoid Robots',
      items: [
        'chapter-4/module-1',
        'chapter-4/module-2',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 5: Learning and Adaptation in Physical AI',
      items: [
        'chapter-5/module-1',
        'chapter-5/module-2',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 6: Applications and Ethics of Humanoid Robotics',
      items: [
        'chapter-6/module-1',
        'chapter-6/module-2',
      ],
    },
  ],
};

module.exports = sidebars;