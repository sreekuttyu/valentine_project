import './SuccessPage.css';

function SuccessPage() {
  return (
    <div className="success-page">
      <div className="final-message">
        <div className="animated-hearts">
          <div className="heart heart-1">💖</div>
          <div className="heart heart-2">💕</div>
          <div className="heart heart-3">💗</div>
          <div className="heart heart-4">💘</div>
          <div className="heart heart-5">💝</div>
        </div>
        
        <div className="couple-photo">
          <img src="/src/assets/couple_photo/sree_shinu.jpg.jpeg" alt="Sree and Shinu - Our beautiful memory" />
          <div className="photo-hearts">
            <span className="photo-heart">💕</span>
            <span className="photo-heart">💕</span>
            <span className="photo-heart">💕</span>
            <span className="photo-heart">💕</span>
          </div>
        </div>
        
        <div className="main-message">
          <h1>Happy Valentine</h1>
          <h2>My Love</h2>
        </div>
        
        <div className="sparkles">
          <div className="sparkle sparkle-1">✨</div>
          <div className="sparkle sparkle-2">⭐</div>
          <div className="sparkle sparkle-3">✨</div>
          <div className="sparkle sparkle-4">⭐</div>
          <div className="sparkle sparkle-5">✨</div>
          <div className="sparkle sparkle-6">⭐</div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
