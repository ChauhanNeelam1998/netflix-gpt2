const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us page!</h1>
      <input
        type="text"
        placeholder="name"
        className="border border-black p-2 m-2"
      />
      <input
        type="text"
        placeholder="message"
        className="border border-black p-2 m-2"
      />
      <button className="border border-black p-2 m-2 bg-slate-500 rounded-md text-white">
        Submit
      </button>
    </div>
  );
};

export default Contact;
