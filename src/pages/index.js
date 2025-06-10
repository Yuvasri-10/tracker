import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>AceIt - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header style={headerStyle}>
        <h1 style={headerTitle}>AceIt</h1>
        <p style={headerSubtitle}>Your Monthly Productivity Tracker</p>
        <nav style={navStyle}>
          <Link href="/" style={navLink}>Home</Link>
          <Link href="/tracker" style={navLink}>Tracker</Link>
          <Link href="/about" style={navLink}>About Us</Link>
          <Link href="/contact" style={navLink}>Contact Us</Link>
        </nav>
      </header>

      <section style={welcomeSection}>
        <h2 style={sectionTitle}>Welcome to AceIt</h2>
        <p style={sectionText}>
          
          Organize your tasks by category, check progress daily, and celebrate consistency. <br />
          Ready to get started?
        </p>
        <Link href="/services" style={startBtn}>Go to Planner</Link>
      </section>

      <footer style={footerStyle}>
        <p>&copy; 2025 AceIt &nbsp;|&nbsp; Stay productive!</p>
      </footer>
    </>
  );
}

const headerStyle = {
  textAlign: 'center',
  padding: '10px 0',
};

const headerTitle = {
  margin: 0,
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  color: '#ff6f87',
};

const headerSubtitle = {
  margin: '5px 0 15px',
  fontSize: '1.2em',
  color: '#ff96ad',
  fontWeight: 600,
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
};

const navStyle = {
  marginTop: '30px',
  textAlign: 'center',
  marginBottom: '10px',
};

const navLink = {
  margin: '0 10px',
  color: '#7a4450',
  fontWeight: 600,
  textDecoration: 'none',
};

const welcomeSection = {
  maxWidth: '800px',
  margin: '10px auto',
  padding: '30px',
  background: '#fff8f9',
  border: '1px solid #ffd1dc',
  borderRadius: '15px',
  boxShadow: '0 8px 20px rgba(255, 182, 195, 0.25)',
  textAlign: 'center',
};

const sectionTitle = {
  fontSize: '2em',
  color: '#ff96ad',
  marginBottom: '15px',
  fontFamily: 'Georgia, Times New Roman, Times, serif',
};

const sectionText = {
  fontSize: '1.2em',
  color: '#7a4450',
  fontWeight: 500,
  lineHeight: 1.6,
};

const startBtn = {
  display: 'inline-block',
  marginTop: '25px',
  padding: '12px 22px',
  backgroundColor: '#ff96ad',
  color: 'white',
  fontSize: '1.1em',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '12px',
  textDecoration: 'none',
  boxShadow: '0 6px 12px rgba(255, 150, 173, 0.4)',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
};

const footerStyle = {
  textAlign: 'center',
  marginTop: '20px',
  padding: '15px',
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  color: '#888',
};
