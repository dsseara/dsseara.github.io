// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-",
          title: "",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-job-openings",
          title: "job openings",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/jobs/";
          },
        },{id: "nav-group-philosophy",
          title: "group philosophy",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/philosophy/";
          },
        },{id: "news-we-are-looking-for-motivated-ph-d-students-to-join-us-please-reach-out-to-prof-seara-if-you-are-interested-in-joining-the-group",
          title: 'We are looking for motivated Ph.D. students to join us! Please reach out...',
          description: "",
          section: "News",},{id: "news-this-semester-hamza-started-his-phd-and-guilherme-joined-as-a-postdoc-welcome",
          title: 'This semester, Hamza started his PhD and Guilherme joined as a postdoc. Welcome!!...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
