import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { IOrder } from "@/lib/mongodb/models/order.model";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import styles from "@/components/shared/HomePage.module.css";
const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  // Get allowed MongoDB userId from environment variable
  const allowedUserId = process.env.NEXT_PUBLIC_ALLOWED_USER_ID;

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  const orders = await getOrdersByUser({ userId, page: ordersPage });

  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
  let organizedEvents = null;

  // Fetch organized events only if userId matches the allowed one
  if (userId === allowedUserId) {
    organizedEvents = await getEventsByUser({ userId, page: eventsPage });
  }

  return (
    <>
      {/* My Tickets */}
      <section className="bg-black bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3
            className={`h3-bold text-center sm:text-left ${styles.textColour}`}
          >
            My Tickets
          </h3>
          <Button
            asChild
            size="lg"
            className={`button hidden sm:flex text-black`}
          >
            <Link href="/#events">Explore More Events</Link>
          </Button>
        </div>
      </section>

      <section className={`wrapper bg-black ${styles.myTickets}`}>
        <Collection
          data={orderedEvents}
          emptyTitle="No event tickets purchased yet"
          emptyStateSubtext="No worries - plenty of exciting events to explore!"
          collectionType="My_Tickets"
          limit={3}
          page={ordersPage}
          urlParamName="ordersPage"
          totalPages={orders?.totalPages}
        />
      </section>

      {/* Events Organized */}
      {userId === allowedUserId && (
        <>
          {/* Events Organized */}
          <section className="bg-black bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
            <div className="wrapper flex items-center justify-center sm:justify-between">
              <h3
                className={`h3-bold text-center sm:text-left ${styles.textColour}`}
              >
                Events Organized
              </h3>
              <Button
                asChild
                size="lg"
                className={`button hidden sm:flex ${styles.btn}`}
              >
                <Link href="/events/create">Create New Event</Link>
              </Button>
            </div>
          </section>

          <section className="wrapper my-8">
            <Collection
              data={organizedEvents?.data}
              emptyTitle="No events have been created yet"
              emptyStateSubtext="Go create some now"
              collectionType="Events_Organized"
              limit={3}
              page={eventsPage}
              urlParamName="eventsPage"
              totalPages={organizedEvents?.totalPages}
            />
          </section>
        </>
      )}
    </>
  );
};

export default ProfilePage;
