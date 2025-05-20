// ----------------------------------------------------------------------

// Import blog cover images
import blog1Img from '../assets/media/news/blog1-img.jpg';
import blog2Img from '../assets/media/news/blog2-img.jpg';
import blog3Img from '../assets/media/news/blog3-img.jpg';
import blog4Img from '../assets/media/news/blog4-img.jpg';

const _blogPosts = [
  {
    id: '1',
    title: 'How to design a product that can grow itself 10x in year',
    cover: blog1Img,
    description: 'How to design a product that can grow itself 10x in year',
    categories: ['Design', 'Product'],
    author: {
      name: 'John Doe',
      avatarUrl: '/assets/images/avatars/avatar_1.jpg',
    },
    createdAt: new Date('2023-05-15'),
    readTime: 5,
  },
  {
    id: '2',
    title: 'The secret to building a high-performing development team',
    cover: blog2Img,
    description: 'The secret to building a high-performing development team',
    categories: ['Development'],
    author: {
      name: 'Jane Smith',
      avatarUrl: '/assets/images/avatars/avatar_2.jpg',
    },
    createdAt: new Date('2023-05-10'),
    readTime: 8,
  },
  {
    id: '3',
    title: '10 marketing strategies that will boost your sales',
    cover: blog3Img,
    description: '10 marketing strategies that will boost your sales',
    categories: ['Marketing'],
    author: {
      name: 'Mike Johnson',
      avatarUrl: '/assets/images/avatars/avatar_3.jpg',
    },
    createdAt: new Date('2023-05-05'),
    readTime: 6,
  },
  {
    id: '4',
    title: 'The future of product design in 2023',
    cover: blog4Img,
    description: 'The future of product design in 2023',
    categories: ['Design', 'Product'],
    author: {
      name: 'Sarah Williams',
      avatarUrl: '/assets/images/avatars/avatar_4.jpg',
    },
    createdAt: new Date('2023-04-28'),
    readTime: 7,
  },
  {
    id: '5',
    title: 'Essential tools for modern web development',
    cover: blog1Img,
    description: 'Essential tools for modern web development',
    categories: ['Development', 'Tools'],
    author: {
      name: 'Alex Johnson',
      avatarUrl: '/assets/images/avatars/avatar_5.jpg',
    },
    createdAt: new Date('2023-04-21'),
    readTime: 6,
  },
  {
    id: '6',
    title: 'UI/UX trends to watch in 2023',
    cover: blog2Img,
    description: 'UI/UX trends to watch in 2023',
    categories: ['Design', 'UI/UX'],
    author: {
      name: 'Emily Chen',
      avatarUrl: '/assets/images/avatars/avatar_6.jpg',
    },
    createdAt: new Date('2023-04-14'),
    readTime: 8,
  },
  {
    id: '7',
    title: 'Building scalable applications with React',
    cover: blog3Img,
    description: 'Building scalable applications with React',
    categories: ['Development', 'React'],
    author: {
      name: 'David Kim',
      avatarUrl: '/assets/images/avatars/avatar_7.jpg',
    },
    createdAt: new Date('2023-04-07'),
    readTime: 7,
  },
  {
    id: '8',
    title: 'The power of content marketing',
    cover: blog4Img,
    description: 'The power of content marketing',
    categories: ['Marketing', 'Content'],
    author: {
      name: 'Lisa Wong',
      avatarUrl: '/assets/images/avatars/avatar_8.jpg',
    },
    createdAt: new Date('2023-03-31'),
    readTime: 9,
  },
  {
    id: '9',
    title: 'Getting started with Next.js',
    cover: blog1Img,
    description: 'Getting started with Next.js',
    categories: ['Development', 'Next.js'],
    author: {
      name: 'Michael Brown',
      avatarUrl: '/assets/images/avatars/avatar_9.jpg',
    },
    createdAt: new Date('2023-03-24'),
    readTime: 6,
  },
  {
    id: '10',
    title: 'The psychology of color in web design',
    cover: blog2Img,
    description: 'The psychology of color in web design',
      categories: ['Design', 'UI/UX'],
    author: {
      name: 'Sophia Garcia',
      avatarUrl: '/assets/images/avatars/avatar_10.jpg',
    },
    createdAt: new Date('2023-03-17'),
    readTime: 7,
  },
  {
    id: '11',
    title: 'Advanced CSS techniques for 2023',
    cover: blog3Img,
    description: 'Advanced CSS techniques for 2023',
    categories: ['Development', 'CSS'],
    author: {
      name: 'James Wilson',
      avatarUrl: '/assets/images/avatars/avatar_11.jpg',
    },
    createdAt: new Date('2023-03-10'),
    readTime: 8,
  },
  {
    id: '12',
    title: 'Social media strategies for startups',
    cover: blog4Img,
        categories: ['Marketing', 'Social Media'],
    author: {
      name: 'Olivia Martinez',
      avatarUrl: '/assets/images/avatars/avatar_12.jpg',
    },
    createdAt: new Date('2023-03-03'),
    readTime: 7,
  },
];

export { _blogPosts };
