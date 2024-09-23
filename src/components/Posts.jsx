import React, { useState } from 'react';
import { BookmarkIcon, Heart, MessageCircle, MoreHorizontal, Send, Smile, ThumbsUp } from "lucide-react";

const posts = [
  {
    id: 1,
    author: "Jane Doe",
    avatar: "https://i.pinimg.com/564x/1d/79/b6/1d79b6d991c17718c3d4eb953d65acba.jpg",
    content: "Just finished a great book! 📚 Highly recommend 'The Midnight Library' by Matt Haig.",
    image: "https://i.pinimg.com/736x/4f/9d/7d/4f9d7dcbf49b0ec47ed09ed5ae60216d.jpg",
    likes: 42,
    comments: 8,
    time: "2 hours ago"
  },
  {
    id: 2,
    author: "John Smith",
    avatar: "/placeholder-user-2.jpg",
    content: "Excited to announce that I've just launched my new tech startup! 🚀",
    likes: 128,
    comments: 23,
    time: "5 hours ago"
  },
  {
    id: 3,
    author: "Emily Brown",
    avatar: "/placeholder-user-3.jpg",
    content: "Just got back from an amazing trip to Japan! 🇯🇵",
    image: "/placeholder.svg?height=300&width=400",
    likes: 89,
    comments: 15,
    time: "1 day ago"
  }
];

export default function Component() {
  const [newPost, setNewPost] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <span className="text-2xl font-bold text-blue-600">SocialPosts</span>
            <div className="flex items-center">
              <img src="/placeholder-user.jpg" alt="User" className="h-8 w-8 rounded-full" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="w-full">
            {/* Tabs */}
            <div className="flex border-b">
              <button className="py-2 px-4 text-blue-600 border-b-2 border-blue-600">Feed</button>
              <button className="py-2 px-4 text-gray-500">Create Post</button>
            </div>

            {/* Feed */}
            <div className="mt-4">
              {posts.map((post) => (
                <div key={post.id} className="mb-6 border rounded-md bg-white shadow-sm">
                  <div className="flex p-4 border-b">
                    <img src={post.avatar} alt={`@${post.author}`} className="h-10 w-10 rounded-full" />
                    <div className="ml-3">
                      <p className="text-sm font-semibold">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.time}</p>
                    </div>
                    <button className="ml-auto">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-sm">{post.content}</p>
                    {post.image && (
                      <img src={post.image} alt="Post content" className="mt-3  rounded-lg w-full" />
                    )}
                  </div>
                  <div className="flex justify-between p-4 border-t">
                    <button className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      {post.likes}
                    </button>
                    <button className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {post.comments}
                    </button>
                    <button className="flex items-center">
                      <Send className="h-4 w-4 mr-2" />
                      Share
                    </button>
                    <button className="flex items-center">
                      <BookmarkIcon className="h-4 w-4 mr-2" />
                      Save
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Create Post */}
            <div className="mt-6 border rounded-md bg-white shadow-sm">
              <div className="p-4">
                <h2 className="text-lg font-semibold">Create a New Post</h2>
              </div>
              <div className="p-4">
                <textarea
                  placeholder="What's on your mind?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="min-h-[100px] border rounded w-full p-2"
                />
                <div className="mt-4 flex items-center gap-2">
                  <button className="border rounded px-2 py-1">
                    <Smile className="h-4 w-4 mr-2" />
                    Add Emoji
                  </button>
                  <button className="border rounded px-2 py-1">Add Image</button>
                </div>
              </div>
              <div className="p-4">
                <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded">Post</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
