export default function About() {
  return (
    <section
      className="bg-slate-950 rounded-[56px] h-max text-slate-50 p-6 md:p-10 my-10 sm:w-[90%] mx-auto"
      id="about"
    >
      <h2 className="text-3xl lg:text-4xl pb-5 pl-6 sm:px-16 font-bold">
        {'//About'}
      </h2>
      <div className="flex flex-col items-start justify-center h-full">
        <p className=" sm:px-12 py-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
          deleniti provident, nesciunt voluptate temporibus, deserunt iure
          cumque hic ab maiores, non nulla repellendus possimus odio aliquid
          ipsa obcaecati ex soluta.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolor
          rem excepturi, est rerum itaque velit dignissimos deleniti facilis eos
          non, nulla aut corrupti assumenda provident laborum voluptas sed
          eligendi?
        </p>
      </div>
    </section>
  );
}
