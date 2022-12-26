import React from 'react';
import './Hello.css';

const Hello = () => (
  <section className="hello">
    <div className="headline">
      <h1>Praises Tula</h1>
      <p className="norm">Hi all. I am</p>
      <p className="sub-title">&gt; Full-Stack Developer</p>
    </div>
    <div className="green-bg" />
    <div className="purple-bg" />
    <div>
      <p className="comment">
        <span className="mono">&frasl; &frasl; </span>
        find my profile on Github:
      </p>
      <p className="code">
        <span className="purple">const </span>
        <span className="green">githubLink</span>
        {' = '}
        <span className="orange">“https://github.com/example/url”</span>
      </p>
    </div>
  </section>
);

export default Hello;
