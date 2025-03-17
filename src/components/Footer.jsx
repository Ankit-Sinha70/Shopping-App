export default function Footer() {
  return (
    <div className="bg-black text-white py-10 mt-30 pt-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        
        {/* Resources Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Find A Store</a></li>
            <li><a href="#">Become A Member</a></li>
            <li><a href="#">Send Us Feedback</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Help</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Get Help</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">About Fashions</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>
        <p className="text-8xl font-cursive" style={{fontFamily:"Italianno", fontWeight:"500"}}>Fashions</p><br/>
        <p className="text-gray-400">Privacy Policy | Terms of Use</p>
      </div>
    </div>
  );
  }
  