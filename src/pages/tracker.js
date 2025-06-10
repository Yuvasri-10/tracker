import React, { useEffect, useState } from 'react';
import styles from '../styles/index.css';

const Tracker = () => {
    const [bgColor, setBgColor] = useState('');

    useEffect(() => {
        const trackerSection = document.getElementById('tracker-section');

        if (trackerSection) {
            console.log('Tracker section height:', trackerSection.offsetHeight);
            if (trackerSection.offsetHeight > 500) {
                setBgColor('#f0f8ff'); // Set background color using state
            }
        }

        return () => {
            setBgColor(''); // Reset background color
        };
    }, []);

    return (
        <div>
            <header>
                <h1>AceIt</h1>
                <p>Your Monthly Productivity Tracker</p>
                <nav>
                    <a href="index.html">Home</a>
                    <a href="services.html">Planner</a>
                    <a href="tracker.html">Tracker</a>
                    <a href="about.html">About Us</a>
                    <a href="contact.html">Contact Us</a>
                </nav>
            </header>

            <section id="tracker-section" className="tracker-section" style={{ backgroundColor: bgColor }}>
                <h2>Your Productivity Tracker</h2>
                <p>
                    Stay on top of your goals and track your progress with AceIt. 
                    See how you're doing at a glance and celebrate your achievements!
                </p>

                <div className="tracker-container">
                    <div className="tracker-card">
                        <h3>Task Completion</h3>
                        <p>Overall progress on your daily tasks.</p>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '75%' }}>75%</div>
                        </div>
                    </div>

                    <div className="tracker-card">
                        <h3>Study Hours</h3>
                        <p>Hours dedicated to learning and studying this month.</p>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '60%' }}>60%</div>
                        </div>
                    </div>

                    <div className="tracker-card">
                        <h3>Project Milestones</h3>
                        <p>Progress on your current key projects.</p>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '90%' }}>90%</div>
                        </div>
                    </div>

                    <div className="tracker-card">
                        <h3>Habit Streak</h3>
                        <p>Days you've maintained a positive habit.</p>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '85%' }}>85%</div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <p>&copy; 2025 AceIt &nbsp;|&nbsp; Stay productive!</p>
            </footer>
        </div>
    );
};


function Tracker({ Component, pageProps }) {
    return (
        <div style={{ padding: '20px' }}>
            <h1>AceIt: Monthly Productivity Tracker</h1>
            <MonthlyStats />
            <TaskTracker />
            <Component {...pageProps} /> 
        </div>
    );
}


export default Tracker;
