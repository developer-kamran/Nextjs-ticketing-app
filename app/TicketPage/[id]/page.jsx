import React from 'react';
import TicketForm from '@/app/(components)/TicketForm';

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id == 'new' ? false : true;
  let updateTicketData = {};
  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.ticket;
  } else {
    updateTicketData = {
      _id: 'new',
    };
  }
  return <TicketForm updateTicketData={updateTicketData} />;
};

export default TicketPage;

const getTicketById = async (id) => {
  const res = await fetch(
    `https://ticketing-app-nextjs.vercel.app/api/Tickets/${id}`,
    {
      cache: 'no-store',
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch ticket');
  }
  return res.json();
};
