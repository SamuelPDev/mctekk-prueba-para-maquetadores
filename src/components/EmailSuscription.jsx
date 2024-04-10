const EmailSubscription = () => {
  return (
    <section className="bg-black text-center py-5">
      <h2 className="text-white text-2xl mb-4">STAY IN TOUCH</h2>
      <form className="flex justify-center">
        <input
          className="w-2/4 px-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-500"
          type="email"
          placeholder="Your Email Address"
          required
        />
      </form>
    </section>
  );
};

export default EmailSubscription;