import './MenuBar.css';

const menuItems = [ // array of objects defining each menu link
    {label: 'Home', href: '#home'},
    {label: 'Experience', href: '#experience'}, // each href is a link that scrolls to that section
    {label: 'Projects', href: '#projects'},
    {label: 'Skills/Certifications', href: '#skills'},
    {label: 'About', href: '#about'}
];

// nav element marks up block of nav links
// looping through each menuItem and generating a nav link
export default function MenuBar() {
    return (
        <header className="menuBar">
            <nav className="menuBar-nav">
                {menuItems.map((item) => (
                    <a key={item.label} href={item.href} className="menuBar-item">
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    );
}