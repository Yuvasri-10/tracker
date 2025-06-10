import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div>
      <header style={{ textAlign: 'center', padding: '10px 0' }}>
        <h1 style={{ margin: 0, fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', color: '#ff6f87' }}>
          AceIt
        </h1>
        <p style={{ margin: '5px 0 15px', fontSize: '1.2em', color: '#ff96ad', fontWeight: 600 }}>
          Your Monthly Productivity Tracker
        </p>
        <nav style={{ textAlign: 'center', marginBottom: '10px' }}>
          <Link href="/" style={{ margin: '0 10px', color: '#7a4450', fontWeight: 600, textDecoration: 'none' }}>Home</Link>
          <Link href="/services" style={{ margin: '0 10px', color: '#7a4450', fontWeight: 600, textDecoration: 'none' }}>Planner</Link>
          <Link href="/tracker" style={{ margin: '0 10px', color: '#7a4450', fontWeight: 600, textDecoration: 'none' }}>Tracker</Link>
          <Link href="/about" style={{ margin: '0 10px', color: '#7a4450', fontWeight: 600, textDecoration: 'none' }}>About Us</Link>
          <Link href="/contact" style={{ margin: '0 10px', color: '#7a4450', fontWeight: 600, textDecoration: 'none' }}>Contact Us</Link>
        </nav>
      </header>

      <section style={{
        maxWidth: '800px',
        margin: '10px auto',
        padding: '30px',
        background: '#fff8f9',
        border: '1px solid #ffd1dc',
        borderRadius: '15px',
        boxShadow: '0 8px 20px rgba(255, 182, 195, 0.25)',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2em',
          color: '#ff96ad',
          marginBottom: '15px',
          fontFamily: 'Georgia, Times New Roman, Times, serif'
        }}>
          Contact Us
        </h2>
        <p style={{
          fontSize: '1.2em',
          color: '#7a4450',
          fontWeight: 500,
          lineHeight: 1.6
        }}>
          Have questions, feedback, or suggestions? We’d love to hear from you!<br /><br />
          📧 Email: <a href="mailto:hello@aceittracker.com" style={{
            color: '#ff6f87',
            textDecoration: 'none',
            fontWeight: 600
          }}>hello@aceittracker.com</a><br /><br />
          🏢 Address:<br />
          AceIt Team<br />
          23 Focus Street,<br />
          Coimbatore, 641014
        </p>
      </section>

      <footer style={{
        textAlign: 'center',
        marginTop: '20px',
        padding: '15px',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        color: '#888'
      }}>
        &copy; 2025 AceIt &nbsp;|&nbsp; Stay productive!
      </footer>
    </div>
  );
};

export default Contact;
