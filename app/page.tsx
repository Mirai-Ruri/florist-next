const bouquets = [
  {
    name: "Sunday in the Garden",
    note: "Ranunculus, sweet pea & garden roses",
    price: "$78",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85",
    tone: "sage",
  },
  {
    name: "The Softest Thing",
    note: "Blush tulips & butterfly ranunculus",
    price: "$68",
    image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=900&q=85",
    tone: "rose",
  },
  {
    name: "A Little Wild",
    note: "Seasonal stems, gathered just for you",
    price: "$85",
    image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=85",
    tone: "cream",
  },
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="announcement">A little beauty, delivered. Free delivery on orders over $100 <span>✳</span></div>
      <header className="nav wrap">
        <a className="wordmark" href="#top" aria-label="Fleur home">fleur<span>✳</span></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#flowers">Flowers</a><a href="#our-way">Our way</a><a href="#visit">Visit us</a>
        </nav>
        <a className="bag-link" href="#flowers">Shop bouquets <span className="bag-icon">↗</span></a>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="tiny-flower">✳</span> YOUR NEIGHBORHOOD FLOWER SHOP</p>
          <h1>Flowers for<br />the <em>feeling.</em></h1>
          <p className="hero-description">Thoughtfully gathered, a little undone, and made to make someone’s day.</p>
          <a className="button button-dark" href="#flowers">Find your flowers <Arrow /></a>
          <div className="hero-footnote"><span className="line" /> Made by hand in Brooklyn, NY</div>
        </div>
        <div className="hero-art" aria-label="A loose bunch of fresh flowers in a glass vase">
          <div className="hero-image" />
          <div className="photo-note"><span>FRESH FROM THE FLOWER MARKET</span><strong>Picked with feeling, always.</strong></div>
          <div className="round-stamp"><span>GROWN WITH</span><b>♡</b><span>A LITTLE WILD</span></div>
        </div>
        <div className="vertical-note">PETAL BY PETAL — MADE TO MEAN SOMETHING</div>
      </section>

      <section className="promise" id="our-way">
        <div className="wrap promise-inner"><span className="promise-mark">✳</span><p>No two bunches are ever quite the same.<br /><em>That’s kind of the point.</em></p><span className="promise-caption">SEASONAL STEMS · THOUGHTFUL HANDS · ALWAYS FRESH</span></div>
      </section>

      <section className="collection wrap" id="flowers">
        <div className="section-heading"><div><p className="eyebrow">THE GOOD STUFF</p><h2>Flowers, <em>for now.</em></h2></div><a className="text-link" href="mailto:hello@fleurflowers.com">See all bouquets <Arrow /></a></div>
        <div className="bouquet-grid">
          {bouquets.map((bouquet, index) => (
            <article className="bouquet-card" key={bouquet.name}>
              <a href="mailto:hello@fleurflowers.com" className={`bouquet-image ${bouquet.tone}`} aria-label={`Order ${bouquet.name}`}>
                <img src={bouquet.image} alt={`A seasonal flower arrangement: ${bouquet.name}`} />
                {index === 0 && <span className="favorite-tag">A FLEUR FAVORITE</span>}
                <span className="quick-add">+</span>
              </a>
              <div className="bouquet-details"><div><h3>{bouquet.name}</h3><p>{bouquet.note}</p></div><span>{bouquet.price}</span></div>
            </article>
          ))}
        </div>
        <div className="delivery-note"><span>✳</span> Brought to your door with care <span className="delivery-line" /> <a href="#visit">Learn about local delivery <Arrow /></a></div>
      </section>

      <section className="visit" id="visit"><div className="wrap visit-inner"><p className="eyebrow">COME SAY HELLO</p><h2>There’s always<br />something <em>in bloom.</em></h2><p>Drop by for a bunch, stay for a little while.</p><a className="button button-light" href="https://maps.google.com/?q=Brooklyn+NY">Find our little shop <Arrow /></a><span className="visit-address">148 Wythe Avenue · Brooklyn, NY</span></div></section>
      <footer className="footer wrap"><a className="wordmark" href="#top">fleur<span>✳</span></a><span>Made with a little love, and lots of flowers.</span><a href="mailto:hello@fleurflowers.com">Say hello <Arrow /></a></footer>
    </main>
  );
}
