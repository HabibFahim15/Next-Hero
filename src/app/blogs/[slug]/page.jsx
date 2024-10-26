
const page = ({params}) => {
  console.log(params.slug);
  const {title, description} = blogs.find((blog) => blog.slug == params.slug)
  return (
    <div className='h-screen'>
      <h5>{title}</h5>
      <h5>{description}</h5>
    </div>
  );
};
const blogs = [
  {
    slug: "mastering-javascript-2024",
    title: "Mastering JavaScript in 2024",
    description: "Explore the latest JavaScript features and top strategies for becoming a proficient developer this year.",
  },
  {
    slug: "react-vs-vue-comparison",
    title: "React vs Vue: Which Should You Choose?",
    description: "An in-depth comparison between React and Vue to help you select the right framework for your next project.",
  },
  {
    slug: "css-tricks-for-developers",
    title: "Top 10 CSS Tricks Every Developer Should Know",
    description: "Enhance your website's design and performance with these essential CSS tips and tricks.",
  },
  {
    slug: "mongodb-beginners-guide",
    title: "Understanding MongoDB for Beginners",
    description: "A beginner's guide to MongoDB, explaining key concepts and usage with JavaScript.",
  },
  {
    slug: "nodejs-server-setup",
    title: "Setting Up a Node.js Server",
    description: "Learn how to set up a basic Node.js server and deploy it efficiently for web applications.",
  },
  {
    slug: "frontend-tools-2024",
    title: "Top Frontend Tools to Use in 2024",
    description: "A roundup of the best tools to streamline your frontend development workflow this year.",
  },
  {
    slug: "tailwind-css-introduction",
    title: "Introduction to Tailwind CSS",
    description: "Get started with Tailwind CSS and learn how to create responsive, modern designs.",
  },
  {
    slug: "javascript-debugging-tips",
    title: "JavaScript Debugging Tips for Beginners",
    description: "Essential tips to debug JavaScript errors effectively and improve your code quality.",
  },
  {
    slug: "web-development-trends-2024",
    title: "Web Development Trends in 2024",
    description: "Discover the latest trends in web development and stay ahead in the industry.",
  },
  {
    slug: "building-crud-apps-react",
    title: "Building CRUD Apps with React",
    description: "A guide on how to build a full-featured CRUD app using React and modern JavaScript.",
  },
];
export default page;