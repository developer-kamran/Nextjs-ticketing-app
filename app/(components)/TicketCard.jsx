import React from 'react';
import Link from 'next/link';
import { getStatusColor, getPriorityColor, formatTimestamp } from '../(utils)';
import DeleteTicket from './DeleteTicket';

const TicketCard = ({ ticket }) => {
  return (
    <div className='card w-96 bg-base-300 shadow-xl'>
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: 'contents' }}>
        <div className='card-body'>
          <div className='card-actions justify-between items-center'>
            <div
              className={`badge badge-${getPriorityColor(
                ticket.priority
              )} badge-lg`}
            ></div>
            <DeleteTicket id={ticket._id} />
          </div>
          <h2 className='card-title mt-3 text-xl'>{ticket.title}</h2>
          <p className='text-md mb-4'>{ticket.description}</p>
          <p className='text-sm'>
            Created at: {formatTimestamp(ticket.createdAt)}
          </p>
          <progress
            className='progress progress-primary w-56 my-5'
            value={ticket.progress}
            max='100'
          ></progress>
          <div className='card-actions justify-end'>
            <div
              className={`badge badge-${getStatusColor(
                ticket.status
              )} p-4 capitalize`}
            >
              {ticket.status}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
