import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faqs = () => {
    return (
        <div className='sm:mt-16 mt-8 px-6 sm:px-28 mb-16'>
            <h2 className="text-4xl font-bold text-cyan-400 mb-12">
                Frequently Asked Questions (FAQs)
            </h2>

            <div>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is NeuroBrain's chatbot and voice assistant?</AccordionTrigger>
                        <AccordionContent>
                            NeuroBrain offers a conversational chatbot and voice assistant designed to provide users with automated support, assistance, and information. The AI system can answer queries, assist with tasks, and provide personalized recommendations based on user interactions.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>How do I interact with the chatbot and voice assistant?</AccordionTrigger>
                        <AccordionContent>
                            You can interact with our chatbot via text or voice by simply typing or speaking your query. The AI will process your input and provide relevant responses or actions based on your request. You can ask questions, get recommendations, or request assistance with various tasks.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>What should I do if the chatbot or voice assistant doesn't understand my query?</AccordionTrigger>
                        <AccordionContent>
                            If the chatbot or voice assistant doesn't understand your request, you can try rephrasing your question or request. Additionally, you can ask for clarification or help from our support team for more complex queries that the AI may not handle.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>Can I customize the responses from the AI assistant?</AccordionTrigger>
                        <AccordionContent>
                            Currently, NeuroBrain offers a standard set of responses and services. However, we are continually working on improvements, and customizations may become available in future updates. Please stay tuned for more features and options.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>Is my data safe while using the chatbot and voice assistant?</AccordionTrigger>
                        <AccordionContent>
                            Yes, your privacy and security are our top priorities. We follow strict data protection guidelines to ensure your personal information and interactions are secure. For more details, please review our <a href="/privacy-policy" className="text-cyan-600">Privacy Policy</a>.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>Can I use the chatbot and voice assistant on mobile devices?</AccordionTrigger>
                        <AccordionContent>
                            Yes, NeuroBrain's chatbot and voice assistant are fully compatible with mobile devices. You can interact with the AI through your smartphone or tablet, either through a web interface or our dedicated mobile app (if available).
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>What languages does NeuroBrain support?</AccordionTrigger>
                        <AccordionContent>
                            Currently, NeuroBrain supports multiple languages, including English. We are working on expanding the language options, and more languages will be added in future updates. Stay tuned for announcements.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>How accurate are the responses from the AI assistant?</AccordionTrigger>
                        <AccordionContent>
                            Our AI assistant is powered by advanced machine learning models and continuously improves through user interactions. While it provides accurate responses based on available data, some complex or highly specific queries may require further clarification or human assistance.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>Can I provide feedback on my experience with the AI assistant?</AccordionTrigger>
                        <AccordionContent>
                            Absolutely! We welcome user feedback to help improve our AI assistant. You can share your suggestions, report issues, or provide general feedback through our contact form or by emailing us at <a href="mailto:hi.neurobrains@gmail.com" className="text-cyan-600">hi.neurobrains@gmail.com</a>.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                        <AccordionTrigger>How can I get support if I encounter issues with the AI assistant?</AccordionTrigger>
                        <AccordionContent>
                            If you encounter any issues or have questions, you can reach out to our customer support team. Simply email us at <a href="mailto:hi.neurobrains@gmail.com" className="text-cyan-600">hi.neurobrains@gmail.com</a> or use the contact section of our website for further assistance.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default Faqs;
