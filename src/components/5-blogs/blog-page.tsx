import mascotSm from "../../assets/mobile-development-hero-centered.webp";

export function BlogPage() {
  return (
    <div>
        <h2>Blog Page</h2>
        <div className="grid grid-cols-2">
            <img src={mascotSm} alt="" />
            <div className="bg-slate-400">Blog Page</div>
        </div>
    </div>
  )
}
