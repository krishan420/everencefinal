// import { useNavigate } from 'react-router-dom';
// import { useCallback, useMemo } from 'react';
// import { useSelector } from 'react-redux';
// import { toast } from 'react-toastify';

// const useSearchLogic = () => {
//   const navigate = useNavigate();
//   const coursesMenu = useSelector((state) => state.navbar.menuItems); 

//   // 🔁 Flatten submenus and top-level links
//   const dynamicCourseRoutes = useMemo(() => {
//     const routes = [];

//     coursesMenu.forEach(item => {
//       if (item.link) {
//         routes.push({ title: item.title, link: item.link });
//       }

//       if (item.subMenu && Array.isArray(item.subMenu)) {
//         item.subMenu.forEach(sub => {
//           routes.push({ title: sub.title, link: sub.link });
//         });
//       }
//     });

//     return routes;
//   }, [coursesMenu]);

//   // 📖 Static + dynamic routes keyword map
//   const keywordsMap = useMemo(() => [
//     {
//       route: '/contact',
//       keywords: ['contact', 'get in touch', 'support', 'help', 'contact us']
//     },
//     {
//       route: '/about-us',
//       keywords: ['about', 'about us', 'company info', 'who we are']
//     },
//     {
//       route: '/refund',
//       keywords: ['refund', 'money back', 'refund policy']
//     },
//     {
//       route: '/privacy',
//       keywords: ['privacy', 'privacy policy']
//     },
//     {
//       route: '/terms',
//       keywords: ['terms', 'terms of service']
//     },
//     {
//       route: '/jobs-openings',
//       keywords: ['jobs', 'job openings', 'career', 'openings']
//     },
//     {
//       route: '/placed',
//       keywords: ['placements', 'placed students']
//     },
//     {
//       route: '/blog',
//       keywords: ['blog', 'blogs', 'news', 'articles']
//     },
//     {
//       route: '/',
//       keywords: ['home', 'main', 'homepage', 'Home']
//     },
//     // Add dynamic routes from Redux
//     ...dynamicCourseRoutes.map(({ title, link }) => ({
//       route: link,
//       keywords: [
//         title.toLowerCase(),
//         title.toLowerCase().replace(/[^a-z0-9 ]/gi, ''), // remove special chars
//         link.replace(/-/g, ' ').replace(/\//g, '').toLowerCase()
//       ]
//     }))
//   ], [dynamicCourseRoutes]);

//   // 🔍 Search function
//   const handleSearch = useCallback((query) => {
//     const input = query.trim().toLowerCase();

//     const found = keywordsMap.find(entry =>
//       entry.keywords.some(keyword =>
//         keyword.startsWith(input) || input.startsWith(keyword)
//       )
//     );

//     if (found) {
//       navigate(found.route);
//     } else {
//       toast.error("Sorry, no matching page found!");
//     }
//   }, [navigate, keywordsMap]);

//   // 🔡 Suggestions logic
//   const getSuggestions = useCallback((query) => {
//     const input = query.trim().toLowerCase();
//     if (!input) return [];

//     return keywordsMap
//       .filter(entry =>
//         entry.keywords.some(keyword =>
//           keyword.includes(input)
//         )
//       )
//       .slice(0, 5);
//   }, [keywordsMap]);

//   return { handleSearch, getSuggestions };
// };

// export default useSearchLogic;



// useSearchLogic.js
import { useNavigate } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const useSearchLogic = () => {
  const navigate = useNavigate();
  const coursesMenu = useSelector((s) => s.navbar.menuItems);

  // 1) Build a unified list of all pages/courses
  const allEntries = useMemo(() => {
    const entries = [
      /* static pages… */
      { title: 'Home',   route: '/',               keywords: ['home','main','landing','homepage'] },
      { title: 'Contact',route: '/contact',       keywords: ['contact','get in touch','support','help'] },
      { title: 'About',  route: '/about-us',      keywords: ['about','about us','company info'] },
      { title: 'Refund', route: '/refund',        keywords: ['refund','refund policy','money back'] },
      { title: 'Privacy',route: '/privacy',       keywords: ['privacy','privacy policy'] },
      { title: 'Terms',  route: '/terms',         keywords: ['terms','terms of service'] },
      { title: 'Jobs',   route: '/jobs-openings', keywords: ['jobs','job openings','careers','openings'] },
      { title: 'Placed', route: '/placed',        keywords: ['placements','placed students','placement'] },
      { title: 'Blog',   route: '/blogs',          keywords: ['blog','news','articles'] },
      // …then all your courses + submenus
    ];

    coursesMenu.forEach((item) => {
      if (item.title && item.link) {
        const base = item.title.toLowerCase().split(' ');
        entries.push({
          title: item.title,
          route: item.link,
          keywords: [
            item.title.toLowerCase(),
            ...base,
            item.link.replace(/\//g, '').replace(/-/g, ' ')
          ],
        });
      }
      if (Array.isArray(item.subMenu)) {
        item.subMenu.forEach((sub) => {
          const base = sub.title.toLowerCase().split(' ');
          entries.push({
            title: sub.title,
            route: sub.link,
            keywords: [
              sub.title.toLowerCase(),
              ...base,
              sub.link.replace(/\//g, '').replace(/-/g, ' ')
            ],
          });
        });
      }
    });

    // dedupe by route
    const seen = new Set();
    return entries.filter((e) => {
      if (seen.has(e.route)) return false;
      seen.add(e.route);
      return true;
    });
  }, [coursesMenu]);

  // 2) handleSearch: split into words; require 2+ chars; all words must match
  const handleSearch = useCallback((rawQuery, { suppressToast = false } = {}) => {
    const q = rawQuery.trim().toLowerCase();
    if (q.length < 2) {
      if (!suppressToast) toast.error('Please enter at least 2 characters');
      return;
    }

    const words = q.split(/\s+/);
    const found = allEntries.find((entry) =>
      // every word must match the start of at least one keyword
      words.every((w) =>
        entry.keywords.some((kw) => kw.startsWith(w))
      )
    );

    if (found) {
      navigate(found.route);
    } else if (!suppressToast) {
      toast.error(`No results found for “${rawQuery}”`);
    }
  }, [allEntries, navigate]);

  // 3) getSuggestions: use startsWith only, so “ho” → Home but not Python or About
  const getSuggestions = useCallback((rawQuery) => {
    const q = rawQuery.trim().toLowerCase();
    if (q.length < 1) return [];

    return allEntries
      .filter((entry) =>
        entry.keywords.some((kw) => kw.startsWith(q))
      )
      .slice(0, 5)
      .map((e) => ({ title: e.title, route: e.route }));
  }, [allEntries]);

  return { handleSearch, getSuggestions };
};

export default useSearchLogic;
