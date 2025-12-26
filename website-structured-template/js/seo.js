const seoConfig = {
  main: {
    title: "Re-EL Digital Agency | Building Impactful Brands",
    description: "We design powerful websites and digital solutions.",
    keywords: "web design, branding, digital agency",
    url: window.location.href,
    image: "/assets/og-main.png"
  },
  about: {
    title: "About Us | Re-EL Digital Agency",
    description: "Learn more about Re-EL and our mission.",
    keywords: "about re-el, digital agency",
    url: window.location.href,
    image: "/assets/og-about.png"
  }
};

function updateSEO(page) {
  const data = seoConfig[page] || seoConfig.main;

  document.getElementById("page-title").innerText = data.title;
  document.getElementById("page-description").content = data.description;
  document.getElementById("page-keywords").content = data.keywords;
  document.getElementById("page-canonical").href = data.url;

  document.getElementById("og-title").content = data.title;
  document.getElementById("og-description").content = data.description;
  document.getElementById("og-url").content = data.url;
  document.getElementById("og-image").content = data.image;

  document.getElementById("twitter-title").content = data.title;
  document.getElementById("twitter-description").content = data.description;
  document.getElementById("twitter-image").content = data.image;

  document.getElementById("schema-data").innerHTML = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Re-EL Digital Agency",
    "description": data.description,
    "url": data.url,
    "address": { "@type": "PostalAddress", "addressCountry": "South Africa" }
  });
}
