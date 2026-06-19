import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, User, Calendar, Clock, ArrowLeft, Search, Tag, Eye } from 'lucide-react';
import { BlogArticle } from '../types';
import { BLOG_POSTS } from '../data/mineralData';

export default function BlogCenter() {
  const [selectedPost, setSelectedPost] = useState<BlogArticle | null>(null);
  const [activeTagFilter, setActiveTagFilter] = useState<string | null>(null);
  const [blogSearch, setBlogSearch] = useState('');

  // Collect unique tags to allow dynamic tags sorting!
  const allTags = Array.from(new Set(BLOG_POSTS.flatMap(p => p.tags)));

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter((post) => {
    // Search query match
    const matchesSearch = 
      post.title.toLowerCase().includes(blogSearch.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(blogSearch.toLowerCase()) ||
      post.content.toLowerCase().includes(blogSearch.toLowerCase());
    
    // Tag match
    const matchesTag = activeTagFilter ? post.tags.includes(activeTagFilter) : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="w-full flex flex-col gap-8 text-gray-300" id="blog-desk">
      
      <AnimatePresence mode="wait">
        {!selectedPost ? (
          /* List View */
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="flex flex-col gap-8"
          >
            {/* Title Block */}
            <div className="luxury-glass border border-[#D4AF37]/18 p-8 rounded-3xl relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.03)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/3 blur-[100px] pointer-events-none"></div>
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-2 font-bold">PUBLISHED INTELLIGENCE</span>
              <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
                African Mineral Trade <span className="gold-text-gradient">Journal & News</span>
              </h2>
              <div className="gold-accent-line my-4 max-w-xs" />
              <p className="text-xs md:text-sm text-white/70 mt-2 max-w-2xl leading-relaxed font-light">
                Expert insights and industry publications targeting African precious metals and gemstone sourcing. We cover compliance benchmarks, mineral verification services, mining laws, and local procurement frameworks.
              </p>
            </div>

            {/* Tags & Search Row */}
            <div className="luxury-glass p-4 border border-[#D4AF37]/12 rounded-2xl flex flex-col md:flex-row gap-4 justify-between items-center relative overflow-hidden">
              
              {/* Tag filters */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <button
                  onClick={() => setActiveTagFilter(null)}
                  className={`px-3 py-1.5 rounded text-[10px] uppercase font-semibold tracking-wider transition-all cursor-pointer ${
                    activeTagFilter === null
                      ? 'bg-[#D4AF37] text-black font-extrabold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'bg-black/40 text-white/50 border border-white/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/35'
                  }`}
                >
                  All Articles
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTagFilter(tag)}
                    className={`px-3 py-1.5 rounded text-[10px] uppercase font-semibold tracking-wider transition-all cursor-pointer ${
                      activeTagFilter === tag
                        ? 'bg-[#D4AF37] text-black font-extrabold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                        : 'bg-black/40 text-white/50 border border-white/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/35'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-3 h-4 w-4 text-[#D4AF37] gold-glow-icon" />
                <input
                  type="text"
                  value={blogSearch}
                  onChange={(e) => setBlogSearch(e.target.value)}
                  placeholder="Query publications..."
                  className="w-full bg-black/40 border border-[#D4AF37]/15 focus:border-[#D4AF37] text-white rounded-lg p-2.5 pl-9 text-xs outline-none"
                />
              </div>
            </div>

            {/* Primary Grid list */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12 luxury-glass border border-[#D4AF37]/10 rounded-2xl">
                <p className="text-sm text-white/50 font-light">No blog publications found corresponding to your filter parameters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => { setSelectedPost(post); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="luxury-glass border border-[#D4AF37]/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#D4AF37]/32 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.12)] hover:-translate-y-1.5 cursor-pointer group h-full"
                  >
                    <div>
                      {/* Thumbnail photo */}
                      <div className="relative h-44 w-full overflow-hidden bg-neutral-900 border-b border-[#D4AF37]/10">
                        <img
                          src={post.image}
                          alt={post.title}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-[#D4AF37]/15 border border-[#D4AF37]/35 rounded text-[9px] font-mono text-[#D4AF37] uppercase font-bold backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>

                      {/* Info body */}
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-[10px] text-white/40 font-mono mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-[#D4AF37] gold-glow-icon" />
                            <span>{post.date}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3 text-[#D4AF37] gold-glow-icon" />
                            <span>{post.readTime}</span>
                          </span>
                        </div>

                        <h3 className="font-serif text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-xs text-white/50 mt-2.5 leading-normal line-clamp-3 font-light">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 flex justify-between items-center text-xs font-mono">
                      {/* Author */}
                      <span className="text-white/45 text-[10px] truncate max-w-[150px] font-light">{post.author}</span>
                      <span className="text-[#D4AF37] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Read article</span>
                        <Eye className="h-3 w-3 text-[#D4AF37] gold-glow-icon" />
                      </span>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          /* Full Article Reader Screen */
          <motion.div
            key="reader"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="luxury-glass border border-[#D4AF37]/18 rounded-3xl p-6 md:p-10 max-w-4xl mx-auto flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            id="blog-article-reader"
          >
            
            {/* Back Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-[#D4AF37] hover:text-white transition-colors self-start cursor-pointer focus:outline-none"
              id="back-to-journal-btn"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Journal</span>
            </button>

            {/* Header Credentials */}
            <div className="flex flex-col gap-3 pb-6 border-b border-[#D4AF37]/15">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest font-extrabold">{selectedPost.category}</span>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {selectedPost.title}
              </h1>

              {/* Author, Time, Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-white/40 font-mono mt-3">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4 text-[#D4AF37] gold-glow-icon" />
                  <span className="text-white/70 font-semibold">{selectedPost.author}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-[#D4AF37] gold-glow-icon" />
                  <span>{selectedPost.date}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-[#D4AF37] gold-glow-icon" />
                  <span>{selectedPost.readTime}</span>
                </span>
              </div>
            </div>

            {/* Banner Main Image */}
            <div className="h-80 w-full overflow-hidden rounded-2xl bg-neutral-900 border border-[#D4AF37]/10">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Main Rich text body */}
            <article className="prose prose-invert max-w-none text-xs text-white/70 leading-relaxed font-light space-y-6">
              {/* Parse double line-breaks to formatted paragraphs */}
              {selectedPost.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('###')) {
                  return (
                    <h3 key={idx} className="font-serif text-lg font-bold text-[#D4AF37] mt-6 mb-2">
                      {paragraph.replace('###', '').trim()}
                    </h3>
                  );
                }
                if (paragraph.startsWith('-')) {
                  return (
                    <ul key={idx} className="list-disc pl-5 space-y-2 my-3">
                      {paragraph.split('\n').map((li, liIdx) => (
                        <li key={liIdx} className="list-inside text-white/60">
                          {li.replace('-', '').trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="font-light text-white/70 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                );
              })}
            </article>

            {/* Document tags */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2 items-center">
              <Tag className="h-4 w-4 text-[#D4AF37] mr-1" />
              {selectedPost.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-black/40 border border-[#D4AF37]/10 rounded text-[9px] font-mono text-white/40">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Disclaimer block */}
            <div className="bg-black/50 p-4 border border-[#D4AF37]/15 rounded-xl text-[11px] text-white/50 mt-2 leading-relaxed font-light">
              <span className="font-bold text-[#D4AF37] block mb-1">JOURNAL DISPATCH:</span>
              <p>Articles published in Mineral Dealers Africa are based on authorized geological directives, parliamentary acts in Entebbe (Uganda), and physical on-ground trade auditing. No individual segment represents a securities trading proposal without appropriate municipal assent.</p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
