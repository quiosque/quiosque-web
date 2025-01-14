import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ModalContent from './components/ModalContent'

const TemplateModal = Object.assign(Dialog, {
  Content: ModalContent,
  Trigger: DialogTrigger,
  Header: DialogHeader,
  Title: DialogTitle,
  Description: DialogDescription,
})

export default TemplateModal