// The title of the page
document.querySelector("title");
// The logo in the nav
document.querySelector(".navi_banner_logo");
// The "Find Your Course" button in the nav
document.querySelector(
  'nav ul li a[href="https://generalassemb.ly/findyourcourse"]'
);
// The heading that says "Learning Today, Leading Tomorrow"
document.querySelector("h1");
// All the DOM nodes that contain course names (such as "Software Engineering", "UX Design Immersive" etc.)
document.querySelectorAll("div.home-courses h3 span.course-name");
// The amount of campuses around the world
document.querySelector(".facts_list_item_quantity").innerText;
// The number of instructors
document.querySelector('a[href*="teach"] div.facts_list_item_quantity')
  .innerText;
//   The logos of GA's featured clients and hiring partners
document.querySelectorAll('div[class*="Employers__list_item"]');
// GA's social links at the bottom (Facebook, Twitter, LinkedIn, Instagram, YouTube)
document.querySelectorAll('a[class*="navi_footer-social-icons"]');
// The input where you add your email to sign up for the newsletter (in the footer)
document.querySelector('footer input[type="email"]');
