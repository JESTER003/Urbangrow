import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function BlogPost() {
  const { slug } = useParams();

  // Blog post data - In a real app, this would come from an API
  const blogPosts = {
    'small-space-gardening': {
      title: '10 Tips for Small Space Gardening',
      date: 'March 15, 2024',
      author: 'Sarah Johnson',
      content: [
        {
          type: 'paragraph',
          text: 'Making the most of a small gardening space requires careful planning and smart techniques. Here are our top 10 tips for maximizing your small garden:'
        },
        {
          type: 'list',
          items: [
            'Use vertical space with wall planters and trellises',
            'Choose compact and dwarf plant varieties',
            'Practice square foot gardening techniques',
            'Implement container gardening for flexibility',
            'Create multi-level planters',
            'Utilize hanging baskets for herbs and small vegetables',
            'Install a drip irrigation system to save space and water',
            'Choose multi-purpose plants (beautiful and edible)',
            'Rotate crops seasonally',
            'Maximize sunlight with reflective surfaces'
          ]
        },
        {
          type: 'paragraph',
          text: 'Remember, even the smallest space can become a productive garden with the right approach and planning.'
        }
      ]
    },
    'indoor-herbs': {
      title: 'Growing Herbs Year-Round Indoors',
      date: 'March 10, 2024',
      author: 'Michael Chen',
      content: [
        {
          type: 'paragraph',
          text: 'Growing herbs indoors is a fantastic way to have fresh flavors available year-round. Here\'s your complete guide to indoor herb gardening:'
        },
        {
          type: 'subheading',
          text: 'Best Herbs for Indoor Growing'
        },
        {
          type: 'list',
          items: [
            'Basil - Needs lots of light and consistent moisture',
            'Mint - Very adaptable and easy to grow',
            'Parsley - Tolerates lower light conditions',
            'Thyme - Perfect for sunny windowsills',
            'Chives - Great for beginners'
          ]
        },
        {
          type: 'paragraph',
          text: 'The key to success with indoor herbs is providing adequate light, proper drainage, and regular pruning to encourage bushier growth.'
        }
      ]
    },
    'sustainable-practices': {
      title: 'Sustainable Urban Gardening Practices',
      date: 'March 5, 2024',
      author: 'Emma Roberts',
      content: [
        {
          type: 'paragraph',
          text: 'Sustainable urban gardening is about creating a garden that works with nature, not against it. Here are some key practices to implement:'
        },
        {
          type: 'subheading',
          text: 'Core Sustainable Practices'
        },
        {
          type: 'list',
          items: [
            'Composting kitchen waste',
            'Rainwater harvesting',
            'Using organic pest control methods',
            'Choosing native plants',
            'Implementing companion planting',
            'Creating wildlife-friendly spaces'
          ]
        },
        {
          type: 'paragraph',
          text: 'By following these practices, you\'ll create a garden that\'s not only productive but also environmentally friendly.'
        }
      ]
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
          <Link to="/blog" className="text-emerald-600 hover:text-emerald-500">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          <div className="px-4 py-5 sm:p-6">
            <Link to="/blog" className="text-emerald-600 hover:text-emerald-500">
              ← Back to blog
            </Link>
            
            <h1 className="mt-4 text-3xl font-bold text-gray-900">
              {post.title}
            </h1>
            
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>

            <div className="mt-8 prose prose-emerald max-w-none">
              {post.content.map((section, index) => {
                switch (section.type) {
                  case 'paragraph':
                    return (
                      <p key={index} className="text-gray-600 mb-4">
                        {section.text}
                      </p>
                    );
                  case 'subheading':
                    return (
                      <h2 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                        {section.text}
                      </h2>
                    );
                  case 'list':
                    return (
                      <ul key={index} className="list-disc pl-5 mb-4 space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogPost; 