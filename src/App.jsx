import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

/* ================= CORE ================= */
import RouteTransition from "./components/RouteTransition";
import Layout from "./components/Layout";

/* ================= ADMIN ================= */
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import CreateBlog from "./admin/CreateBlog";
import ManageBlogs from "./admin/ManageBlogs";
import EditBlog from "./admin/EditBlog";
import AdminRoute from "./admin/AdminRoute";

/* ================= LAZY PAGES ================= */
const IntroLanding = lazy(() => import("./pages/IntroLanding"));
const Home = lazy(() => import("./pages/Home"));
const OurService = lazy(() => import("./pages/OurServices"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Events = lazy(() => import("./pages/Events"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Contact = lazy(() => import("./pages/Contact"));
const KailasKandalkar = lazy(() => import("./pages/KailasKandalkar"));
const PramodPrabhakar = lazy(() => import("./pages/PramodPrabhakar"));
const Industries = lazy(() => import("./pages/Industries"));
const Emergency = lazy(() => import("./pages/Emergency"));
const BlogDetail = lazy(() => import("./components/Blogs/BlogDetail"));

const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const TermsOfService = lazy(() => import("./components/Terms/Terms"));
const PrivacyPolicy = lazy(() => import("./components/Terms/Privacy"));
const RefundPolicy = lazy(() => import("./components/Terms/Refund"));
const ContactSuccessful = lazy(() => import("./lib/ContactSuccessful"));
const NotFoundPage = lazy(() => import("./components/ui/NotFoundPage"));

/* ✅ FIXED IMPORT */
const ServiceDetail = lazy(() => import("./pages/ServicePage"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
/* ================= FALLBACK ================= */
const Loader = () => (
  <div className="flex items-center justify-center py-20">
    Loading...
  </div>
);

/* ================= ROUTER ================= */
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteTransition />,
    children: [
      {
        path: "admin/login",
        element: <Login />,
      },
      {
        path: "admin/dashboard",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "admin/create-blog",
        element: (
          <AdminRoute>
            <CreateBlog />
          </AdminRoute>
        ),
      },
      {
        path: "admin/manage-blogs",
        element: (
          <AdminRoute>
            <ManageBlogs />
          </AdminRoute>
        ),
      },
      {
        path: "admin/edit-blog/:id",
        element: (
          <AdminRoute>
            <EditBlog />
          </AdminRoute>
        ),
      },

      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <IntroLanding />
          </Suspense>
        ),
      },

      {
        element: <Layout />,
        children: [
          {
            path: "home",
            element: <Suspense fallback={<Loader />}><Home /></Suspense>,
          },
          {
            path: "our-services",
            element: <Suspense fallback={<Loader />}><OurService /></Suspense>,
          },

          /* ✅ IMPORTANT ROUTE */
          {
            path: "services/:slug",
            element: (
              <Suspense fallback={<Loader />}>
                <ServiceDetail />
              </Suspense>
            ),
          },
{
  path: "case-studies/:slug",
  element: (
    <Suspense fallback={<Loader />}>
      <CaseStudyDetail />
    </Suspense>
  ),
},
          {
            path: "about-us",
            element: <Suspense fallback={<Loader />}><AboutUs /></Suspense>,
          },
          {
            path: "events",
            element: <Suspense fallback={<Loader />}><Events /></Suspense>,
          },
          {
            path: "industries",
            element: <Suspense fallback={<Loader />}><Industries /></Suspense>,
          },
          {
            path: "emergency",
            element: <Suspense fallback={<Loader />}><Emergency /></Suspense>,
          },
          {
            path: "blogs",
            element: <Suspense fallback={<Loader />}><Blogs /></Suspense>,
          },
          {
            path: "blog/:slug",
            element: <Suspense fallback={<Loader />}><BlogDetail /></Suspense>,
          },
          {
            path: "contact",
            element: <Suspense fallback={<Loader />}><Contact /></Suspense>,
          },

          {
  path: "kailas-kandalkar",
  element: (
    <Suspense fallback={<Loader />}>
      <KailasKandalkar />
    </Suspense>
  ),
},
{
  path: "pramod-prabhakar", // ✅ FIXED SPELLING
  element: (
    <Suspense fallback={<Loader />}>
      <PramodPrabhakar />
    </Suspense>
  ),
},
          {
            path: "cookie-policy",
            element: <Suspense fallback={<Loader />}><CookiePolicy /></Suspense>,
          },
          {
            path: "terms",
            element: <Suspense fallback={<Loader />}><TermsOfService /></Suspense>,
          },
          {
            path: "privacy",
            element: <Suspense fallback={<Loader />}><PrivacyPolicy /></Suspense>,
          },
          {
            path: "refund",
            element: <Suspense fallback={<Loader />}><RefundPolicy /></Suspense>,
          },
          {
            path: "successful",
            element: <Suspense fallback={<Loader />}><ContactSuccessful /></Suspense>,
          },
          {
            path: "*",
            element: <Suspense fallback={<Loader />}><NotFoundPage /></Suspense>,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}