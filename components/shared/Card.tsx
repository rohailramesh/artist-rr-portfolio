import Image from "next/image"; // Add Next.js Image component
import { IEvent } from "@/lib/mongodb/models/event.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import { DeleteConfirmation } from "./DeleteConfirmation";
import styles from "@/components/shared/HomePage.module.css";
import cardStyles from "@/components/shared/Card.module.css";
type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};
const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div
      className={`group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-black shadow-md transition-all hover:shadow-lg md:min-h-[438px] ${styles.card}`}
    >
      {/* Replace Link with Image component for responsive behavior */}
      <Link href={`/events/${event._id}`}>
        <div className={cardStyles.imageContainer}>
          <Image
            src={event.imageUrl}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>
      </Link>

      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <Image
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-green-60 bg-black">
              {event.isFree ? "FREE" : `£${event.price}`}
            </span>
            <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-green-60 bg-black">
              {event.category.name}
            </p>
            <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-green-60 bg-black">
              {event.location}
            </p>
          </div>
        )}
        <Link href={`/events/${event._id}`}>
          <p className={`p-medium-16 p-medium-18 ${styles.fontColour}`}>
            Event: {event.title}
          </p>
        </Link>
        <p className={`p-medium-16 p-medium-18 ${styles.fontColour}`}>
          When: {formatDateTime(event.startDateTime).dateTime}
        </p>

        <div className="flex-between w-full">
          <p className={`p-medium-16 p-medium-18 ${styles.fontColour}`}>
            Organiser: {event.organizer.firstName} {event.organizer.lastName}
          </p>

          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
              <p className={`p-medium-16 p-medium-18 ${styles.fontColour}`}>
                Order Details
              </p>
              <Image
                src="/assets/icons/arrow.svg"
                alt="search"
                width={10}
                height={10}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;

// import { IEvent } from "@/lib/mongodb/models/event.model";
// import { formatDateTime } from "@/lib/utils";
// import { auth } from "@clerk/nextjs/server";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { DeleteConfirmation } from "./DeleteConfirmation";
// import styles from "@/components/shared/HomePage.module.css";
// type CardProps = {
//   event: IEvent;
//   hasOrderLink?: boolean;
//   hidePrice?: boolean;
// };

// const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
//   const { sessionClaims } = auth();
//   const userId = sessionClaims?.userId as string;

//   const isEventCreator = userId === event.organizer._id.toString();

//   return (
//     <div
//       className={`group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-black shadow-md transition-all hover:shadow-lg md:min-h-[438px] ${styles.card}`}
//     >
//       <Link
//         href={`/events/${event._id}`}
//         style={{ backgroundImage: `url(${event.imageUrl})` }}
//         className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-orange-500"
//       />
//       {/* IS EVENT CREATOR ... */}

//       {isEventCreator && !hidePrice && (
//         <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
//           <Link href={`/events/${event._id}/update`}>
//             <Image
//               src="/assets/icons/edit.svg"
//               alt="edit"
//               width={20}
//               height={20}
//             />
//           </Link>

//           <DeleteConfirmation eventId={event._id} />
//         </div>
//       )}

//       <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
//         {!hidePrice && (
//           <div className="flex gap-2">
//             <span className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-green-60 bg-black">
//               {event.isFree ? "FREE" : `£${event.price}`}
//             </span>
//             <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-green-60 bg-black">
//               {event.category.name}
//             </p>
//             <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-green-60 bg-black">
//               {event.location}
//             </p>
//           </div>
//         )}
//         <Link href={`/events/${event._id}`}>
//           <p className={`p-medium-16 p-medium-18 ${styles.fontColour}`}>
//             Event: {event.title}
//           </p>
//         </Link>
//         <p className={`p-medium-16 p-medium-18 ${styles.fontColour}`}>
//           When: {formatDateTime(event.startDateTime).dateTime}
//         </p>

//         <div className="flex-between w-full">
//           <p className={`p-medium-16 p-medium-18 ${styles.fontColour}`}>
//             Organiser: {event.organizer.firstName} {event.organizer.lastName}
//           </p>

//           {hasOrderLink && (
//             <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
//               <p className={`p-medium-16 p-medium-18 ${styles.fontColour}`}>
//                 Order Details
//               </p>
//               <Image
//                 src="/assets/icons/arrow.svg"
//                 alt="search"
//                 width={10}
//                 height={10}
//               />
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
