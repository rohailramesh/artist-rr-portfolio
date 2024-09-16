"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAuth, SignOutButton } from "@clerk/nextjs"; // Import SignOutButton
const NavItems = () => {
  const pathname = usePathname();
  const { userId, isLoaded } = useAuth(); // use Clerk's client-side hook to get userId
  const [filteredLinks, setFilteredLinks] = useState(headerLinks);

  useEffect(() => {
    const allowedUserId = process.env.NEXT_PUBLIC_ALLOWED_CLERK_ID;

    // Once userId is loaded, filter the links based on allowed userId
    if (isLoaded && userId !== allowedUserId) {
      setFilteredLinks(
        headerLinks.filter((link) => link.label !== "Create Event")
      );
    }
  }, [isLoaded, userId]);

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row text-primary-500">
      {filteredLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}

      {isLoaded && userId && (
        <li className="flex-center p-medium-16 whitespace-nowrap">
          <SignOutButton>
            <button className="text-primary-500">Sign Out</button>
          </SignOutButton>
        </li>
      )}
    </ul>
  );
};

export default NavItems;

// "use client";

// import { headerLinks } from "@/constants";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { useAuth } from "@clerk/nextjs";

// const NavItems = () => {
//   const pathname = usePathname();
//   const { userId, isLoaded } = useAuth(); // use Clerk's client-side hook to get userId
//   const [filteredLinks, setFilteredLinks] = useState(headerLinks);

//   useEffect(() => {
//     const allowedUserId = process.env.NEXT_PUBLIC_ALLOWED_CLERK_ID;

//     // Once userId is loaded, filter the links based on allowed userId
//     if (isLoaded && userId !== allowedUserId) {
//       setFilteredLinks(
//         headerLinks.filter((link) => link.label !== "Create Event")
//       );
//     }
//   }, [isLoaded, userId]);

//   return (
//     <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row text-primary-500">
//       {filteredLinks.map((link) => {
//         const isActive = pathname === link.route;

//         return (
//           <li
//             key={link.route}
//             className={`${
//               isActive && "text-primary-500"
//             } flex-center p-medium-16 whitespace-nowrap`}
//           >
//             <Link href={link.route}>{link.label}</Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default NavItems;
