import Image from "next/image";
export default function Home() {
  return (
    <div>
      <header className="shadow-md p-4 fixed w-full top-0 left-0 z-10 bg-white">
        <ul>
          <div className="flex justify-between">
            <div className="flex space-x-2 items-center">
              <li><h1 className="font-bold text-xl">nuxplay</h1></li>
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_k7RWEIXhS1uWBcJ9omrQIF5M-CM12rLkw6gL62R1I545M=s900-c-k-c0x00ffffff-no-rj"
                alt="nixplay-logo"
                className="w-[5vh] h-[5vh]" />
            </div>
            <div className="flex space-x-2 items-center">
              <li>
                <Image
                  src="/images/united.png"
                  alt="Description of the image"
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <Image
                  src="/images/uk.png"
                  alt="Description of the image"
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <Image
                  src="/images/german.png"
                  alt="Description of the image"
                  width={30}
                  height={30}
                />
              </li>
            </div>
          </div>
        </ul>
      </header>
      <main>
        <div className="snap-y snap-mandatory scroll-smooth h-screen">
          <section className="snap-start h-screen flex justify-center items-center">
            <div className="space-y-10">
              <div className="flex flex-col content-center space-y-2">
                <div className="flex justify-center items-center">
                  <h1 className="font-[900] text-2xl">nuxplay</h1>
                  <img
                    src="https://yt3.googleusercontent.com/ytc/AIdro_k7RWEIXhS1uWBcJ9omrQIF5M-CM12rLkw6gL62R1I545M=s900-c-k-c0x00ffffff-no-rj"
                    alt="nixplay-logo"
                    className="w-[5vh] h-[5vh]" />
                </div>
                <div>
                  <p className="text-2xl text-gray-500">Wi-FI Cloud Frames</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col content-center space-y-2">
                  <h4 className="text-center">Connect With</h4>
                  <div className="flex">
                    <p>amazon alexa</p>
                    <p>flickr</p>
                    <p>Google Photos</p>
                  </div>
                  <div className="flex">
                    <p>instagram</p>
                    <p>facebook</p>
                    <p>Dropbox</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="snap-start h-screen flex justify-center items-center">
            <div className="mt-10">
              <img src="https://m.media-amazon.com/images/I/71hXZfsv2zL.jpg" alt="" className="w-[45vh] h-[45vh]" />
            </div>
            <div>
              <h1>NIXPLAY EDGE</h1>
              <p>Basic and black with high-resolution display</p>
            </div>
            <div>
              <button>Learn More</button>
            </div>
            <div>
              <h1>8"</h1>
            </div>
          </section>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
