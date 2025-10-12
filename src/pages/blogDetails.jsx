import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/blog/${id}`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-transparent flex justify-center items-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-200"></div>
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-600 absolute top-0 left-0"></div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-transparent flex flex-col justify-center items-center">
        <div className="text-6xl mb-4">📭</div>
        <p className="text-xl text-slate-600 mb-6">Blog not found</p>
        <button
          onClick={() => navigate("/blogs")}
          className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Return to Blogs
        </button>
      </div>
    );
  }

  const mergedContent = [];
  const maxLen = Math.max(blog.paragraphs?.length || 0, blog.images?.length || 0);
  for (let i = 0; i < maxLen; i++) {
    if (blog.paragraphs && blog.paragraphs[i]) {
      mergedContent.push({ type: "paragraph", value: blog.paragraphs[i] });
    }
    if (blog.images && blog.images[i]) {
      mergedContent.push({ type: "image", value: blog.images[i] });
    }
  }

  return (
    <div className="min-h-screen bg-transparent py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        

        {/* Hero Section */}
        <div className="relative mb-2 md:mb-16 overflow-hidden rounded-3xl bg-transparent p-1">
          <div className="bg-transparent p-8 sm:p-6 text-left">
            
            
            <h1 className="text-start text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-10">
              {blog.title}
            </h1>
        
          </div>
        </div>

        {/* Blog Content */}
        <div className="space-y-10">
          {mergedContent.map((block, idx) => {
            if (block.type === "paragraph") {
              return (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <p className="text-slate-700 whitespace-pre-wrap leading-relaxed text-base sm:text-lg ">
                    {block.value}
                  </p>
                </div>
              );
            }
            if (block.type === "image") {
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img
                    src={block.value}
                    alt={`blog-image-${idx}`}
                    className={`w-full h-auto transform group-hover:scale-105 transition-all duration-700 ${
                      imageLoaded[idx] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(prev => ({ ...prev, [idx]: true }))}
                  />
                  {!imageLoaded[idx] && (
                    <div className="absolute inset-0 bg-slate-200 animate-pulse rounded-2xl"></div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Back Button */}
        <div className="flex justify-center w-full mb-8">
          <button
            onClick={() => navigate("/blog")}
            className="mt-16 group inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-slate-700 font-medium hover:text-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200 hover:border-orange-300"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Blogs</span>
          </button>
        </div>
      </div>
    </div>
  );
}