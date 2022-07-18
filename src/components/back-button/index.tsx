import { BaseButton } from "@/atoms"
import { IconChevronLeft } from "@/icons/chevron-left"

interface Props {
  goBack: () => void
}

const BackButton: React.FC<Props> = ({ goBack }) => {
  return (
    <BaseButton
      onPress={goBack}
      hitSlop={{ bottom: -5, left: -5, top: -5, right: -5 }}
    >
      <IconChevronLeft width={30} height={30} />
    </BaseButton>
  )
}

export { BackButton }
