import Banner from "@/components/sections/Banner";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <>
      <Banner
        heading="About Us"
        para="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
      {/* who we are  */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto w-full">
          <div className="flex flex-col w-full lg:flex-row items-center gap-8 md:gap-12">
            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Who We Are?</h2>
              <p className="text-gray-600 leading-relaxed">
                At Umazing, we are committed to redefining the online shopping
                experience. Our platform empowers buyers and sellers by offering
                a user-friendly, secure, and efficient marketplace where anyone
                can discover high-quality products with ease
              </p>
              <p className="text-gray-600 leading-relaxed">
                We bridge the gap between shoppers and businesses by providing
                an advanced yet simple-to-use shopping platform. With features
                like personalized recommendations, secure transactions, and
                efficient order management, Umazing ensures a smooth and
                enjoyable shopping experience.
              </p>
              <div className=" pb-4">
                <div>
                  <span className="font-semibold">✔ Effortless Shopping </span>{" "}
                  - Discover products, compare prices, and shop with confidence.
                </div>
                <div>
                  <span className="font-semibold">
                    ✔ Smart Order Management
                  </span>{" "}
                  - Track your purchases and receive real-time updates.
                </div>
              </div>
              <Link
                href="/"
                className="bg-primary py-4 w-full px-8 font-semibold leading-wider text-sm my-2  text-white rounded-full"
              >
                Explore Umazing now
              </Link>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  height={300}
                  width={300}
                  src="/images/about-us/about.png"
                  alt="About Us"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full lg:py-16 md:py-10 py-8 bg-[#fef7ee]">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl pb-3 font-bold">What Drives Us</h1>
          <p className="lg:w-1/2 md:w-2/3 w-full px-3 lg:px-0 mx-auto">Umazing simplifies eCommerce, empowering sellers to grow their businesses while providing customers with a seamless and enjoyable shopping experience.
          Our Core Features</p>
        </div>
        
        <div className="container mx-auto px-20 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            
            {/* Card 1 */}
            <div className="bg-white rounded-lg lg:mt-10 shadow-md p-6 max-w-sm w-full">
              <div className="flex mb-4">
                <Image 
                  src="/icons/about-us/shopping.svg"
                  width={64}
                  height={64}
                  alt="Secure Shopping"
                />
              </div>
              <h3 className="text-xl font-semibold  mb-3">Smart Shopping</h3>
              <p className="text-gray-600">
              Browse, compare, and purchase effortlessly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg lg:mb-10 shadow-md p-6 max-w-sm w-full">
              <div className="flex  mb-4">
                <Image
                  src="/icons/about-us/deals.svg" 
                  width={64}
                  height={64}
                  alt="Fast Delivery"
                />
              </div>
              <h3 className="text-xl font-semibold  mb-3">Exclusive Deals</h3>
              <p className="text-gray-600 ">
                Enjoy discounts and special promotions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg lg:mt-10 shadow-md p-6 max-w-sm w-full">
              <div className="flex  mb-4">
                <Image
                  src="/icons/about-us/transaction.svg"
                  width={64}
                  height={64}
                  alt="Quality Products"
                />
              </div>
              <h3 className="text-xl font-semibold  mb-3">Seamless Transactions</h3>
              <p className="text-gray-600 ">
                Browse, compare, and purchase effortlessly.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* what makes us different  */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-4xl pb-3 font-bold">
                What Makes us Different
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Umazing, we go beyond just being another eCommerce platform.
                Our goal is to create a seamless and personalized shopping
                experience that meets the needs of both buyers and sellers.
                Whether you’re looking for the best deals, a secure checkout
                process, or real-time order tracking, we ensure a smooth and
                enjoyable journey from start to finish.
              </p>
              <p className="text-gray-600 leading-relaxed pb-6">
                Our platform is built with advanced technology to offer a fast,
                reliable, and feature-rich experience. We prioritize user
                satisfaction, security, and innovation, making online shopping
                more convenient than ever before
              </p>

              <Link
                href="/"
                className="bg-primary py-4 w-full px-20 font-semibold leading-relaxed text-sm my-2  text-white rounded-full"
              >
                Shop Now
              </Link>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="grid gap-5 lg:gap-0 grid-col-1 lg:grid-cols-2">
                <div className="flex flex-col">
                  <div>
                    <Image
                      src="/icons/about-us/support.svg"
                      height={70}
                      width={50}
                      alt=""
                    />
                    <div className="pt-4">
                      <h1 className="font-semibold text-lg pb-1 tracking-wide">
                        Reliable Support
                      </h1>
                      <p>
                        Our team is always available to assist with your
                        queries.
                      </p>
                    </div>
                  </div>
                  <div className="lg:border-b my-5 mx-2"></div>
                  <div>
                    <Image
                      src="/icons/about-us/secure.svg"
                      height={70}
                      width={50}
                      alt=""
                    />
                    <div className="pt-4">
                      <h1 className="font-semibold text-lg pb-1 tracking-wide">
                      Secure Payments
                      </h1>
                      <p>
                      Safe and hassle-free transactions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex  flex-col lg:border-l lg:pl-4">
                <div>
                    <Image
                      src="/icons/about-us/integration.svg"
                      height={70}
                      width={50}
                      alt=""
                    />
                    <div className="pt-4">
                      <h1 className="font-semibold text-lg pb-1 tracking-wide">
                      Seamless Integrations
                      </h1>
                      <p>
                      Connect with multiple payment gateways.
                      </p>
                    </div>
                  </div>
                  <div className=" my-3"></div>
                  
                  <div>
                    <Image
                      src="/icons/about-us/global.svg"
                      height={70}
                      width={50}
                      alt=""
                    />
                    <div className="pt-4">
                      <h1 className="font-semibold text-lg pb-1 tracking-wide">
                      Global Accessibility
                      </h1>
                      <p>
                      Shop from anywhere, anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
