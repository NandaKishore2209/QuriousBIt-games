import { supabase } from '../lib/supabase'

// Example API service using Supabase Edge Functions
export class ApiService {
  private static baseUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1`
  
  private static getHeaders() {
    return {
      'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
    }
  }

  // Generic method to call edge functions
  static async callFunction(functionName: string, data?: any) {
    try {
      const response = await fetch(`${this.baseUrl}/${functionName}`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: data ? JSON.stringify(data) : undefined,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error(`Error calling ${functionName}:`, error)
      throw error
    }
  }

  // Example methods for common operations
  static async fetchUsers() {
    return this.callFunction('get-users')
  }

  static async createUser(userData: any) {
    return this.callFunction('create-user', userData)
  }

  static async fetchPosts() {
    return this.callFunction('get-posts')
  }

  static async createPost(postData: any) {
    return this.callFunction('create-post', postData)
  }
}