import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/blog`)
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  // Loader component
  const Loader = () => (
    <div className="flex justify-center items-center h-64 w-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
    </div>
  );

  // Skeleton Card
  const SkeletonCard = () => (
    <div className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );

  return (
    <section className="w-full overflow-hidden relative">
      {/* Hero */}
      <div className="relative">
        <div className="mx-auto max-w-7xl mt-[-30px] md:mt-0 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
          <div className="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-900">
              Our <span className="text-orange-600">Travel Blogs</span>
            </h1>
            <p className="mt-3 sm:mt-4 max-w-3xl text-slate-700">
              Explore stories, travel guides, and destination insights from our experts and travelers around the world.
            </p>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <>
            {blogs.length === 0 ? (
              <p className="text-center text-gray-500">No blogs available.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {blogs.map((blog) => (
                  <div
                    key={blog.$id}
                    className="group relative bg-white/50 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <img
                        src={blog.image || blog.images?.[0]}
                        alt={blog.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Blog Content */}
                    <div className="flex flex-col flex-grow p-6">
                      <h2 className="text-xl font-bold text-indigo-900 mb-2 line-clamp-2">
                        {blog.title}
                      </h2>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                        {blog.paragraphs?.slice(0, 150) || "Click below to read more..."}
                      </p>

                      <div className="mt-auto flex justify-end">
                        <Link
                          to={`/blog/${blog.$id}`}
                          className="inline-flex items-center gap-2 rounded-tr-lg rounded-bl-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-700"
                        >
                          View Blog <MdOutlineKeyboardDoubleArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
