import React from 'react'
import { useApi } from '../hooks/useApi'
import { ApiService } from '../services/api'

interface User {
  id: string
  name: string
  email: string
}

interface Post {
  id: string
  title: string
  content: string
  author: string
}

export function DataDisplay() {
  const {
    data: users,
    loading: usersLoading,
    error: usersError,
    refetch: refetchUsers
  } = useApi<User[]>(() => ApiService.fetchUsers())

  const {
    data: posts,
    loading: postsLoading,
    error: postsError,
    refetch: refetchPosts
  } = useApi<Post[]>(() => ApiService.fetchPosts())

  if (usersLoading || postsLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (usersError || postsError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="text-red-800 font-semibold">Error Loading Data</h3>
        <p className="text-red-600 mt-1">
          {usersError || postsError}
        </p>
        <button
          onClick={() => {
            refetchUsers()
            refetchPosts()
          }}
          className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Users</h2>
          <button
            onClick={refetchUsers}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Refresh Users
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users?.map((user) => (
            <div key={user.id} className="bg-white p-4 rounded-lg shadow border">
              <h3 className="font-semibold text-gray-900">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Posts</h2>
          <button
            onClick={refetchPosts}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Refresh Posts
          </button>
        </div>
        <div className="space-y-4">
          {posts?.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow border">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-2">{post.content}</p>
              <p className="text-sm text-gray-500">By: {post.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}