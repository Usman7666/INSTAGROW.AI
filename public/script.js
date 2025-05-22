document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".navitems", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
  });

  gsap.from(".imageslist", {
    y: 20,
    opacity: 0.6,
    duration: 0.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".imageslist",
      start: "top 90%",
      scroller: "body",
     
    },
  });

  gsap.from(".heading", {
    y: 200,
    opacity: 0,
    duration: 1,
    scale: 0.2,
    scrollTrigger: {
      trigger: ".heading",
      start: "top 70%",
      scroller: "body",
       
    },
  });

  gsap.from(".before-image", {
    y: 50,
    duration: 2,
    delay: 0.1,
    scrollTrigger: {
      trigger: ".before-image",
      start: "top 90%",
      scroller: "body",
    },
  });

  gsap.from(".image", {
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
      trigger: ".image",
      scroller: "body",
      start: "top 70%",
    },
  });

  gsap.from(".preciseimage", {
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
      trigger: ".preciseimage",
      scroller: "body",
      start: "top 80%",
    },
  });

  gsap.from(".precisecontent", {
    y: 20,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".precisecontent",
      scroller: "body",
      start: "top 85%",
    },
  });

  gsap.from(".analyticsimage", {
    opacity: 0,
    duration: 2,
    x: -500,
    scrollTrigger: {
      trigger: ".analyticsimage",
      scroller: "body",
      start: "top 80%",
    },
  });

  gsap.from(".analyticscontent", {
    y: 20,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".analyticscontent",
      scroller: "body",
      start: "top 85%",
    },
  });

  gsap.from(".Integratedcontent", {
    y: 20,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".Integratedcontent",
      scroller: "body",
      start: "top 85%",
    },
  });

  gsap.from(".Aiimage", {
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
      trigger: ".Aiimage",
      scroller: "body",
      start: "top 80%",
    },
  });

  gsap.from(".Aicontent", {
    y: 20,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".Aicontent",
      scroller: "body",
      start: "top 85%",
    },
  });

  gsap.from(".successcontent", {
    y: 20,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".successcontent",
      scroller: "body",
      start: "top 85%",
    },
  });

  gsap.from(".successcards", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".successcards",
      scroller: "body",
      start: "top 85%",
    },
  });

  gsap.from(".pricingcard3", {
    x: 500,
    duration: 1.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".pricingcard3",
      scroller: "body",
      start: "top 85%",
    },
  });

  gsap.from(".pricingcard1", {
    x: -500,
    duration: 1.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".pricingcard1",
      scroller: "body",
      start: "top 85%",
    },
  });

  gsap.from(".pricingcard2", {
    y: -100,
    duration: 1.5,
    delay: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".pricingcard2",
      scroller: "body",
      start: "top 85%",
    },
  });

  gsap.from(".faqcontent", {
    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
      trigger: ".faqcontent",
      scroll: "body",
      start: "top 85%",
    },
  });
  gsap.from(".faqcontent2", {
    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
      trigger: ".faqcontent2",
      scroll: "body",
      start: "top 85%",
    },
  });
});
