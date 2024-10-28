export const Metrics = () => {
  const data = [
    {
      title: 'Events Registered',
      value: 3,
    },
    {
      title: 'Events Organized',
      value: 5,
    },
    {
      title: 'Upcoming Events',
      value: 10,
    },
  ]
  return (
    <section className="grid grid-cols-3 gap-x-6 mt-10">
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className="w-full border-primary border-2 px-6 py-4 rounded-3xl hover:shadow-xl transition-all duration-500"
          >
            <p className="text-xl font-medium">{item.title}</p>
            <p className="font-bold text-7xl text-primary">{item.value}</p>
          </div>
        )
      })}
    </section>
  )
}
