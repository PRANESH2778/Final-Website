import React from 'react';



const Insights = () => {

  return (

    <div style={styles.container}>

      <h1>Financial Insights</h1>

      <p>Stay updated with the latest trends in finance, taxation, and accounting.</p>

      <ul style={styles.insightList}>

        <li><a href="#">Understanding Taxation for Businesses</a></li>

        <li><a href="#">How to Plan for Retirement</a></li>

        <li><a href="#">Accounting Best Practices</a></li>

      </ul>

    </div>

  );

};



const styles = {

  container: {

    textAlign: 'center',

    padding: '20px',

  },

  insightList: {

    listStyle: 'none',

    padding: 0,

    marginTop: '20px',

  },

  link: {

    textDecoration: 'none',

    color: '#333',

    fontSize: '18px',

    lineHeight: '1.6',

  },



  // Media Queries for Responsiveness

  '@media (max-width: 768px)': {

    container: {

      padding: '15px',

    },

    insightList: {

      fontSize: '16px',

    },

    h1: {

      fontSize: '24px',

    },

    p: {

      fontSize: '16px',

    },

    link: {

      fontSize: '16px', // Slightly smaller links for tablets

    },

  },



  '@media (max-width: 480px)': {

    container: {

      padding: '10px',

    },

    insightList: {

      fontSize: '14px', // Reduce font size for smaller screens

    },

    h1: {

      fontSize: '20px', // Smaller heading

    },

    p: {

      fontSize: '14px', // Smaller paragraph text

    },

    link: {

      fontSize: '14px', // Further reduce link size for mobile

    },

  },

};



export default Insights;