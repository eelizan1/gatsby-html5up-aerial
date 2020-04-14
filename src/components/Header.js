import React from 'react';

import config from '../../config';
import './page.scss';

export default function Footer() {
  return (
    <header id="header">
      <p>Hello, my name is</p>
      <h1>Enrico Elizan</h1>
      {/* <p>
        And I build build things with {'{'}code{'}'}
      </p> */}
      <br />
      <p className="header-text">
        An Atlanta, GA based software engineer specializing in building (and
        occasionally designing) exceptional, high-quality websites and
        applications
      </p>
      <nav>
        <ul>
          {config.authorSocialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li>
                <a href={url} class={`icon ${icon}`}>
                  <span class="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
