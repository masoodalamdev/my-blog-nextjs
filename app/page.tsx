import BlogCard from "@/app/(components)/BlogCard"
export default function Home() {
  return (
    <>
      
      <main className="content">
        <h1>Welcome to My Blog</h1>
        <p>This is the homepage of my responsive blog website.</p>
        <div className="blog-container">
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>
    </main>

   

   
    </>
    
  );
}
