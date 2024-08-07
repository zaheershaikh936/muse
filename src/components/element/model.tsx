import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { Button } from "../ui/button";

interface ModelProps {
  button: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  modelStyle?: string;
}
export default function Model({
  button,
  content,
  footer,
  modelStyle,
}: ModelProps) {
  return (
    <Modal>
      <ModalTrigger>
        <Button variant="default">{button}</Button>
      </ModalTrigger>
      <ModalBody className={`${modelStyle}`}>
        <ModalContent>{content}</ModalContent>
        {footer !== undefined ? (
          <ModalFooter className="gap-4">{footer}</ModalFooter>
        ) : null}
      </ModalBody>
    </Modal>
  );
}
