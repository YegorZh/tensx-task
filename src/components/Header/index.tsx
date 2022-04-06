import React from "react";
import ExpandArrow from '../reusable/ExpandArrow';
import './index.scss';

const Header: React.FC = () => {
    const navItems = [
        { name: 'Analytics', link: '#' },
        { name: 'Gradebooks', link: '#' },
        { name: 'Tests', link: '#' },
        { name: 'Students', link: '#' },
        { name: 'Teachers', link: '#' },
        { name: 'Archive', link: '#' },
    ]

    return (
        <header className="Header">
            <div className="Header__schools">
                <span className="Header__schools-name">school&nbsp;1</span>
                <ExpandArrow className="Header__schools-arrow" />
            </div>
            <nav className="Header__nav">
                {navItems.map(item =>
                    <div key={item.name} className="Header__nav-item-wrapper">
                        <a className="Header__nav-item" href="#">{item.name}</a>
                        <span className="Header__nav-item-hidden-bold">{item.name}</span>
                    </div>)
                }
            </nav>
            <div className="Header__profile">
                <div className="Header__profile-image">U</div>
                <ExpandArrow className="Header__profile-arrow" />
            </div>
        </header>
    )
}

export default Header;