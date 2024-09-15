'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const TicketForm = ({ updateTicketData }) => {
  const EDITMODE = updateTicketData._id === 'new' ? false : true;

  const router = useRouter();

  const ticket = {
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: 'not started',
    category: 'Hardware Problem',
  };
  if (EDITMODE) {
    ticket.title = updateTicketData.title;
    ticket.description = updateTicketData.description;
    ticket.priority = updateTicketData.priority;
    ticket.progress = updateTicketData.progress;
    ticket.status = updateTicketData.status;
    ticket.category = updateTicketData.category;
  }
  const [data, setData] = useState(ticket);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (EDITMODE) {
      const response = await fetch(`/api/Tickets/${updateTicketData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });

      if (!response.ok) {
        throw new Error('Ticket update failed.');
      }
    } else {
      const response = await fetch('/api/Tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });

      if (!response.ok) {
        throw new Error('Ticket creation failed.');
      }
    }

    router.refresh();
    router.push('/');
  };

  return (
    <form
      className='w-2/4 bg-base-300 rounded-lg p-10 px-6 mx-auto'
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1 className='text-3xl mb-5'>
        {EDITMODE ? 'Update' : 'Create'} your Ticket
      </h1>
      <div className='mb-5'>
        <label
          htmlFor='title'
          className='block mb-2 font-medium text-gray-900 dark:text-white'
        >
          Title
        </label>
        <input
          type='title'
          id='title'
          name='title'
          className='input input-bordered w-full'
          placeholder=''
          required
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='description'
          className='block mb-2 font-medium text-gray-900 dark:text-white'
        >
          Description
        </label>
        <textarea
          type='text'
          id='description'
          name='description'
          className='textarea textarea-bordered textarea-lg w-full'
          placeholder=''
          required
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='category'
          className='block mb-2 font-medium text-gray-900 dark:text-white'
        >
          Category
        </label>
        <select
          name='category'
          className='select select-bordered w-full'
          value={data.category}
          onChange={(e) => setData({ ...data, category: e.target.value })}
        >
          <option value='Hardware Problem'>Hardware Problem</option>
          <option value='Software Problem'>Software Problem</option>
          <option value='Project'>Project</option>
        </select>
      </div>
      <div className='my-8 flex gap-3 items-center'>
        <label
          htmlFor='priority'
          className='block font-medium text-gray-900 dark:text-white'
        >
          Priority
        </label>
        <div className='flex items-center gap-1'>
          <input
            id='priority-1'
            type='radio'
            name='priority'
            className='radio radio-primary'
            value={1}
            onChange={(e) => setData({ ...data, priority: e.target.value })}
            checked={data.priority == 1}
          />
          <label>1</label>
        </div>
        <div className='flex items-center gap-1'>
          <input
            id='priority-2'
            type='radio'
            name='priority'
            className='radio radio-primary'
            value={2}
            onChange={(e) => setData({ ...data, priority: e.target.value })}
            checked={data.priority == 2}
          />
          <label>2</label>
        </div>
        <div className='flex items-center gap-1'>
          <input
            id='priority-3'
            type='radio'
            name='priority'
            className='radio radio-primary'
            value={3}
            onChange={(e) => setData({ ...data, priority: e.target.value })}
            checked={data.priority == 3}
          />
          <label>3</label>
        </div>
        <div className='flex items-center gap-1'>
          <input
            id='priority-4'
            type='radio'
            name='priority'
            className='radio radio-primary'
            value={4}
            onChange={(e) => setData({ ...data, priority: e.target.value })}
            checked={data.priority == 4}
          />
          <label>4</label>
        </div>
        <div className='flex items-center gap-1'>
          <input
            id='priority-5'
            type='radio'
            name='priority'
            className='radio radio-primary'
            value={5}
            onChange={(e) => setData({ ...data, priority: e.target.value })}
            checked={data.priority == 5}
          />
          <label>5</label>
        </div>
      </div>
      <div className='mb-5'>
        <label
          htmlFor='range'
          className='block mb-2 font-medium text-gray-900 dark:text-white'
        >
          Progress
        </label>
        <input
          type='range'
          id='progress'
          min={0}
          max='100'
          className='range range-primary'
          value={data.progress}
          onChange={(e) => setData({ ...data, progress: e.target.value })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='status'
          className='block mb-2 font-medium text-gray-900 dark:text-white'
        >
          Status
        </label>
        <select
          name='status'
          className='select select-bordered w-full'
          value={data.status}
          onChange={(e) => setData({ ...data, status: e.target.value })}
        >
          <option value='Not Started'>Not Started</option>
          <option value='Started'>Started</option>
          <option value='Done'>Done</option>
        </select>
      </div>
      <button className='btn btn-primary w-full'>
        {EDITMODE ? 'Update' : 'Create'} Ticket
      </button>
    </form>
  );
};

export default TicketForm;
