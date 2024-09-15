import TicketCard from './(components)/TicketCard';

export default async function Dashboard() {
  const { tickets } = await getTickets();

  const newCategories = [...new Set(tickets?.map(({ category }) => category))];
  return (
    <>
      {tickets &&
        newCategories.map((category, index) => (
          <div key={index} className='my-4'>
            <h2 className='font-bold text-3xl mb-5'>{category}</h2>
            <div className='lg:grid grid-cols-2 xl:grid-cols-4 gap-32'>
              {tickets
                .filter((ticket) => ticket.category === category)
                .map((ticket, _index) => (
                  <TicketCard id={_index} key={_index} ticket={ticket} />
                ))}
            </div>
          </div>
        ))}
    </>
  );
}
const getTickets = async () => {
  try {
    const res = await fetch(
      'https://ticketing-app-nextjs.vercel.app/api/Tickets',
      {
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch tickets');
    }

    return res.json();
  } catch (error) {
    console.log('Error loading tickets: ', error);
  }
};
