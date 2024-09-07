import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/profile(.*)", "/events(.*)"]);

const isPublicRoute = createRouteMatcher([
  "/",
  "/events/:id",
  "/api/webhook/clerk",
  "/api/webhook/stripe",
  "/api/uploadthing",
]);

export default clerkMiddleware((auth, req) => {
  // Protect the profile route, and protect all other routes except those that are public
  if (isProtectedRoute(req) && !isPublicRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher([
//   "/profile(.*)",
//   "/api/webhook/clerk(.*)",
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect();
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };
