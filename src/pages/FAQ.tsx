import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I upload my documents?",
      answer: "You can upload your documents through our 'Book a Service' page. Select the service you need, and you'll find an upload button for JPG, PNG, PDF, or Word documents."
    },
    {
      question: "How long does document typing take?",
      answer: "Turnaround time depends on the length and complexity of the document. Usually, standard documents are completed within 24-48 hours. Urgent services are also available."
    },
    {
      question: "Can I order stationery online?",
      answer: "Yes, our stationery shop is fully functional online. You can add items to your cart, choose a delivery method, and pay securely through the website."
    },
    {
      question: "Can I pay online?",
      answer: "Absolutely. We support multiple payment methods including card payments, bank transfers, and mobile payments during the checkout process."
    },
    {
      question: "Do you offer same-day service?",
      answer: "Yes, for simple printing, photocopying, and scanning, we offer same-day service at our physical business centre."
    },
    {
      question: "How do I track my order?",
      answer: "Once you place an order or booking, you'll receive a reference number. Enter this number on our 'Order Tracking' page to see the real-time status of your request."
    }
  ];

  return (
    <div className="pb-20">
      <div className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Find quick answers to common questions about our services and stationery shop.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20 max-w-3xl">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
