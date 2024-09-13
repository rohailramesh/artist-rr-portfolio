import React from "react";
import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs/server";
import styles from "@/components/shared/HomePage.module.css";
const CreateEvent = () => {
  const { sessionClaims } = auth();

  // Get the userId from session claims
  const userId = sessionClaims?.userId as string;

  // Get the allowed user ID from the environment variable
  const allowedUserId = process.env.NEXT_PUBLIC_ALLOWED_USER_ID;

  // Check if the current user is allowed to create the event
  if (userId !== allowedUserId) {
    return (
      <div className="wrapper my-8">
        <h3 className="text-center text-red-600">
          You are not authorized to create events.
        </h3>
      </div>
    );
  }

  // Render the event creation form if the user is authorized
  return (
    <>
      <section className="bg-black bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3
          className={`wrapper h3-bold text-center sm:text-left ${styles.textColour}`}
        >
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;

// import React from "react";
// import EventForm from "@/components/shared/EventForm";
// import { auth } from "@clerk/nextjs/server";

// const CreateEvent = () => {
//   const { sessionClaims } = auth();

//   const userId = sessionClaims?.userId as string;
//   console.log(userId);

//   return (
//     <>
//       <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
//         <h3 className="wrapper h3-bold text-center sm:text-left">
//           Create Event
//         </h3>
//       </section>

//       <div className="wrapper my-8">
//         <EventForm userId={userId} type="Create" />
//       </div>
//     </>
//   );
// };

// export default CreateEvent;
