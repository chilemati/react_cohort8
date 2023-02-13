import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { likes } from '../global/atom';
import './nav.scss';
const Nav = () => {
  let love = useRecoilValue(likes);
  return (
      <div>
          <nav className="nav">
              <ol>
                  <li><Link to={'/'}>logo</Link></li>
                  <li> <Link to={'/blog'} >blog</Link></li>
                  <li> <Link to={'/about'} >about </Link></li>
                  <li> <Link to={'/'} >Nigeria Likes [{love}] </Link></li>
                  <li> <Link to={'/create'} >Create-Blog</Link></li>
                  <li> <Link > &#9776; </Link></li>
              </ol>
          </nav>
    </div>
  )
}

export default Nav