import Banner from "@/components/sections/Banner";

const termsData = [
  {
    title: "Welcome to Umazing",
    content: [
      "These Terms and Conditions outline the rules and regulations for the use of Umazing's website, located at [your website URL].",
      "By accessing this website, we assume you accept these terms and conditions. Do not continue to use Umazing if you do not agree to all the terms and conditions stated on this page."
    ]
  },
  {
    title: "Cookies",
    content: [
      "We use cookies to enhance your experience. By accessing Umazing, you agree to use cookies in accordance with our Privacy Policy."
    ]
  },
  {
    title: "License",
    content: [
      "Unless otherwise stated, Umazing and/or its licensors own the intellectual property rights for all material on this website. You may access it for personal use, but you must not:"
    ],
    listItems: [
      "Republish material from Umazing",
      "Sell or rent material from Umazing",
      "Reproduce, duplicate or copy material from Umazing",
      "Redistribute content from Umazing"
    ]
  },
  {
    title: "Hyperlinking to our Content",
    content: [
      "The following organizations may link to our website without prior written approval:",
    ],
    listItems: [
      "Government agencies",
      "Search engines",
      "News organizations",
      "Online directory distributors"
    ],
    additionalContent: [
      "Other businesses may link to our website only with prior approval. If you would like to link to our website, you must send an email request to [your support email]"
    ]
  },
  {
    title: "iFrames",
    content: [
      "Without prior approval and permission, you may not create frames around our web pages that alter in any way the visual presentation or appearance of our website."
    ]
  },
  {
    title: "Content Liability",
    content: [
      "We are not responsible for any content appearing on external websites that link to Umazing. If any objectionable link is found, we reserve the right to request its removal."
    ]
  },
  {
    title: "Your Privacy",
    content: [
      "Please read our [Privacy Policy]."
    ]
  },
  {
    title: "Reservation of Rights",
    content: [
      "We reserve the right to request that you remove any link to our website. We may also amend these terms and conditions at any time."
    ]
  },
  {
    title: "Removal of links from our website",
    content: [
      "If you find any link on our website that is offensive, you may contact us, and we will consider your request for removal."
    ]
  },
  {
    title: "Disclaimer",
    content: [
      "To the fullest extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to Umazing and its use. Nothing in this disclaimer will:"
    ],
    listItems: [
      "Limit or exclude our or your liability for death or personal injury",
      "Limit or exclude our or your liability for fraud or fraudulent misrepresentation",
      "Limit any of our or your liabilities in any way that is not permitted under applicable law"
    ]
  }
];

const Page = () => {
  return (
    <>
    <Banner heading="Terms and Conditions" />
    <div className="flex flex-col gap-10 lg:px-24 md:px-16 px-5 py-10">
        {termsData.map((section, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold">{section.title}</h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-lg mt-3">
                {paragraph}
              </p>
            ))}
            {section.listItems && (
            <ul className="list-disc list-inside mt-3">
                {section.listItems.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
            </ul>
            )}
            {section.additionalContent?.map((paragraph, aIndex) => (
              <p key={aIndex} className="text-lg mt-3">
                {paragraph}
              </p>
            ))}
        </div>
        ))}
        <div className="font-bold">
          By using our website, you agree to our Terms & Conditions.
        </div>
    </div>
    </>
  );
};

export default Page;
