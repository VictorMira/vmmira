import React from 'react';


const FooterLinks = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/vmmira'
  } , {
    name: 'Github',
    link: 'https://github.com/VictorMira'
  } , {
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UCQIYy8c8zZMxOlNPJ-VUhpA'
  }
]


const Footer = () => (
  <footer className='footer'>
    <h3>Where to find me</h3>
    <ul className='social'>
      { FooterLinks.map(link => (
        <li key={link.name}>
          <a target='_blank' rel='noopener noreferrer' 
          className={link.name.toLowerCase()} 
          href={link.link}>{link.name}</a>
        </li>
      ))}
    </ul>
  </footer>
)

export default Footer;