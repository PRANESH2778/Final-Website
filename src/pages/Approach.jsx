import React, { useEffect } from 'react';
import { FaUserAlt, FaLaptopCode, FaChartLine, FaRegEnvelope } from 'react-icons/fa'; // Adding icons

const Approach = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
    });
  }, []);

  return (
    <div style={styles.container}>
      <h1 className="fade-in">Our Approach</h1>

      <section className="fade-in" style={styles.section}>
        <div style={styles.iconWrapper}>
          <FaUserAlt style={styles.icon} />
        </div>
        <h2>Client First</h2>
        <p>We align our services to meet your specific business goals. At Agrawal Bhaiya & Company, we understand that every client is unique, so we tailor our approach to ensure your financial objectives are met with precision.</p>
      </section>

      <section className="fade-in" style={styles.section}>
        <div style={styles.iconWrapper}>
          <FaLaptopCode style={styles.icon} />
        </div>
        <h2>Tech-Enabled Services</h2>
        <p>We use advanced accounting software and tools to ensure efficient and accurate service delivery. Technology is integrated into every aspect of our services, making financial management more accessible and streamlined for you.</p>
      </section>

      <section className="fade-in" style={styles.section}>
        <div style={styles.iconWrapper}>
          <FaChartLine style={styles.icon} />
        </div>
        <h2>Proactive Advisory</h2>
        <p>Beyond compliance, we offer strategic insights to help you grow. Our team doesn't just file taxes or balance sheets, we help you make informed decisions that contribute to the long-term success of your business.</p>
      </section>

      <section className="fade-in" style={styles.section}>
        <div style={styles.iconWrapper}>
          <FaRegEnvelope style={styles.icon} />
        </div>
        <h2>Transparent Communication</h2>
        <p>We believe in clear and open communication. You will receive regular updates on your financial status, clear pricing, and prompt delivery of services. We make sure you’re always in the loop about your financial health.</p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
  },
  section: {
    marginTop: '20px',
    marginBottom: '20px',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  iconWrapper: {
    backgroundColor: '#2c3e50',
    padding: '10px',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'inline-block',
    marginBottom: '15px',
    color: '#fff',
  },
  icon: {
    fontSize: '28px',
  },
  h1: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  h2: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  p: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
  },

  // Hover animation for sections
  sectionHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.15)',
  },

  // Media Queries for Responsiveness
  '@media (max-width: 768px)': {
    container: {
      padding: '15px',
    },
    h1: {
      fontSize: '28px',
    },
    h2: {
      fontSize: '22px',
    },
    p: {
      fontSize: '14px',
    },
  },

  '@media (max-width: 480px)': {
    container: {
      padding: '10px',
    },
    h1: {
      fontSize: '24px',
    },
    h2: {
      fontSize: '20px',
    },
    p: {
      fontSize: '12px',
    },
  },
};

export default Approach;