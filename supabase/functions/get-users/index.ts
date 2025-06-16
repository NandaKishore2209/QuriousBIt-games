/*
  # Get Users Function
  
  1. Purpose
    - Fetch and return a list of users
    - Demonstrate serverless function with mock data
  
  2. Features
    - CORS handling for web requests
    - Mock user data for demonstration
    - Proper error handling and response formatting
*/

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface User {
  id: string;
  name: string;
  email: string;
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

    // Mock user data - replace with actual database queries
    const users: User[] = [
      {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        createdAt: new Date().toISOString(),
      },
      {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        createdAt: new Date().toISOString(),
      },
      {
        id: "3",
        name: "Bob Johnson",
        email: "bob@example.com",
        createdAt: new Date().toISOString(),
      },
    ];

    return new Response(
      JSON.stringify(users),
      {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error("Error in get-users function:", error);
    
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