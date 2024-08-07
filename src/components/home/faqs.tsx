import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Faqs() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full grid grid-cols-2 gap-3 "
    >
      <div className="w-full">
        {Array.from({ length: 2 }).map((_, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="w-full border p-2 rounded-lg mb-3"
          >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        ))}
      </div>
      <div className="w-full">
        {Array.from({ length: 2 }).map((_, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}-2`}
            className="w-full border p-2 rounded-lg mb-3"
          >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        ))}
      </div>
    </Accordion>
  );
}
