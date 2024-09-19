const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-8 w-1/2 items-center">
        <p className="font-bold">
          Introducing BobaEmotes: Express Yourself with Adorable Boba Stickers!
        </p>
        <p>
          Boba Emotes will bring charm and personality to every message. Get
          ready to brighten your conversations with these lovable boba
          characters and let your emotions shine! Add a splash of fun to your
          conversations with a delightful collection of boba-themed stickers!
          Each sticker captures a range of emotions, from happy and angry to
          sad, bringing your favorite boba drink to life in the cutest way
          possible.
        </p>
        <div className="flex flex-row gap-8">
          <img
            src="../assets/images/hero1.png"
            alt="hero-1"
            width="50%"
            className="border rounded-xl"
          />
          <img
            src="../assets/images/hero2.png"
            alt="hero-2"
            width="50%"
            className="border rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
