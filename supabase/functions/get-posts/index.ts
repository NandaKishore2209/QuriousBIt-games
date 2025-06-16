/*
  # Get Posts Function
  
  1. Purpose
    - Fetch and return a list of blog posts
    - Demonstrate serverless function with mock data
  
  2. Features
    - CORS handling for web requests
    - Mock post data for demonstration
    - Proper error handling and response formatting
*/

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    // Mock post data - replace with actual database queries
    const posts: Post[] = [
      {
        id: "1",
        title: "Getting Started with Serverless Functions",
        content: "Serverless functions are a great way to build scalable APIs without managing infrastructure. They automatically scale based on demand and you only pay for what you use.",
        author: "John Doe",
        createdAt: new Date().toISOString(),
      },
      {
        id: "2",
        title: "React + Vite: The Perfect Combination",
        content: "Vite provides lightning-fast development experience with React. The hot module replacement is incredibly fast and the build times are minimal.",
        author: "Jane Smith",
        createdAt: new Date().toISOString(),
      },
      {
        id: "3",
        title: "Modern Web Development Best Practices",
        content: "Modern web development involves using the right tools and following best practices. This includes proper error handling, responsive design, and performance optimization.",
        author: "Bob Johnson",
        createdAt: new Date().toISOString(),
      },
    ];

    return new Response(
      JSON.stringify(posts),
      {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error("Error in get-posts function:", error);
    
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
});